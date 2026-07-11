"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Logo } from "@/app/components/Logo";
import { Button } from "@/app/components/Button";

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
          <Logo markSize={32} wordmarkClassName="text-[1.15rem]" />
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
          <Button href="/contact" size="sm">
            Start a Retreat
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-3.5 flex flex-col gap-1.5 p-3.5 md:hidden"
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
        <nav
          id="mobile-nav"
          className="flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto border-t border-stone/70 bg-cream px-6 py-4 md:hidden"
        >
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
          <Button
            href="/contact"
            size="sm"
            onClick={() => setOpen(false)}
            className="mt-2 w-fit"
          >
            Start a Retreat
          </Button>
          <span className="mt-4 text-xs text-ink-muted">{site.region}</span>
        </nav>
      ) : null}
    </header>
  );
}
