import { COMPANY } from "@/lib/site-data";
import { AnimatedLogo } from "./AnimatedLogo";

type Props = {
  variant?: "header" | "hero";
  className?: string;
};

export function BrandMark({ variant = "header", className = "" }: Props) {
  const isHero = variant === "hero";
  const logoSize = isHero ? 112 : 52;

  return (
    <div
      className={`flex items-center gap-3 ${isHero ? "flex-col sm:flex-row sm:gap-5" : ""} ${className}`}
    >
      <AnimatedLogo size={logoSize} />
      <div className={`min-w-0 text-center ${isHero ? "sm:text-left" : ""}`}>
        <p
          className={`font-semibold tracking-tight text-white drop-shadow-md ${
            isHero
              ? "font-[family-name:var(--font-display)] text-[clamp(1.75rem,6vw,3.25rem)] leading-tight"
              : "font-[family-name:var(--font-display)] text-lg sm:text-xl leading-snug"
          }`}
        >
          {COMPANY.name}
        </p>
        {!isHero ? (
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100/90 sm:block">
            Remodeling
          </p>
        ) : (
          <p className="mt-3 max-w-xl text-base text-white/90 drop-shadow sm:text-lg">
            {COMPANY.tagline}
          </p>
        )}
      </div>
    </div>
  );
}
