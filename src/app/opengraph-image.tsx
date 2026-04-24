import { ImageResponse } from "next/og";

export const alt = "Perfiliza — seu Google Meu Negócio cuidado toda semana";
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
            "linear-gradient(135deg, #0B57D0 0%, #1A73E8 55%, #4C8DF5 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.14), transparent 50%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            P
          </div>
          Perfiliza
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Seu Google Meu Negócio cuidado toda semana.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.3,
              opacity: 0.9,
              maxWidth: 820,
              display: "flex",
            }}
          >
            Primeiro mês por nossa conta. Sem fidelidade.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            opacity: 0.85,
          }}
        >
          <span>perfiliza.com</span>
          <span>Gestão semanal + GEO para IA</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
