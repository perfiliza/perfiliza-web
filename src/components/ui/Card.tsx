import type { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Card({ className = "", children }: Props) {
  return (
    <div
      className={`rounded-2xl bg-surface border border-line shadow-lift p-6 sm:p-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
