"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const serviceOptions = [
  "Not sure yet",
  "Chalet Catering",
  "Hosted Dining Experience",
  "Off-Site Experiences",
  "Full Retreat Curation & Planning",
  "Corporate Gifting",
];

const inputClasses =
  "w-full rounded-sm border border-stone bg-cream px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-forest focus:outline-none invalid:border-stone-dark invalid:focus:border-forest";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const groupSize = data.get("groupSize") as string;
    const dates = data.get("dates") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = `Retreat Inquiry — ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      groupSize ? `Group size: ${groupSize}` : null,
      dates ? `Preferred dates: ${dates}` : null,
      service ? `Service of interest: ${service}` : null,
      "",
      "Details:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <p className="text-xs leading-relaxed text-ink-muted">
        Submitting opens a pre-filled email to {site.email} in your own
        email client — nothing is sent from this page directly.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
            Full Name*
          </label>
          <input id="name" name="name" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="company" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
            Company*
          </label>
          <input id="company" name="company" required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
            Email*
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
            Phone
          </label>
          <input id="phone" name="phone" className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="groupSize" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
            Group Size
          </label>
          <input
            id="groupSize"
            name="groupSize"
            placeholder="e.g. 18 guests"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dates" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
            Preferred Dates
          </label>
          <input
            id="dates"
            name="dates"
            placeholder="e.g. Late September"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
          Service of Interest
        </label>
        <select id="service" name="service" className={inputClasses} defaultValue={serviceOptions[0]}>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium tracking-[0.06em] text-ink uppercase">
          Tell Us About Your Retreat*
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Goals, occasion, location, and anything else we should know."
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center rounded-sm border border-forest bg-forest px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-cream uppercase transition-colors hover:bg-forest-dark hover:border-forest-dark"
      >
        Send Inquiry
      </button>

      {sent ? (
        <p className="text-xs leading-relaxed text-ink-muted">
          Your email client should now be open with your details pre-filled
          — send it over and we&rsquo;ll respond within 24 hours.
        </p>
      ) : null}
    </form>
  );
}
