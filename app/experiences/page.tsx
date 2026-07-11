import type { Metadata } from "next";
import {
  Compass,
  Gem,
  Sparkles,
  UsersRound,
  Wine,
} from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { PlaceholderImage } from "@/app/components/PlaceholderImage";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "Off-Site Experiences | The Hospitality Bureau",
  description:
    "Adventure, wellness, culinary, team building, and luxury lifestyle experiences — vetted, brand-aligned, and fully coordinated into one cohesive retreat arc.",
};

const categories = [
  {
    icon: Compass,
    kicker: "Experience Category 01 / 05",
    title: "Adventure & Active",
    items: [
      "Private guided hiking and trail experiences",
      "Scenic cycling tours along the Blue Mountains",
      "Water-based activities: kayaking, paddleboarding, boat charters",
      "Ski and après-ski programming (seasonal)",
    ],
    variant: "sage" as const,
  },
  {
    icon: Sparkles,
    kicker: "Experience Category 02 / 05",
    title: "Wellness & Reset",
    items: [
      "Private yoga and meditation sessions (indoor or outdoor)",
      "Breathwork and performance coaching",
      "Cold plunge and sauna circuit coordination",
      "In-chalet or outdoor spa services",
    ],
    variant: "linen" as const,
  },
  {
    icon: Wine,
    kicker: "Experience Category 03 / 05",
    title: "Culinary & Social",
    items: [
      "Winery, brewery, and distillery tours",
      "Private tasting experiences",
      "Chef-led market tours and ingredient sourcing",
      "Progressive dining evenings",
    ],
    variant: "brass" as const,
  },
  {
    icon: UsersRound,
    kicker: "Experience Category 04 / 05",
    title: "Team Building & Leadership Development",
    items: [
      "Facilitated workshops and leadership sessions",
      "Strategy intensives with space design support",
      "Guided group challenges and team dynamics exercises",
      "Coaching sessions integrated into the retreat arc",
    ],
    variant: "stone" as const,
  },
  {
    icon: Gem,
    kicker: "Experience Category 05 / 05",
    title: "Luxury & Lifestyle",
    items: [
      "Private shopping or personal styling experiences",
      "Fireside speaker sessions",
      "Live music or bespoke curated entertainment",
      "Elevated après experiences",
    ],
    variant: "sage" as const,
  },
];

export default function ExperiencesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone/70">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-sage-light via-sage to-sage-dark" />
          <div className="absolute inset-0 bg-forest-dark/50" />
        </div>
        <Container className="relative flex min-h-[46vh] flex-col justify-end gap-6 py-20 md:py-24">
          <span className="kicker text-brass-light">
            Signature Differentiator
          </span>
          <h1 className="font-serif text-balance max-w-3xl text-4xl leading-[1.1] text-cream sm:text-5xl md:text-6xl lg:text-[4rem]">
            Off-Site Experiences
          </h1>
          <p className="max-w-xl text-balance leading-relaxed text-cream/85">
            This is what separates us from every other operator in the
            corridor. We design, book, coordinate, and integrate premium
            curated experiences into the retreat itinerary — creating a
            cohesive arc from arrival to departure.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col gap-24">
            {categories.map((c, i) => (
              <div
                key={c.title}
                className={`grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <PlaceholderImage
                  caption={`Editorial photography — ${c.title.toLowerCase()} programming`}
                  variant={c.variant}
                  aspect="aspect-[16/11]"
                />
                <div className="flex flex-col gap-5">
                  <c.icon
                    className="text-forest"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <SectionHeading kicker={c.kicker} title={c.title} />
                  <ul className="flex flex-col gap-2.5">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-stone/70 bg-linen py-20 md:py-24">
        <Container>
          <SectionHeading
            kicker="Fully Coordinated"
            title="Every experience is vetted, brand-aligned, and seamlessly integrated."
            subtitle="We manage all logistics, transportation, and on-site coordination — so your team moves from one moment to the next without a single handoff you have to think about. Off-site experiences booked as add-ons are priced at cost pass-through plus a 15–20% coordination fee."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 flex justify-center">
            <Button href="/contact">Design Your Experience Arc</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
