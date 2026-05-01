import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-action disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-action text-white hover:bg-action-dark",
  secondary: "bg-surface text-ink border border-line hover:bg-surface-alt",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-4 text-sm sm:px-5 sm:text-base",
  lg: "h-12 px-5 text-base sm:h-14 sm:px-7 sm:text-lg",
};

export default function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
