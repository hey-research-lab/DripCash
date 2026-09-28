"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { BRAND } from "@/config/brand";
import { ArrowRight, ChevronDown } from "@/components/icons";

/*
 * Forms render and validate in full, but nothing is sent anywhere yet: the
 * inbox opens at launch. On submit they say so plainly and point to X.
 */

function LaunchNotice({ what }: { what: string }) {
  return (
    <p role="status" className="mt-[calc(var(--u)*16)] border-l-2 border-drip pl-3 text-[calc(var(--u)*14)] leading-relaxed text-ink max-md:text-[14px]">
      {what} opens at launch, so nothing was sent. Until then, reach us on X at{" "}
      <a href={BRAND.x} target="_blank" rel="noreferrer" className="font-bold text-drip underline">
        {BRAND.xHandle}
      </a>
      .
    </p>
  );
}

/** Email box with an arrow button, used on the news list and articles. */
export function SubscribeBox({ title = "Subscribe and be the first to know", className = "" }: { title?: string; className?: string }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <div className={`corner card-shadow bg-white p-[calc(var(--u)*30)] max-md:p-5 ${className}`}>
      <p className="text-[calc(var(--u)*17)] font-bold text-ink max-md:text-[16px]">{title}</p>
      <form onSubmit={onSubmit} className="mt-[calc(var(--u)*24)] flex items-center rounded-full border-2 border-drip-line pr-2 max-md:mt-4">
        <input
          type="email"
          required
          placeholder="Enter your email"
          aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-[calc(var(--u)*20)] py-[calc(var(--u)*9)] text-[calc(var(--u)*13)] outline-none placeholder:text-mute max-md:px-4 max-md:py-2.5 max-md:text-[14px]"
        />
        <button type="submit" aria-label="Subscribe" className="text-mute hover:text-drip">
          <ArrowRight className="size-6" />
        </button>
      </form>
      {sent ? (
        <LaunchNotice what="The newsletter" />
      ) : (
        <p className="mt-[calc(var(--u)*20)] text-[calc(var(--u)*12)] leading-[1.75] max-md:text-[12px]">
          By submitting your email address, you agree to receive occasional updates from {BRAND.name}, and you can unsubscribe at any time. For more
          information please see our{" "}
          <Link href="/privacy-policy" className="text-drip underline">
            privacy policy
          </Link>
          .
        </p>
      )}
    </div>
  );
}

const field =
  "w-full rounded-full border border-ink/40 bg-white px-[calc(var(--u)*18)] py-[calc(var(--u)*11)] text-[calc(var(--u)*14)] outline-none transition-colors placeholder:text-mute focus:border-drip max-md:px-4 max-md:py-3 max-md:text-[15px]";

const ROLES = [
  "I am a creator or freelancer who wants to get paid faster",
  "I run a business that pays contractors or suppliers",
  "I build a platform, wallet or marketplace",
  "I am a journalist or analyst",
  "Something else",
];

/** Contact form: role selector, then the details card. */
export function ContactForm() {
  const [role, setRole] = useState(ROLES[0]);
  const [sent, setSent] = useState(false);
  return (
    <div>
      <p className="t-h4 text-ink">How can we help?</p>
      <p className="t-body mt-2">Please tell us about yourself.</p>
      <label className="relative mt-[calc(var(--u)*24)] block max-md:mt-4">
        <span className="sr-only">About you</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full appearance-none rounded-full border border-ink/40 bg-white py-[calc(var(--u)*11)] pl-[calc(var(--u)*18)] pr-12 text-[calc(var(--u)*14)] font-bold text-drip outline-none focus:border-drip max-md:py-3 max-md:pl-4 max-md:text-[14px]"
        >
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-ink" />
      </label>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="corner card-shadow mt-[calc(var(--u)*30)] bg-white p-[calc(var(--u)*40)] max-md:mt-5 max-md:p-5"
      >
        <p className="text-[calc(var(--u)*13)] text-mute max-md:text-[13px]">*Mandatory field</p>
        <div className="mt-[calc(var(--u)*20)] grid grid-cols-1 gap-[calc(var(--u)*18)] sm:grid-cols-2 max-md:mt-4 max-md:gap-3">
          <input className={field} required placeholder="First name*" aria-label="First name" autoComplete="given-name" />
          <input className={field} required placeholder="Last name*" aria-label="Last name" autoComplete="family-name" />
          <input className={field} required type="email" placeholder="Email*" aria-label="Email" autoComplete="email" />
          <input className={field} placeholder="X handle" aria-label="X handle" />
          <input className={field} placeholder="Company or project" aria-label="Company or project" autoComplete="organization" />
          <label className="relative block">
            <span className="sr-only">Region</span>
            <select className={`${field} appearance-none pr-12`} defaultValue="" aria-label="Region">
              <option value="" disabled>
                Region
              </option>
              <option>Americas</option>
              <option>Europe</option>
              <option>Middle East &amp; Africa</option>
              <option>Asia Pacific</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-ink" />
          </label>
          <textarea
            className={`${field} min-h-[140px] rounded-[calc(var(--u)*20)] sm:col-span-2`}
            required
            placeholder="What would you like to move with Drip Cash?*"
            aria-label="Message"
          />
        </div>
        <p className="mt-[calc(var(--u)*20)] text-[calc(var(--u)*12)] leading-[1.75] max-md:text-[12px]">
          By submitting, you agree that {BRAND.name} may contact you about your request. For more information please see our{" "}
          <Link href="/privacy-policy" className="text-drip underline">
            privacy policy
          </Link>
          .
        </p>
        <button type="submit" className="btn mt-[calc(var(--u)*24)] max-md:mt-5">
          Submit
        </button>
        {sent && <LaunchNotice what="The contact inbox" />}
      </form>
    </div>
  );
}

/** Short lead form for the DripScript paper. */
export function PaperForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="corner card-shadow bg-white p-[calc(var(--u)*40)] max-md:p-5"
    >
      <p className="t-h4 text-ink">Get the paper</p>
      <div className="mt-[calc(var(--u)*20)] grid grid-cols-1 gap-[calc(var(--u)*16)] max-md:mt-4 max-md:gap-3">
        <input className={field} required placeholder="Name*" aria-label="Name" autoComplete="name" />
        <input className={field} required type="email" placeholder="Email*" aria-label="Email" autoComplete="email" />
        <input className={field} placeholder="Company or project" aria-label="Company or project" />
      </div>
      <button type="submit" className="btn mt-[calc(var(--u)*24)] max-md:mt-5">
        Download now
      </button>
      {sent && <LaunchNotice what="The paper download" />}
    </form>
  );
}

/** Press sign-up on the media centre. */
export function PressForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="corner card-shadow mt-[calc(var(--u)*30)] bg-white p-[calc(var(--u)*30)] max-md:mt-5 max-md:p-5"
    >
      <div className="grid grid-cols-1 gap-[calc(var(--u)*14)] sm:grid-cols-2 max-md:gap-3">
        <input className={field} required placeholder="Name*" aria-label="Name" />
        <input className={field} required type="email" placeholder="Professional email*" aria-label="Professional email" />
        <input className={`${field} sm:col-span-2`} placeholder="Publication" aria-label="Publication" />
      </div>
      <p className="mt-[calc(var(--u)*16)] text-[calc(var(--u)*12)] leading-[1.75] max-md:text-[12px]">
        By submitting your professional email address, you agree to receive occasional press releases from {BRAND.name}. See our{" "}
        <Link href="/privacy-policy" className="text-drip underline">
          privacy policy
        </Link>
        .
      </p>
      <button type="submit" className="btn mt-[calc(var(--u)*18)]">
        Submit
      </button>
      {sent && <LaunchNotice what="The press list" />}
    </form>
  );
}
