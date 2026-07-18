import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/app/components/ContactForm";
import { Container } from "@/app/components/Container";
import { SectionHeading } from "@/app/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | The Hospitality Bureau",
  description:
    "Tell us about your group, your goals, and your dates. You'll have a custom retreat proposal within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-stone/70 bg-linen py-20 md:py-24">
        <Container>
          <SectionHeading
            level="h1"
            kicker="Plan Your Retreat"
            title="Tell us about your group, your goals, and your dates — that's where we begin."
            subtitle="Within 48 hours, you'll have a custom proposal in hand — itinerary overview, menu direction, experience options, and investment, built specifically around your group."
          />
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.3fr_1fr]">
            <ContactForm />

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5 rounded-sm border border-stone/70 bg-linen/50 p-7">
                <h3 className="font-serif text-lg text-ink">
                  Direct Contact
                </h3>
                <div className="flex flex-col gap-1 text-sm text-ink-muted">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 py-2 hover:text-ink"
                  >
                    <Mail className="text-forest" size={17} strokeWidth={1.5} />
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-3 py-2 hover:text-ink"
                  >
                    <Phone className="text-forest" size={17} strokeWidth={1.5} />
                    {site.phone}
                  </a>
                  <div className="flex items-center gap-3 py-2">
                    <MapPin className="text-forest" size={17} strokeWidth={1.5} />
                    {site.region}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 rounded-sm border border-stone/70 p-7">
                <div className="flex items-center gap-3">
                  <Clock3 className="text-forest" size={17} strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-ink">
                    What Happens Next
                  </h3>
                </div>
                <ol className="flex flex-col gap-3 text-sm leading-relaxed text-ink-muted">
                  <li>
                    <span className="font-medium text-ink">1. </span>
                    You hear from us within 24 hours to schedule a
                    discovery call.
                  </li>
                  <li>
                    <span className="font-medium text-ink">2. </span>
                    A custom proposal is in your hands within 48 hours of
                    that call.
                  </li>
                  <li>
                    <span className="font-medium text-ink">3. </span>
                    A 50% deposit secures your date, and the planning
                    period begins.
                  </li>
                </ol>
              </div>

              <p className="text-xs leading-relaxed text-ink-muted">
                50% deposit required to secure any booking. Final payment
                due 14 days prior to the event. All pricing in CAD; HST
                applied to all invoices.
              </p>
              <p className="text-xs leading-relaxed text-ink-muted">
                Every vendor in our network is pre-vetted for quality,
                reliability, and brand fit.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
