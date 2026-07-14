import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PhotoImage } from "@/app/components/PhotoImage";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "Full Retreat Production | The Hospitality Bureau",
  description:
    "One fully managed corporate retreat production — chalet catering, hosted dining, off-site experiences, accommodations, and corporate gifting, under a single accountable partnership.",
};

const overview = {
  id: "overview",
  kicker: "How It Works",
  title: "One Partner, Every Detail Handled",
  intro:
    "Hand us the brief. From your first inquiry to the final thank-you, one dedicated bureau lead manages every moving part — so you experience a single, cohesive retreat, not a patchwork of vendors.",
  included: [
    "A discovery session to establish goals, tone, group profile, and outcomes",
    "Full itinerary design — a day-by-day, hour-by-hour arc",
    "Off-site experience curation, vetting, and booking",
    "All vendor sourcing, contracting, and management",
    "Transportation logistics and scheduling",
    "Private chef coordination and menu development",
    "Welcome gifting and branded arrival moments",
    "Chalet styling and light production elements",
    "On-site management led by a dedicated bureau lead",
    "A run-of-show document and day-of execution",
    "Post-retreat debrief and feedback capture",
  ],
  image: "/images/services-full-retreat.jpg",
  imageAlt: "A modern black A-frame cabin retreat glowing at dusk",
  reverse: false,
};

const components = [
  {
    id: "catering",
    kicker: "Included in Every Retreat",
    title: "Chalet Catering",
    intro:
      "Refined, intentional dining built for executive environments.",
    included: [
      "Elevated breakfast service — plated, or a curated station",
      "Working lunches: structured grazing, build-your-own, or plated",
      "Multi-course plated dinners (3–5 courses, with optional wine pairing)",
      "Cocktail receptions and aperitivo service",
      "Refined grazing tables — structured and editorial, never rustic",
      "Full dietary management: allergies, restrictions, and preferences",
    ],
    image: "/images/services-chalet-catering.jpg",
    imageAlt: "An artfully plated tasting course beside a glass of champagne",
    reverse: true,
  },
  {
    id: "hosted-dining",
    kicker: "Included in Every Retreat",
    title: "Hosted Dining Experiences",
    intro:
      "For groups who want dining as the centrepiece of the retreat, not simply a meal — exceptional food as the vehicle for meaningful conversation, connection, and shared experience.",
    included: [
      "3–5 course plated dinners, delivered by a full service team",
      "Chef-led private dining with kitchen-forward presentation",
      "Wine-paired executive evenings built around curated selections",
      "Chef's table experiences — open kitchen, course-by-course narration",
      "Interactive culinary formats designed around guest involvement",
    ],
    image: "/images/services-hosted-dining.jpg",
    imageAlt: "A candlelit private dinner table set with florals and fine glassware",
    reverse: false,
  },
  {
    id: "accommodations",
    kicker: "Included in Every Retreat",
    title: "Chalet Accommodations",
    intro:
      "A curated chalet matched to your group size and our own standards — coordinated as part of the same seamless production.",
    included: [
      "Hand-vetted chalets matched to your group size and occasion",
      "Multi-property coordination for larger groups — our current properties comfortably fit up to 20 guests each",
      "On-site logistics for check-in, access, and property orientation",
      "Quality and cleanliness standards verified before every stay",
    ],
    image: "/images/home-chalet-great-room.jpg",
    imageAlt: "A chalet great room with a stone fireplace and warm wood ceiling",
    reverse: true,
  },
  {
    id: "gifting",
    kicker: "Included in Every Retreat",
    title: "Corporate Gifting & Experience Design",
    intro:
      "Touchpoints that carry the experience beyond the retreat itself.",
    included: [
      "Executive welcome kits — curated, branded, and locally sourced",
      "Branded in-chalet moments: arrival set-up, room styling, curated details",
      "Printed itineraries, name placements, and guest notes",
      "Departure gifting — memorable take-home moments",
    ],
    image: "/images/services-corporate-gifting.jpg",
    imageAlt: "An elegantly wrapped gift box tied with a black ribbon",
    reverse: false,
  },
];

function ServiceSection({ s }: { s: (typeof components)[number] }) {
  return (
    <section
      id={s.id}
      className={`scroll-mt-24 py-20 md:py-24 ${s.reverse ? "bg-linen" : ""}`}
    >
      <Container>
        <div
          className={`grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start ${s.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
        >
          <PhotoImage src={s.image} alt={s.imageAlt} aspect="aspect-[4/5]" />
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
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-stone/70 bg-linen py-20 md:py-24">
        <Container>
          <SectionHeading
            level="h1"
            kicker="Full Retreat Production"
            title="One partnership. Every detail handled."
            subtitle="Chalet catering, hosted dining, off-site experiences, accommodations, and corporate gifting — orchestrated as a single, cohesive retreat by one accountable partner."
          />
        </Container>
      </section>

      <section id={overview.id} className="scroll-mt-24 py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-start">
            <PhotoImage
              src={overview.image}
              alt={overview.imageAlt}
              aspect="aspect-[4/5]"
            />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="kicker">{overview.kicker}</span>
                <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">
                  {overview.title}
                </h2>
                <p className="leading-relaxed text-ink-muted">
                  {overview.intro}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium tracking-[0.14em] text-ink uppercase">
                  What&rsquo;s Included
                </p>
                <ul className="flex flex-col gap-2.5">
                  {overview.included.map((item) => (
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
            </div>
          </div>
        </Container>
      </section>

      <ServiceSection s={components[0]} />
      <ServiceSection s={components[1]} />
      <ServiceSection s={components[2]} />

      {/* Off-site experiences callout */}
      <section className="border-y border-stone/70 bg-forest-dark py-20 text-cream md:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="kicker text-brass-light">
            Signature Differentiator
          </span>
          <h2 className="font-serif text-balance text-3xl leading-tight md:text-4xl">
            Off-Site Experiences warrant a page of their own.
          </h2>
          <p className="max-w-xl text-balance text-cream/75">
            Adventure, wellness, culinary and social, team building, and
            luxury lifestyle programming — fully vetted and woven into a
            single retreat arc. This is what sets us apart from every
            other operator in the corridor.
          </p>
          <Button href="/experiences" variant="accent">
            Explore Off-Site Experiences
          </Button>
        </Container>
      </section>

      <ServiceSection s={components[3]} />

      {/* Closing / inquiry */}
      <section className="py-20 md:py-24">
        <Container className="flex flex-col items-center gap-5 text-center">
          <SectionHeading
            kicker="Get Started"
            title="Every proposal is custom."
            subtitle="Tell us about your group, your goals, and your dates, and we'll return a tailored quote within 48 hours. We don't publish pricing here by design — every retreat is different, and so is every quote."
            align="center"
            className="mx-auto"
          />
          <Button href="/contact" className="mt-2">
            Plan Your Retreat
          </Button>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-ink-muted">
            Every vendor and property in our network is pre-vetted for
            quality, reliability, and brand fit — we never pass an
            unvetted partner to a client.
          </p>
        </Container>
      </section>
    </>
  );
}
