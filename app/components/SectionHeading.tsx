type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center items-center" : "text-left items-start"} flex flex-col gap-4 ${className}`}
    >
      {kicker ? <span className="kicker">{kicker}</span> : null}
      <h2
        className={`font-serif text-balance text-3xl leading-[1.15] md:text-4xl lg:text-[2.75rem] ${dark ? "text-cream" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`max-w-2xl text-balance text-base leading-relaxed md:text-lg ${dark ? "text-cream/75" : "text-ink-muted"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
