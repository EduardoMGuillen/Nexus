import { ImageResponse } from "next/og";
import { getPost } from "@/lib/blog";

export const runtime = "edge";
export const alt = "Artículo del blog de Nexus Global";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GLOW: Record<string, string> = {
  teal: "rgba(0,186,196,0.45)",
  violet: "rgba(139,92,246,0.45)",
  amber: "rgba(245,158,11,0.4)",
  emerald: "rgba(16,185,129,0.4)",
  rose: "rgba(244,63,94,0.4)",
  blue: "rgba(14,165,233,0.45)",
};

export default function BlogOgImage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const title = post?.title ?? "Blog de Nexus Global";
  const glow = GLOW[post?.accent ?? "teal"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          background: `radial-gradient(circle at 85% 20%, ${glow}, transparent 50%), linear-gradient(135deg, #05080f, #0a1428)`,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 8 }}>NEXUS · BLOG</div>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: 20,
              color: "#cbd5e1",
            }}
          >
            {post?.category ?? "Blog"}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.08, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 22, color: "#66e0e6" }}>nexusglobalsuministros.com</div>
      </div>
    ),
    size
  );
}
