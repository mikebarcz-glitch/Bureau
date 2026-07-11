import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-forest text-cream hover:bg-forest-dark border border-forest hover:border-forest-dark",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/[0.03]",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
