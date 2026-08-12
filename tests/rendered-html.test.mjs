import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("ships the complete POC experience", async () => {
  const [page, copy, css, api] = await Promise.all([
    readFile(new URL("../app/PocSite.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/poc-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/api/request/route.ts", import.meta.url), "utf8"),
  ]);
  assert.match(page, /Private Office Consulting/);
  assert.match(page, /contactLinks/);
  assert.match(copy, /One call\. Everything else is our concern/);
  assert.match(copy, /Un appel/);
  assert.match(copy, /Один звонок/);
  assert.match(css, /@media\(max-width:430px\)/);
  assert.match(api, /rate_limited/);
  assert.doesNotMatch(page + copy + css, /Your site is taking shape|Building your site|codex-preview/i);
});
