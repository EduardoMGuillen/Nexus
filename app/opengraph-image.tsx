import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nexus Global — Páginas web desde $150 con libro de marca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 78% 40%, rgba(0,186,196,0.35), transparent 45%), linear-gradient(135deg, #05080f 0%, #0a1830 60%, #05080f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              border: "3px solid #00bac4",
              transform: "rotate(45deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ transform: "rotate(-45deg)", color: "#00bac4", fontSize: 30, fontWeight: 800 }}>N</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 8 }}>NEXUS</div>
            <div style={{ fontSize: 14, letterSpacing: 10, color: "#66e0e6" }}>GLOBAL</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 24, color: "#66e0e6", letterSpacing: 4, textTransform: "uppercase" }}>
            Desarrollo web · Honduras
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 18, display: "flex", flexWrap: "wrap" }}>
            Páginas web que hacen&nbsp;<span style={{ color: "#33d6dd" }}>crecer</span>&nbsp;tu negocio
          </div>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {["Desde $150", "Libro de marca incluido", "Conectada a WhatsApp"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 24,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
