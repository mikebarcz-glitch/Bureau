type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 32, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 110 96"
      width={size}
      height={(size * 96) / 110}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 84 L18 44 L48 16 L78 44 L78 84" />
      <path d="M42 84 L42 50 L62 30 L96 54 L96 84" />
      <rect x="30" y="56" width="16" height="28" />
    </svg>
  );
}

type LogoProps = {
  layout?: "horizontal" | "stacked";
  markSize?: number;
  wordmarkClassName?: string;
  taglineClassName?: string;
  showTagline?: boolean;
  className?: string;
};

export function Logo({
  layout = "horizontal",
  markSize = 30,
  wordmarkClassName = "",
  taglineClassName = "",
  showTagline = false,
  className = "",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 ${layout === "stacked" ? "flex-col text-center" : ""} ${className}`}
    >
      <LogoMark size={markSize} />
      <span className="flex flex-col">
        <span
          className={`font-serif tracking-[0.06em] ${wordmarkClassName}`}
        >
          THE HOSPITALITY BUREAU
        </span>
        {showTagline ? (
          <span
            className={`mt-1 text-[10px] font-medium tracking-[0.24em] uppercase ${taglineClassName}`}
          >
            Boutique Catering &amp; Retreat Planning
          </span>
        ) : null}
      </span>
    </span>
  );
}
