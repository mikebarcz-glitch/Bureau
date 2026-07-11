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
            kicker="Start a Retreat"
            title="Tell us about your group, your goals, and your dates."
            subtitle="You'll have a custom proposal within 48 hours — including itinerary overview, menu direction, experience options, and investment."
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
                <div className="flex flex-col gap-4 text-sm text-ink-muted">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 hover:text-ink"
                  >
                    <Mail className="text-forest" size={17} strokeWidth={1.5} />
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-3 hover:text-ink"
                  >
                    <Phone className="text-forest" size={17} strokeWidth={1.5} />
                    {site.phone}
                  </a>
                  <div className="flex items-center gap-3">
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
                    We respond within 24 hours to schedule a discovery call.
                  </li>
                  <li>
                    <span className="font-medium text-ink">2. </span>
                    You receive a custom proposal within 48 hours of that
                    call.
                  </li>
                  <li>
                    <span className="font-medium text-ink">3. </span>
                    A 50% deposit secures your date and planning begins.
                  </li>
                </ol>
              </div>

              <p className="text-xs leading-relaxed text-ink-muted">
                50% deposit required to secure any booking. Final payment
                due 14 days prior to the event. All pricing in CAD; HST
                applied to all invoices.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
