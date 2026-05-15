import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "BITSOL Marketing — AI Digital Marketing Agency Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #050816 0%, #0a0f2e 50%, #050816 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(139,92,246,0.15)",
            border: "1px solid rgba(139,92,246,0.4)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#8b5cf6",
            }}
          />
          <span style={{ color: "#a78bfa", fontSize: 18, letterSpacing: 2 }}>
            AI-POWERED GROWTH
          </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 0,
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: -2,
            }}
          >
            BITSOL
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 300,
              color: "#8b5cf6",
              letterSpacing: -2,
              marginLeft: 16,
            }}
          >
            Marketing
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#94a3b8",
            marginBottom: 48,
            letterSpacing: 1,
          }}
        >
          AI Digital Marketing Agency · Pakistan & Global
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {["AI SEO", "Chatbot Dev", "Meta Ads", "Automation", "Web Dev"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 999,
                  padding: "10px 22px",
                  color: "#e2e8f0",
                  fontSize: 18,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            color: "rgba(148,163,184,0.6)",
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          bitsolmarketing.com
        </div>
      </div>
    ),
    { ...size }
  );
}
