import type { NicheKey } from "@/types/content";

interface Props {
  niche: NicheKey;
  className?: string;
}

export default function NicheIconScene({ niche, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`relative flex h-28 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary-soft via-surface-alt to-surface ${className}`}
    >
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-mesh-2/10 blur-2xl" />
      {niche === "odonto" && <OdontoScene />}
      {niche === "estetica" && <EstheticaScene />}
      {niche === "restaurantes" && <RestaurantsScene />}
      {niche === "home" && <HomeScene />}
    </div>
  );
}

function OdontoScene() {
  return (
    <svg viewBox="0 0 120 80" className="relative h-20 w-auto">
      <defs>
        <linearGradient id="tooth-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8F0FE" />
        </linearGradient>
      </defs>
      {/* shine */}
      <circle cx="85" cy="22" r="4" fill="#FFD66E" opacity="0.9" />
      <circle cx="90" cy="28" r="2" fill="#FFD66E" opacity="0.6" />
      {/* tooth */}
      <path
        d="M60 16c-12 0-22 6-22 18 0 8 3 16 6 24 2 5 6 8 10 6 3-2 3-8 4-12 1-3 2-5 4-5s3 2 4 5c1 4 1 10 4 12 4 2 8-1 10-6 3-8 6-16 6-24 0-12-14-18-26-18Z"
        fill="url(#tooth-grad)"
        stroke="#1A73E8"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* sparkle */}
      <path
        d="M50 30l2 4 4 2-4 2-2 4-2-4-4-2 4-2z"
        fill="#1A73E8"
        opacity="0.85"
      />
    </svg>
  );
}

function EstheticaScene() {
  return (
    <svg viewBox="0 0 120 80" className="relative h-20 w-auto">
      <defs>
        <linearGradient id="face-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FCE4EC" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
      </defs>
      {/* profile */}
      <path
        d="M70 8c-14 0-22 10-22 22 0 6 2 10 4 14 2 4 2 6 2 10 0 4-2 6-2 10 0 4 4 6 8 6h16c8 0 12-4 12-12V30c0-14-6-22-18-22Z"
        fill="url(#face-grad)"
        stroke="#D97AA6"
        strokeWidth="1.5"
      />
      {/* contour lines */}
      <path
        d="M60 24c4-2 8-2 12 0"
        stroke="#1A73E8"
        strokeWidth="1"
        fill="none"
        strokeDasharray="2 2"
      />
      <path
        d="M58 34c4-2 10-2 14 0"
        stroke="#1A73E8"
        strokeWidth="1"
        fill="none"
        strokeDasharray="2 2"
      />
      <path
        d="M58 44c4-2 10-2 14 0"
        stroke="#1A73E8"
        strokeWidth="1"
        fill="none"
        strokeDasharray="2 2"
      />
      {/* sparkle */}
      <path
        d="M92 18l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z"
        fill="#D97AA6"
      />
      <circle cx="36" cy="24" r="2" fill="#1A73E8" opacity="0.6" />
    </svg>
  );
}

function RestaurantsScene() {
  return (
    <svg viewBox="0 0 120 80" className="relative h-20 w-auto">
      <defs>
        <radialGradient id="plate-grad" cx="0.5" cy="0.4" r="0.6">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8EAED" />
        </radialGradient>
      </defs>
      {/* plate */}
      <circle cx="60" cy="40" r="28" fill="url(#plate-grad)" stroke="#CFD8DC" strokeWidth="1.5" />
      <circle cx="60" cy="40" r="22" fill="none" stroke="#CFD8DC" strokeWidth="0.8" strokeDasharray="2 2" />
      {/* food dots */}
      <circle cx="52" cy="36" r="5" fill="#F4B400" />
      <circle cx="66" cy="34" r="4" fill="#D93025" opacity="0.85" />
      <circle cx="62" cy="46" r="5" fill="#1E8E3E" opacity="0.85" />
      {/* fork */}
      <path
        d="M28 20v20c0 3 2 5 4 5v16"
        stroke="#5F6368"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M26 20v12M30 20v12"
        stroke="#5F6368"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* steam */}
      <path
        d="M50 12c2 2-2 4 0 6M58 10c2 2-2 4 0 6M66 12c2 2-2 4 0 6"
        stroke="#1A73E8"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function HomeScene() {
  return (
    <svg viewBox="0 0 120 80" className="relative h-20 w-auto">
      <defs>
        <linearGradient id="pin-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#0F4FBF" />
        </linearGradient>
      </defs>
      <path
        d="M60 14c-12 0-20 9-20 20 0 16 20 32 20 32s20-16 20-32c0-11-8-20-20-20z"
        fill="url(#pin-grad)"
      />
      <circle cx="60" cy="32" r="7" fill="#FFFFFF" />
      <path
        d="M20 66h80"
        stroke="#1A73E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 4"
        opacity="0.4"
      />
    </svg>
  );
}
