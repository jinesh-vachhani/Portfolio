import { ImageResponse } from "next/og";
import { highlights, profile } from "@/data/resume";

export const alt = `${profile.name} — ${profile.title}, backend engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf7",
          color: "#15171c",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexShrink: 0,
              width: 88,
              height: 88,
              alignItems: "center",
              justifyContent: "center",
              background: "#0d6b5b",
              color: "#fff",
              borderRadius: 22,
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -1.5 }}>{profile.name}</div>
            <div style={{ fontSize: 28, color: "#565b68" }}>{profile.title}</div>
            <div style={{ fontSize: 24, color: "#0d6b5b", marginTop: 2 }}>{profile.specialty}</div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 40, lineHeight: 1.25, maxWidth: 1000, fontWeight: 500 }}>
          {profile.headline}
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          {highlights.slice(0, 3).map((h) => (
            <div
              key={h.label}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                padding: "20px 24px",
                border: "2px solid #e6e2d9",
                borderRadius: 16,
                background: "#fff",
              }}
            >
              <div style={{ fontSize: 40, fontWeight: 700, color: "#0d6b5b" }}>{h.value}</div>
              <div style={{ fontSize: 19, color: "#565b68", marginTop: 4 }}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
