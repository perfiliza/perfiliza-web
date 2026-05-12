import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Perfiliza — Veja seu site pronto antes de pagar";
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
          padding: "80px 96px",
          background:
            "linear-gradient(135deg, #4A5A3A 0%, #3A4A2C 100%)",
          color: "#F5F1E8",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 30,
            fontWeight: 500,
            letterSpacing: -0.5,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F5F1E8"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
            <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
            <path d="M18 22v-3" />
            <circle cx="10" cy="10" r="3" />
          </svg>
          Perfiliza
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 960,
            }}
          >
            Veja seu site pronto antes de pagar.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              lineHeight: 1.4,
              opacity: 0.85,
              maxWidth: 880,
              display: "flex",
              fontFamily: "sans-serif",
              fontWeight: 400,
            }}
          >
            R$ 347 pelo ano todo. Hospedagem incluída. Sem fidelização.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.75,
            fontFamily: "sans-serif",
            fontWeight: 400,
          }}
        >
          <span>perfiliza.com</span>
          <span>Sites para PMEs brasileiras</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
