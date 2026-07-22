type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 32, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 452.02 371.95"
      width={size}
      height={(size * 371.95) / 452.02}
      className={className}
      aria-hidden="true"
    >
      <g
        transform="translate(-4.99102,375.951408) scale(0.1,-0.1)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M812 3359 l-762 -401 2 -1072 3 -1071 45 0 45 0 3 1045 2 1045 711
373 c391 205 714 372 719 370 4 -2 326 -169 714 -373 l705 -370 1 -997 0 -998
-475 0 -475 0 0 665 0 665 -480 0 -480 0 2 -712 3 -713 433 -3 432 -2 0 -385
0 -385 1305 0 1305 0 -2 1073 -3 1072 -1370 722 c-753 397 -1427 751 -1496
787 l-125 66 -762 -401z m2976 -873 l682 -359 0 -993 0 -994 -1210 0 -1210 0
0 335 0 335 520 0 520 0 0 1021 c0 561 4 1019 8 1017 5 -1 315 -165 690 -362z
m-1828 -961 l0 -615 -385 0 -385 0 0 615 0 615 385 0 385 0 0 -615z"
        />
      </g>
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
