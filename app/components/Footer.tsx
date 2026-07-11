import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { Logo } from "@/app/components/Logo";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Logo
            markSize={34}
            wordmarkClassName="text-xl"
            taglineClassName="text-brass-light/80"
            showTagline
            className="text-cream"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {site.tagline} Ontario&rsquo;s only boutique hospitality firm
            specialising in end-to-end corporate retreat experiences —
            elevated dining, curated off-site programming, and flawless
            operational execution — under one trusted partnership, across
            the Collingwood–Blue Mountain corridor.
          </p>
          <p className="mt-6 text-xs tracking-[0.14em] text-cream/50 uppercase">
            {site.region}
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] text-brass-light uppercase">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.18em] text-brass-light uppercase">
            Connect
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/75">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-cream"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="transition-colors hover:text-cream"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <span>{site.instagram}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between md:px-10">
          <span>
            &copy; {new Date().getFullYear()} The Hospitality Bureau. All
            rights reserved.
          </span>
          <span>
            For leadership teams who expect precision execution,
            delivered seamlessly, every time.
          </span>
        </div>
      </div>
    </footer>
  );
}
