type MeshVariant = "hero" | "cta" | "section";

interface Props {
  variant?: MeshVariant;
  className?: string;
}

export default function MeshGradient({
  variant = "hero",
  className = "",
}: Props) {
  if (variant === "cta") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div className="mesh-cta absolute inset-0" />
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-mesh-2/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-mesh-3/30 blur-3xl" />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-mesh-1/10 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-mesh-2/10 blur-3xl" />
      </div>
    );
  }

  // hero
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-mesh-1/15 blur-3xl" />
      <div className="absolute top-20 -right-24 h-[24rem] w-[24rem] rounded-full bg-mesh-2/15 blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 h-[22rem] w-[22rem] rounded-full bg-mesh-3/10 blur-3xl" />
    </div>
  );
}
