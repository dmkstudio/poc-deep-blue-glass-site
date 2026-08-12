import { NextResponse } from "next/server";
import { requests } from "../../../db/schema";
import { getDb } from "../../../db";
import { env } from "cloudflare:workers";

const directions = new Set([
  "business",
  "property",
  "relocation",
  "mobility",
  "brand",
  "custom",
  "unsure",
]);
const locales = new Set(["en", "fr", "ru"]);
const MAX_BODY_BYTES = 16_384;
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const windows = new Map<string, { count: number; resetAt: number }>();

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  if (!(request.headers.get("content-type") || "").toLowerCase().includes("application/json")) {
    return NextResponse.json({ ok: false, error: "content_type" }, { status: 415 });
  }
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
  }
  const client = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const now = Date.now();
  const bucket = windows.get(client);
  if (!bucket || bucket.resetAt <= now) windows.set(client, { count: 1, resetAt: now + WINDOW_MS });
  else if (bucket.count >= MAX_REQUESTS_PER_WINDOW) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  else bucket.count += 1;
  let body: Record<string, unknown>;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).byteLength > MAX_BODY_BYTES) return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
    body = JSON.parse(text) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 40);
  const direction = clean(body.direction, 30);
  const task = clean(body.task, 3000);
  const locale = clean(body.locale, 2);
  const sourcePath = clean(body.sourcePath, 250) || "/";

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !directions.has(direction) ||
    task.length < 20 ||
    !locales.has(locale)
  ) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  try {
    const id = crypto.randomUUID();
    const d1 = env.DB;
    await d1.batch([
      d1.prepare(`CREATE TABLE IF NOT EXISTS requests (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        direction TEXT NOT NULL,
        task TEXT NOT NULL,
        locale TEXT NOT NULL,
        source_path TEXT NOT NULL,
        status TEXT DEFAULT 'new' NOT NULL,
        created_at INTEGER NOT NULL
      )`),
      d1.prepare("CREATE INDEX IF NOT EXISTS idx_requests_created_at ON requests(created_at)"),
      d1.prepare("CREATE INDEX IF NOT EXISTS idx_requests_status_created_at ON requests(status, created_at)"),
    ]);
    await getDb().insert(requests).values({
      id,
      name,
      email,
      phone: phone || null,
      direction,
      task,
      locale,
      sourcePath,
      status: "new",
      createdAt: Date.now(),
    });
    return NextResponse.json({ ok: true, requestId: id }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("POC request persistence failed", error);
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }
}
