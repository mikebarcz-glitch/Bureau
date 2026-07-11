import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PlaceholderImage } from "@/app/components/PlaceholderImage";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services | The Hospitality Bureau",
  description:
    "Chalet catering, hosted dining, off-site experience curation, full retreat planning, and corporate gifting — five interconnected service lines for premium corporate retreats.",
};

const serviceSections = [
  {
    id: "catering",
    kicker: "Service Line 01 · Core Revenue Driver",
    title: "Chalet Catering",
    intro:
      "Refined, intentional dining designed for executive environments. Our highest-volume service and the primary touchpoint through which new clients discover us.",
    included: [
      "Elevated breakfast service (plated or curated station)",
      "Working lunches (structured grazing, build-your-own, or plated)",
      "Multi-course plated dinners (3–5 courses with optional wine pairing)",
      "Cocktail receptions and aperitivo service",
      "Refined grazing tables — structured and editorial, never rustic",
      "Full dietary management: allergies, restrictions, preferences",
    ],
    differentiators: [
      "Every menu is custom — no templated packages",
      "Developed collaboratively with client input on tone and occasion",
      "Includes coordination of all equipment, serviceware, linens, and staffing",
      "Professional service standard aligned to executive environments",
    ],
    variant: "linen" as const,
    reverse: false,
  },
  {
    id: "hosted-dining",
    kicker: "Service Line 02",
    title: "Hosted Dining Experiences",
    intro:
      "For clients who want dining as the centrepiece of the retreat, not just a meal. Exceptional food as a vehicle for meaningful conversation, connection, and shared experience.",
    included: [
      "3–5 course plated dinners with a full service team",
      "Chef-led private dining with kitchen-forward presentation",
      "Wine-paired executive evenings with curated selections",
      "Chef's table experiences — open kitchen, course-by-course narration",
      "Interactive culinary formats with guest involvement",
    ],
    differentiators: [],
    variant: "brass" as const,
    reverse: true,
  },
  {
    id: "full-retreat",
    kicker: "Service Line 04 · High-Growth Offering",
    title: "Full Retreat Curation & Planning",
    intro:
      "Clients hand us the brief — we handle everything from concept to wrap.",
    included: [
      "Discovery session to establish goals, tone, group profile, and outcomes",
      "Full itinerary design — day-by-day, hour-by-hour arc",
      "Off-site experience curation, vetting, and booking",
      "All vendor sourcing, contracting, and management",
      "Transportation logistics and scheduling",
      "Private chef coordination and menu development",
      "Welcome gifting and branded arrival moments",
      "Chalet styling and light production elements",
      "On-site management with a dedicated bureau lead",
      "Run-of-show document and day-of execution",
      "Post-retreat debrief and feedback capture",
    ],
    differentiators: [],
    variant: "stone" as const,
    reverse: false,
  },
  {
    id: "gifting",
    kicker: "Service Line 05",
    title: "Corporate Gifting & Experience Design",
    intro:
      "Touchpoints that extend the experience beyond the retreat itself.",
    included: [
      "Executive welcome kits (curated, branded, locally sourced)",
      "Branded in-chalet moments — arrival set-up, room styling, curated details",
      "Printed itineraries, name placements, and guest notes",
      "Departure gifting — memorable take-home moments",
    ],
    differentiators: [],
    variant: "sage" as const,
    reverse: true,
  },
];

const pricing = [
  {
    service: "Chalet Catering (Weekday)",
    min: "$2,500",
    range: "$2,500–$6,000",
  },
  {
    service: "Chalet Catering (Weekend)",
    min: "$4,000",
    range: "$4,000–$12,000",
  },
  {
    service: "Hosted Dining Experience",
    min: "$4,000",
    range: "$4,000–$10,000",
  },
  {
    service: "Off-Site Experience (standalone)",
    min: "$1,500",
    range: "$1,500–$5,000",
  },
  {
    service: "Full Retreat Production",
    min: "$15,000",
    range: "$15,000–$40,000+",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-stone/70 bg-linen py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Services"
            title="Five interconnected service lines. Book one, or hand us the whole retreat."
            subtitle="Each service can stand alone. Clients who engage us for full retreat production experience the fullest expression of what we do — a single, cohesive arc from arrival to departure."
          />
        </Container>
      </section>

      {serviceSections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 py-20 md:py-24 ${i % 2 === 1 ? "bg-linen" : ""}`}
        >
          <Container>
            <div
              className={`grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start ${s.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <PlaceholderImage
                caption={`Editorial photography — ${s.title.toLowerCase()} in a chalet setting`}
                variant={s.variant}
                aspect="aspect-[4/5]"
              />
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <span className="kicker">{s.kicker}</span>
                  <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="leading-relaxed text-ink-muted">{s.intro}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-medium tracking-[0.14em] text-ink uppercase">
                    What&rsquo;s Included
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {s.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 shrink-0 text-forest"
                          size={16}
                          strokeWidth={2}
                        />
                        <span className="text-sm leading-relaxed text-ink-muted">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {s.differentiators.length > 0 ? (
                  <div className="flex flex-col gap-3 border-t border-stone/70 pt-5">
                    <p className="text-xs font-medium tracking-[0.14em] text-ink uppercase">
                      Differentiators
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {s.differentiators.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                          <span className="text-sm leading-relaxed text-ink-muted">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Off-site experiences callout */}
      <section className="border-y border-stone/70 bg-forest-dark py-20 text-cream md:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="kicker text-brass-light">
            Service Line 03 · Signature Differentiator
          </span>
          <h2 className="font-serif text-balance text-3xl leading-tight md:text-4xl">
            Off-Site Experiences deserve their own page.
          </h2>
          <p className="max-w-xl text-balance text-cream/75">
            Adventure, wellness, culinary and social, team building, and
            luxury lifestyle programming — fully vetted and woven into a
            single retreat arc. This is what separates us from every other
            operator in the corridor.
          </p>
          <Button
            href="/experiences"
            variant="primary"
            className="!bg-brass !border-brass hover:!bg-brass-light hover:!border-brass-light !text-forest-dark"
          >
            Explore Off-Site Experiences
          </Button>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="Investment"
            title="Pricing Structure"
            subtitle="All pricing in CAD; HST applied to all invoices. Off-site experiences booked as add-ons are priced at cost pass-through plus a 15–20% coordination fee."
            align="center"
            className="mx-auto"
          />

          <div className="mt-12 overflow-x-auto rounded-sm border border-stone/70">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-linen">
                  <th className="border-b border-stone/70 px-6 py-4 text-xs font-medium tracking-[0.1em] text-ink uppercase">
                    Service
                  </th>
                  <th className="border-b border-stone/70 px-6 py-4 text-xs font-medium tracking-[0.1em] text-ink uppercase">
                    Minimum
                  </th>
                  <th className="border-b border-stone/70 px-6 py-4 text-xs font-medium tracking-[0.1em] text-ink uppercase">
                    Typical Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr
                    key={row.service}
                    className={i % 2 === 1 ? "bg-linen/40" : ""}
                  >
                    <td className="border-b border-stone/40 px-6 py-4 font-serif text-base text-ink">
                      {row.service}
                    </td>
                    <td className="border-b border-stone/40 px-6 py-4 text-sm text-ink-muted">
                      {row.min}
                    </td>
                    <td className="border-b border-stone/40 px-6 py-4 text-sm text-ink-muted">
                      {row.range}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-16 flex flex-col items-center gap-5 text-center">
            <p className="max-w-lg text-balance text-ink-muted">
              Every proposal is custom. Tell us about your group and goals,
              and we&rsquo;ll return a tailored quote within 48 hours.
            </p>
            <Button href="/contact">Request a Proposal</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
