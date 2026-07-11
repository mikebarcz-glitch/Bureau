"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Logo } from "@/app/components/Logo";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone/70 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-ink"
          onClick={() => setOpen(false)}
        >
          <Logo markSize={26} wordmarkClassName="text-[0.95rem]" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-[0.06em] uppercase transition-colors ${
                  active
                    ? "text-forest"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm border border-forest bg-forest px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] text-cream uppercase transition-colors hover:bg-forest-dark hover:border-forest-dark"
          >
            Design Your Retreat
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-stone/70 bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium tracking-[0.04em] text-ink uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit rounded-sm border border-forest bg-forest px-5 py-2.5 text-[12px] font-medium tracking-[0.08em] text-cream uppercase"
          >
            Design Your Retreat
          </Link>
          <span className="mt-4 text-xs text-ink-muted">{site.region}</span>
        </nav>
      ) : null}
    </header>
  );
}
