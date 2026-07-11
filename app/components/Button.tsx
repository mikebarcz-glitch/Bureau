import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md";
  onClick?: () => void;
  className?: string;
};

const variants = {
  primary:
    "bg-forest text-cream hover:bg-forest-dark border border-forest hover:border-forest-dark",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/[0.03]",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/10",
  accent:
    "bg-brass-light text-forest-dark border border-brass-light hover:bg-forest-dark hover:text-brass-light hover:border-forest-dark",
};

const sizes = {
  sm: "px-5 py-2.5 text-[12px]",
  md: "px-7 py-3.5 text-[13px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
