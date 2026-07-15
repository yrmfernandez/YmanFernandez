import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

// Social share card, rendered on the brand's paper/pine palette.
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
          background: "#f0f1ec",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#2f6f5e",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 44, height: 2, background: "#2f6f5e" }} />
          {site.role}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#1e2420",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 30,
              color: "#63685c",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Turning messy data into models, decisions, and clear stories.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#63685c",
          }}
        >
          <span>github.com/yrmfernandez</span>
          <span style={{ color: "#2f6f5e", fontWeight: 600 }}>
            Data Science · 2026
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
