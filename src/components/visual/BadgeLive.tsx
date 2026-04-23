interface Props {
  text: string;
  className?: string;
}

export default function BadgeLive({ text, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-medium text-ink backdrop-blur ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          aria-hidden="true"
          className="absolute inline-flex h-full w-full rounded-full bg-success/60 pulse-dot"
        />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>
      {text}
    </span>
  );
}
