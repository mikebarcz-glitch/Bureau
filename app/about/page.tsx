import type { Metadata } from "next";
import { Award, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PlaceholderImage } from "@/app/components/PlaceholderImage";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | The Hospitality Bureau",
  description:
    "The Hospitality Bureau is Ontario's only boutique hospitality firm specialising in end-to-end corporate retreat experiences across the Collingwood–Blue Mountain corridor.",
};

const toneRows = [
  { are: "Polished and refined", not: "Rustic or casual" },
  { are: "Calm and confident", not: "Loud or showy" },
  { are: "Structured and precise", not: "DIY or improvised" },
  { are: "Discreet and professional", not: "Over-styled or bohemian" },
  { are: "Proactive and communicative", not: "Reactive or hard to reach" },
];

const trust = [
  {
    icon: Users,
    title: "One Bureau Lead, Every Event",
    body: "Present at every event, from arrival to departure — your single, client-facing point of trust, coordinating every element in real time.",
  },
  {
    icon: ShieldCheck,
    title: "A Vetted Vendor Network",
    body: "Every supplier is evaluated on quality, reliability, professionalism, and brand alignment, with contingency vendors ready for every critical category. We never pass an unvetted vendor to a client.",
  },
  {
    icon: Award,
    title: "Executive-Standard Contract Staffing",
    body: "A trusted, brand-aligned network of chefs and service professionals, briefed to bureau standard before every event.",
  },
];

const walkAway = [
  "A team that is energised, aligned, and grateful",
  "A reputation as someone who delivers exceptional experiences",
  "A partner they will call again — and refer without hesitation",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone/70 bg-linen py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="About The Hospitality Bureau"
            title="Ontario's only boutique hospitality firm specialising in end-to-end corporate retreat experiences."
            subtitle="Combining elevated dining, curated off-site programming, and flawless operational execution under one trusted partnership."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-6">
              <span className="kicker">Our Philosophy</span>
              <h2 className="font-serif text-balance text-3xl leading-tight text-ink md:text-4xl">
                We don&rsquo;t just service the retreat — we design the
                experience around it.
              </h2>
              <p className="leading-relaxed text-ink-muted">
                Every moment is intentional. Every detail is managed. Every
                touchpoint reflects the client&rsquo;s standard. Corporate
                retreats matter — done well, they align leadership teams,
                reset culture, and create moments people talk about for
                years. Done poorly, they become a logistical headache
                nobody remembers fondly.
              </p>
              <p className="font-serif text-lg text-ink italic">
                We are here to make sure every retreat we touch falls into
                the first category.
              </p>
            </div>
            <PlaceholderImage
              caption="Editorial photography — bureau lead coordinating on-site during service"
              variant="stone"
              aspect="aspect-[4/5]"
            />
          </div>
        </Container>
      </section>

      {/* Brand tone */}
      <section className="border-y border-stone/70 bg-forest-dark py-20 text-cream md:py-24">
        <Container>
          <SectionHeading
            kicker="Brand Tone"
            title="Who we are — and, with equal precision, who we are not."
            align="center"
            dark
            className="mx-auto"
          />
          <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-sm border border-cream/15">
            <div className="grid grid-cols-2 bg-cream/5">
              <span className="px-6 py-3 text-xs font-medium tracking-[0.14em] text-brass-light uppercase">
                We Are
              </span>
              <span className="border-l border-cream/15 px-6 py-3 text-xs font-medium tracking-[0.14em] text-cream/50 uppercase">
                We Are Not
              </span>
            </div>
            {toneRows.map((row, i) => (
              <div
                key={row.are}
                className={`grid grid-cols-2 ${i % 2 === 1 ? "bg-cream/[0.03]" : ""}`}
              >
                <span className="px-6 py-3.5 text-sm text-cream">
                  {row.are}
                </span>
                <span className="border-l border-cream/15 px-6 py-3.5 text-sm text-cream/50">
                  {row.not}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust signals */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="How We Operate"
            title="Operational excellence is a core product."
            subtitle="The way we run our business is inseparable from the experience we deliver."
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {trust.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 text-center"
              >
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

      {/* What clients walk away with */}
      <section className="bg-linen py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
            <PlaceholderImage
              caption="Editorial photography — leadership team gathered fireside post-dinner"
              variant="brass"
              aspect="aspect-[4/5]"
              className="order-2 md:order-1"
            />
            <div className="order-1 flex flex-col gap-6 md:order-2">
              <SectionHeading
                kicker="What You're Selling Isn't a Retreat"
                title="This is what your team walks away with."
              />
              <ul className="flex flex-col gap-3">
                {walkAway.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-ink-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-center gap-5 text-center">
          <span className="kicker">Service Area</span>
          <p className="font-serif text-2xl text-ink md:text-3xl">
            Collingwood · Blue Mountain · Thornbury · Meaford
          </p>
          <p className="max-w-lg text-balance text-ink-muted">
            &amp; the surrounding corridor — 90 to 120 minutes from
            downtown Toronto.
          </p>
          <Button href="/contact" className="mt-2">
            Get in Touch
          </Button>
        </Container>
      </section>
    </>
  );
}
