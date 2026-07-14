import Image from "next/image";
import Link from "next/link";
import {
  BedDouble,
  Check,
  Compass,
  Gift,
  MapPinned,
  NotebookPen,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PhotoImage } from "@/app/components/PhotoImage";
import { SectionHeading } from "@/app/components/SectionHeading";

const pillars = [
  {
    icon: NotebookPen,
    title: "Retreat Design",
    body: "Every itinerary architected hour-by-hour around your team's goals — never a template, never generic.",
  },
  {
    icon: UtensilsCrossed,
    title: "Elevated Dining",
    body: "Chef-led menus, executive-grade service standards, and dietary needs handled without a second thought.",
  },
  {
    icon: Compass,
    title: "Curated Experiences",
    body: "Adventure, wellness, and culinary programming woven into a single, cohesive arc.",
  },
  {
    icon: Check,
    title: "Flawless Execution",
    body: "One accountable partner on-site — not six vendors left for you to manage.",
  },
];

const included = [
  {
    icon: UtensilsCrossed,
    title: "Chalet Catering",
    body: "Breakfast, working lunches, plated dinners, and receptions — every menu custom, never templated.",
    href: "/services#catering",
  },
  {
    icon: Wine,
    title: "Hosted Dining Experiences",
    body: "Chef's table narration, wine-paired evenings, and interactive culinary formats built for connection.",
    href: "/services#hosted-dining",
  },
  {
    icon: Compass,
    title: "Off-Site Experiences",
    body: "Adventure, wellness, culinary, and team-building programming — fully vetted, fully coordinated.",
    href: "/experiences",
  },
  {
    icon: Gift,
    title: "Corporate Gifting",
    body: "Branded welcome kits, chalet styling, and departure moments your guests remember.",
    href: "/services#gifting",
  },
  {
    icon: BedDouble,
    title: "Chalet Accommodations",
    body: "A curated chalet matched to your group, with multi-property coordination for larger retreats.",
    href: "/services#accommodations",
  },
];

const wants = [
  "Flawless execution — no surprises",
  "Clear, proactive communication at every step",
  "Elevated, brand-aligned experiences",
  "Expert handling of every dietary need",
  "One trusted partner, not six vendors to manage",
  "Discretion and professionalism, start to finish",
];

const stats = [
  { value: "4–25", label: "Guests per retreat — our defined operating range" },
  { value: "5", label: "Interconnected service lines under one partnership" },
  { value: "90–120", label: "Minutes from Toronto to the corridor" },
  { value: "48 hrs", label: "From discovery call to custom proposal" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-georgian-bay.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/60" />
        </div>

        <Container className="relative flex min-h-[86vh] flex-col justify-end gap-10 py-16 md:py-24">
          <div className="flex max-w-3xl flex-col gap-6 animate-fade-up">
            <span className="kicker text-brass-light">
              Collingwood · Blue Mountain · Thornbury · Meaford
            </span>
            <h1 className="font-serif text-balance text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-[4rem]">
              The Quiet Art of Being Hosted
            </h1>
            <p className="max-w-xl text-balance text-base leading-relaxed text-cream/85 md:text-lg">
              We design and execute premium corporate retreat experiences
              for Toronto-based companies — dining, activities, logistics,
              and on-site management — under one trusted partnership, so
              you can be fully present.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="accent">
                Plan Your Retreat
              </Button>
              <Button href="/services" variant="ghost">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="border-b border-stone/70 bg-linen">
        <Container className="py-14 md:py-16">
          <p className="mx-auto max-w-3xl text-balance text-center font-serif text-xl leading-snug text-ink italic md:text-2xl">
            &ldquo;Every retreat, designed. Every detail, executed.&rdquo;
          </p>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            kicker="What Sets Us Apart"
            title="Design. Dining. Experience. Execution."
            align="center"
            className="mx-auto"
          />

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <Icon className="text-forest" size={26} strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="border-y border-stone/70 bg-linen py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 rounded-sm border border-stone/70 bg-cream px-5 py-7 text-center"
              >
                <span className="font-serif text-3xl text-sage-dark md:text-4xl">
                  {s.value}
                </span>
                <span className="text-xs leading-snug text-ink-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full Retreat Production */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            kicker="Our Offering"
            title="Full Retreat Production"
            subtitle="Hand us the brief — we handle chalet catering, hosted dining, off-site experiences, corporate gifting, and accommodations, all under one accountable partnership."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map(({ icon: Icon, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col gap-3 rounded-sm border border-stone/70 bg-linen/50 p-7 transition-colors hover:border-forest hover:bg-linen"
              >
                <Icon className="text-forest" size={24} strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {body}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="/contact">Plan Your Retreat</Button>
          </div>
        </Container>
      </section>

      {/* Off-site teaser */}
      <section className="bg-linen py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
            <PhotoImage
              src="/images/home-guided-hike.jpg"
              alt="A sunlit forest trail during a guided hike"
              aspect="aspect-[4/5]"
              className="order-2 md:order-1"
            />
            <div className="order-1 flex flex-col gap-6 md:order-2">
              <SectionHeading
                kicker="Our Signature Differentiator"
                title="Off-site experiences built as one continuous arc — never a checklist of activities."
              />
              <p className="leading-relaxed text-ink-muted">
                Adventure and active pursuits, wellness and reset, culinary
                and social programming, team building, and elevated
                lifestyle moments — vetted, brand-aligned, and fully
                coordinated from arrival to departure.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Adventure & Active",
                  "Wellness & Reset",
                  "Culinary & Social",
                  "Team Building",
                  "Luxury & Lifestyle",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-stone-dark/60 px-3.5 py-1.5 text-xs text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button href="/experiences" className="w-fit">
                Explore Experiences
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Psychology */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHeading
            kicker="Why It Matters"
            title="What you should expect — every time."
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {wants.map((w) => (
              <div key={w} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 shrink-0 text-forest"
                  size={18}
                  strokeWidth={2}
                />
                <span className="text-sm leading-relaxed text-ink">{w}</span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-xl text-balance text-center text-sm leading-relaxed text-ink-muted">
            These aren&rsquo;t add-ons. They&rsquo;re the standard for
            every retreat we design.
          </p>
        </Container>
      </section>

      {/* Process teaser */}
      <section className="border-y border-stone/70 bg-linen py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="flex flex-col gap-6">
              <SectionHeading
                kicker="How It Works"
                title="A defined process, built to protect quality and manage expectations at every stage."
              />
              <Button href="/process" variant="secondary" className="w-fit">
                See the Full Process
              </Button>
            </div>
            <ol className="flex flex-col gap-5">
              {[
                ["01", "Inquiry & Discovery Call", "Group profile, goals, occasion, and dietary needs — understood from the outset."],
                ["02", "Proposal Delivery", "A custom proposal within 48 hours — itinerary, menu direction, and investment."],
                ["03", "Deposit & Confirmation", "A 50% deposit secures your date; the full brief is confirmed."],
                ["04", "Planning & Execution", "Proactive updates at every milestone, through event wrap and debrief."],
              ].map(([num, title, body]) => (
                <li key={num} className="flex gap-5">
                  <span className="font-serif text-2xl text-brass">
                    {num}
                  </span>
                  <div className="border-l border-stone-dark/50 pl-5">
                    <p className="font-serif text-lg text-ink">{title}</p>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Regions */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center">
            <MapPinned className="text-brass" size={24} strokeWidth={1.5} />
            <p className="font-serif text-xl text-ink">
              Serving the Collingwood–Blue Mountain Corridor
            </p>
            <p className="text-sm text-ink-muted">
              Collingwood · Blue Mountain · Thornbury · Meaford &amp;
              Surrounding Areas
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-forest-dark py-24 text-cream">
        <Container className="flex flex-col items-center gap-6 text-center">
          <Gift className="text-brass-light" size={28} strokeWidth={1.5} />
          <h2 className="font-serif text-balance text-3xl leading-tight md:text-4xl">
            Let&rsquo;s design a retreat your team will talk about for
            years.
          </h2>
          <p className="max-w-lg text-balance text-cream/75">
            Tell us about your group, your goals, and your dates —
            you&rsquo;ll have a custom proposal within 48 hours.
          </p>
          <Button href="/contact" variant="accent" className="mt-2">
            Plan Your Retreat
          </Button>
        </Container>
      </section>
    </>
  );
}
