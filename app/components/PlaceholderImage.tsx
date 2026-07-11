type PlaceholderImageProps = {
  caption: string;
  aspect?: string;
  variant?: "linen" | "sage" | "stone" | "brass";
  className?: string;
  showCaption?: boolean;
};

const variants: Record<string, string> = {
  linen: "from-[#efe4c9] via-[#e2d3ac] to-[#c7ac7c]",
  sage: "from-[#d7dcc7] via-[#b3bd97] to-[#7d8863]",
  stone: "from-[#ece4d3] via-[#cabfa6] to-[#a89876]",
  brass: "from-[#e3d2ac] via-[#c7a978] to-[#a9895c]",
};

export function PlaceholderImage({
  caption,
  aspect = "aspect-[4/5]",
  variant = "linen",
  className = "",
  showCaption = true,
}: PlaceholderImageProps) {
  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-sm bg-gradient-to-br ${aspect} ${variants[variant]}`}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 22% 20%, rgba(255,255,255,0.55), transparent 45%), radial-gradient(circle at 82% 78%, rgba(0,0,0,0.14), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-3xl tracking-[0.15em] text-cream/50 select-none md:text-4xl">
            HB
          </span>
        </div>
        <div className="absolute inset-0 border border-black/5" />
      </div>
      {showCaption ? (
        <figcaption className="mt-2 text-xs leading-snug text-ink-muted italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
