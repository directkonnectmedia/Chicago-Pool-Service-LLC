"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
  /** Approximate width in px for the SVG */
  size?: number;
};

export function AnimatedLogo({ className = "", size = 96 }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size * 0.62 }}
      initial={false}
      animate={reduce ? {} : { opacity: 1 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 74"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="lg-water" x1="12" y1="46" x2="108" y2="62">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="lg-deck" x1="0" y1="44" x2="120" y2="44">
            <stop offset="0%" stopColor="#e7e5e4" />
            <stop offset="100%" stopColor="#d6d3d1" />
          </linearGradient>
          <clipPath id="clip-pool">
            <rect x="14" y="46" width="92" height="18" rx="2" />
          </clipPath>
        </defs>

        {/* Deck / coping */}
        <path
          d="M8 38 L112 38 L112 46 L8 46 Z"
          fill="url(#lg-deck)"
          stroke="#a8a29e"
          strokeWidth="0.8"
        />
        {/* Pool interior */}
        <rect
          x="14"
          y="46"
          width="92"
          height="18"
          rx="2"
          fill="url(#lg-water)"
          stroke="#0c4a6e"
          strokeWidth="0.9"
        />
        {/* Water shimmer */}
        {!reduce && (
          <motion.rect
            x="14"
            y="46"
            width="92"
            height="18"
            rx="2"
            clipPath="url(#clip-pool)"
            fill="white"
            initial={{ opacity: 0.06 }}
            animate={{ opacity: [0.06, 0.22, 0.06], x: [-6, 10, -6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        {/* Ripple highlight */}
        {!reduce && (
          <motion.ellipse
            cx="52"
            cy="56"
            rx="18"
            ry="5"
            fill="#bae6fd"
            opacity={0.35}
            animate={{ rx: [18, 22, 18], ry: [5, 6, 5], opacity: [0.35, 0.18, 0.35] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        {/* Figure — simplified */}
        <g stroke="#1c1917" strokeWidth="1.4" strokeLinecap="round">
          {/* Body */}
          <path d="M82 22 C78 26 76 32 77 38" fill="none" />
          {/* Head */}
          <circle cx="84" cy="18" r="3.2" fill="#fecaca" stroke="#1c1917" />
          {/* Arm reaching */}
          <path d="M79 28 L68 36" fill="none" />
          {/* Leg */}
          <path d="M77 38 L80 44" fill="none" />
        </g>

        {/* Pole + brush */}
        <g>
          <motion.g
            animate={
              reduce
                ? {}
                : {
                    rotate: [0, -2.2, 0, 2.2, 0],
                    x: [0, 2.5, 0, -2.5, 0],
                  }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "68px 44px" }}
          >
            <line
              x1="68"
              y1="36"
              x2="44"
              y2="54"
              stroke="#57534e"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="36"
              y="50"
              width="14"
              height="7"
              rx="1.5"
              fill="#78716c"
              stroke="#44403c"
              strokeWidth="0.8"
            />
            <rect x="38" y="52" width="10" height="3" rx="0.8" fill="#a8a29e" />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  );
}
