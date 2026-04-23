interface Props {
  variant?: "full" | "mark";
  className?: string;
  tone?: "default" | "on-primary";
}

export default function BrandLogo({
  variant = "full",
  className = "",
  tone = "default",
}: Props) {
  const iconColor = tone === "on-primary" ? "text-white" : "text-primary";
  const textColor = tone === "on-primary" ? "text-white" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <MapPinHouseIcon className={`h-5 w-5 shrink-0 md:h-6 md:w-6 ${iconColor}`} />
      {variant === "full" && (
        <span
          className={`text-[0.95rem] font-bold tracking-tight md:text-lg ${textColor}`}
        >
          Perfiliza
        </span>
      )}
    </span>
  );
}

function MapPinHouseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
      <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
      <path d="M18 22v-3" />
      <circle cx="10" cy="10" r="3" />
    </svg>
  );
}
