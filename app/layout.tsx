import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers(); const host = h.get("x-forwarded-host") ?? h.get("host");
  const base = host ? new URL(`${h.get("x-forwarded-proto") ?? "https"}://${host}`) : undefined;
  return { metadataBase: base, title: "POC — Private Office Consulting", description: "One call. Everything else is our concern. Private consulting and concierge on the French Riviera.", icons: { icon: "/favicon.svg" }, openGraph: { title: "POC — Private Office Consulting", description: "One call. Everything else is our concern.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "POC" }] }, twitter: { card: "summary_large_image", images: ["/og.png"] } };
}
