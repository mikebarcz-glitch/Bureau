import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChefHat,
  Compass,
  Gift,
  MapPinned,
  NotebookPen,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PlaceholderImage } from "@/app/components/PlaceholderImage";
import { SectionHeading } from "@/app/components/SectionHeading";

const pillars = [
  {
    icon: NotebookPen,
    title: "Retreat Design",
    body: "Every itinerary built hour-by-hour around your team's goals, not a template.",
  },
  {
    icon: UtensilsCrossed,
    title: "Elevated Dining",
    body: "Chef-led menus, executive service standards, dietary needs handled without a second thought.",
  },
  {
    icon: Compass,
    title: "Curated Experiences",
    body: "Adventure, wellness, and culinary programming woven into one cohesive arc.",
  },
  {
    icon: Check,
    title: "Flawless Execution",
    body: "One accountable partner on-site — not six vendors you have to manage yourself.",
  },
];

const services = [
  {
    title: "Chalet Catering",
    body: "Breakfast, working lunches, plated dinners, and receptions — fully custom, never templated.",
    href: "/services#catering",
  },
  {
    title: "Hosted Dining Experiences",
    body: "Chef's table narration, wine-paired evenings, and interactive culinary formats.",
    href: "/services#hosted-dining",
  },
  {
    title: "Off-Site Experiences",
    body: "Adventure, wellness, culinary, and team-building programming — vetted and fully coordinated.",
    href: "/experiences",
  },
  {
    title: "Full Retreat Curation",
    body: "Hand us the brief. We handle concept, vendors, logistics, and on-site management.",
    href: "/services#full-retreat",
  },
  {
    title: "Corporate Gifting",
    body: "Branded welcome kits, chalet styling, and departure moments guests remember.",
    href: "/services#gifting",
  },
];

const wants = [
  "Flawless execution with no surprises",
  "Clear, proactive communication",
  "Elevated, brand-aligned experiences",
  "Expert handling of every dietary need",
  "One trusted partner, not six vendors",
  "Discretion and professionalism throughout",
];

const stats = [
  { value: "10–25", label: "Guests per retreat — our core operating range" },
  { value: "5", label: "Integrated service lines under one partnership" },
  { value: "90–120", label: "Minutes from Toronto to the corridor" },
  { value: "48hrs", label: "From discovery call to full proposal" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-[#efe4c9] via-[#d8c7a1] to-[#a89876]" />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 15%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 85% 85%, rgba(0,0,0,0.18), transparent 55%)",
            }}
          />
          <div className="absolute inset-0 bg-forest-dark/55" />
        </div>

        <Container className="relative flex min-h-[86vh] flex-col justify-end gap-10 py-16 md:py-24">
          <div className="flex max-w-3xl flex-col gap-6 animate-fade-up">
            <span className="kicker text-brass-light">
              Collingwood · Blue Mountain · Thornbury · Meaford
            </span>
            <h1 className="font-serif text-balance text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-[4rem]">
              Luxury hospitality. Corporate precision. End-to-end execution.
            </h1>
            <p className="max-w-xl text-balance text-base leading-relaxed text-cream/85 md:text-lg">
              We design and execute premium corporate retreat experiences —
              dining, activities, logistics, and on-site management — under
              a single, trusted partnership.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" className="!bg-brass !border-brass hover:!bg-brass-light hover:!border-brass-light !text-forest-dark">
                Start a Retreat
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
            &ldquo;We are not selling catering. We are selling peace of
            mind, precision execution, and elevated brand perception —
            delivered seamlessly, every time.&rdquo;
          </p>
        </Container>
      </section>

      {/* The gap */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-6">
              <SectionHeading
                kicker="The Market Gap"
                title="No one else delivers the full retreat — so clients end up managing it themselves."
              />
              <p className="text-balance leading-relaxed text-ink-muted">
                Restaurants offer good food but no privacy or flexibility.
                Caterers deliver meals, not experience. Activity providers
                run in isolation. Event planners coordinate logistics but
                lack hospitality expertise. Corporate planners are left
                juggling multiple vendors — introducing risk,
                inconsistency, and friction into something that&rsquo;s
                supposed to feel effortless.
              </p>
              <p className="leading-relaxed text-ink-muted">
                The Hospitality Bureau is the only operator in the
                Collingwood–Blue Mountain corridor delivering all five
                pillars simultaneously.
              </p>
              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium tracking-[0.04em] text-forest uppercase"
              >
                Our positioning <ArrowRight size={15} />
              </Link>
            </div>
            <PlaceholderImage
              caption="Editorial photography — chalet great room styled for a welcome reception"
              variant="stone"
              aspect="aspect-[4/5]"
            />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="border-y border-stone/70 bg-forest-dark py-14 text-cream">
        <Container>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <span className="font-serif text-3xl text-brass-light md:text-4xl">
                  {s.value}
                </span>
                <span className="text-xs leading-snug text-cream/70">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="What We Do"
            title="Five interconnected service lines. One accountable partner."
            subtitle="Each can be booked independently — though clients who engage us for full retreat production experience the fullest expression of what we do."
            align="center"
            className="mx-auto"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col gap-3 rounded-sm border border-stone/70 bg-linen/50 p-7 transition-colors hover:border-forest hover:bg-linen"
              >
                <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.06em] text-forest uppercase opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={13} />
                </span>
              </Link>
            ))}
            <div className="flex flex-col justify-center gap-4 rounded-sm border border-dashed border-stone-dark p-7">
              <ChefHat className="text-brass" size={26} strokeWidth={1.5} />
              <p className="text-sm leading-relaxed text-ink-muted">
                See full pricing ranges and inclusions for every service
                line.
              </p>
              <Button href="/services" variant="secondary" className="w-fit">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Off-site teaser */}
      <section className="bg-linen py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
            <PlaceholderImage
              caption="Editorial photography — guided hike overlooking the Blue Mountains"
              variant="sage"
              aspect="aspect-[4/5]"
              className="order-2 md:order-1"
            />
            <div className="order-1 flex flex-col gap-6 md:order-2">
              <SectionHeading
                kicker="Our Signature Differentiator"
                title="Off-site experiences designed as one cohesive arc — not a list of activities."
              />
              <p className="leading-relaxed text-ink-muted">
                Adventure and active pursuits, wellness and reset, culinary
                and social programming, team building, and elevated
                lifestyle moments — all vetted, brand-aligned, and fully
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
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Why It Matters"
            title="Understanding what you fear is as important as understanding what you want."
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
            Every element of our service model is designed to eliminate the
            alternative entirely: disorganization, chased-down vendors,
            mismanaged allergies, and embarrassment in front of senior
            leadership.
          </p>
        </Container>
      </section>

      {/* Process teaser */}
      <section className="border-y border-stone/70 bg-linen py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="flex flex-col gap-6">
              <SectionHeading
                kicker="How It Works"
                title="A defined process that protects quality and manages expectations."
              />
              <Button href="/process" variant="secondary" className="w-fit">
                See the Full Process
              </Button>
            </div>
            <ol className="flex flex-col gap-5">
              {[
                ["01", "Inquiry & Discovery Call", "Group profile, goals, occasion, and dietary needs."],
                ["02", "Proposal Delivery", "Custom proposal within 48 hours — itinerary, menu, investment."],
                ["03", "Deposit & Confirmation", "50% deposit secures your date; full brief confirmed."],
                ["04", "Planning & Execution", "Proactive updates at every milestone, through wrap and debrief."],
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
              Proudly serving the Collingwood–Blue Mountain corridor
            </p>
            <p className="text-sm text-ink-muted">
              Collingwood · Blue Mountain · Thornbury · Meaford &amp;
              surrounding areas
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
            Tell us about your group, your goals, and your dates. You&rsquo;ll
            have a custom proposal within 48 hours.
          </p>
          <Button
            href="/contact"
            variant="primary"
            className="!bg-brass !border-brass hover:!bg-brass-light hover:!border-brass-light !text-forest-dark mt-2"
          >
            Start a Retreat
          </Button>
        </Container>
      </section>
    </>
  );
}
