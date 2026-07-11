import type { Metadata } from "next";
import { Clock3, MessageCircle, FileCheck2, Heart } from "lucide-react";
import { Button } from "@/app/components/Button";
import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "Process | The Hospitality Bureau",
  description:
    "A defined eight-step process — from discovery call to post-event debrief — that protects quality and manages expectations at every stage.",
};

const steps = [
  {
    num: "01",
    title: "Inquiry & Discovery Call",
    body: "A discovery call to understand your group profile, goals, occasion, and dietary needs — the foundation every proposal is built on.",
  },
  {
    num: "02",
    title: "Proposal Delivery",
    body: "Within 48 hours, a custom proposal outlining itinerary overview, menu direction, experience options, and investment — ready for your review.",
  },
  {
    num: "03",
    title: "Deposit & Confirmation",
    body: "A 50% deposit secures your date. The full brief is confirmed, and planning moves forward.",
  },
  {
    num: "04",
    title: "Planning Period",
    body: "Menu development, experience booking, and vendor coordination — with proactive updates delivered at every milestone.",
  },
  {
    num: "05",
    title: "Final Confirmation",
    body: "Headcount, dietary needs, and itinerary lock 14 days prior to the event; final payment is due.",
  },
  {
    num: "06",
    title: "Pre-Event Prep",
    body: "Staff briefed, run-of-show distributed, all logistics confirmed — the team arrives ready, not reacting.",
  },
  {
    num: "07",
    title: "Event Execution",
    body: "Your dedicated bureau lead manages every moment on-site, coordinating each element in real time so you can be fully present.",
  },
  {
    num: "08",
    title: "Post-Event",
    body: "A client debrief, testimonial request, and referral invitation follow, with your file archived for future bookings.",
  },
];

const standards = [
  {
    icon: Clock3,
    title: "24-Hour Response",
    body: "Every inquiry receives a response within 24 hours — no exceptions.",
  },
  {
    icon: FileCheck2,
    title: "48-Hour Proposals",
    body: "A custom proposal — itinerary overview, menu direction, experience options, and investment — delivered within 48 hours of your discovery call.",
  },
  {
    icon: MessageCircle,
    title: "Proactive Updates",
    body: "Status updates at every planning milestone — you never have to chase us for information.",
  },
  {
    icon: Heart,
    title: "The Follow-Through",
    body: "A clean, branded run-of-show before the event, and a written debrief delivered within 48 hours of wrap.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-stone/70 bg-linen py-20 md:py-28">
        <Container>
          <SectionHeading
            kicker="How We Work"
            title="A Defined Process, Built to Protect Quality and Manage Expectations"
            subtitle="From first inquiry to final debrief, every engagement moves through the same eight-stage process — structured, transparent, and designed so you always know exactly where things stand."
          />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <ol className="mx-auto flex max-w-3xl flex-col">
            {steps.map((s, i) => (
              <li key={s.num} className="flex gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <span className="font-serif text-2xl text-brass md:text-3xl">
                    {s.num}
                  </span>
                  {i < steps.length - 1 ? (
                    <span className="mt-2 w-px flex-1 bg-stone-dark/40" />
                  ) : null}
                </div>
                <div className="pb-12">
                  <h3 className="font-serif text-xl text-ink md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-stone/70 bg-forest-dark py-20 text-cream md:py-24">
        <Container>
          <SectionHeading
            kicker="Communication Standards"
            title="Communication is a product. Every touchpoint reflects our brand and builds trust."
            align="center"
            dark
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3">
                <Icon
                  className="text-brass-light"
                  size={24}
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-lg text-cream">{title}</h3>
                <p className="text-sm leading-relaxed text-cream/70">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <p className="max-w-lg text-balance text-ink-muted">
            See what it feels like to plan a retreat with a single,
            accountable partner — from first call to final thank-you.
          </p>
          <Button href="/contact">Book a Discovery Call</Button>
        </Container>
      </section>
    </>
  );
}
