import Image from "next/image";

type PhotoImageProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
};

export function PhotoImage({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
}: PhotoImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 border border-black/5" />
    </div>
  );
}
