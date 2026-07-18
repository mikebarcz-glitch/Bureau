type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 32, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 140 120"
      width={size}
      height={(size * 120) / 140}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M20 104 L20 42 L55 10 L118 60 L118 108 L72 108 L72 64" />
      <rect x="36" y="64" width="36" height="40" />
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
