"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlowDiagram } from "@/components/art/FlowDiagram";
import { BRAND } from "@/config/brand";
import { CopyCaPill } from "@/components/CopyCa";

type Slide = {
  plain: string;
  accent: string;
  body: string;
  href: string;
  left: string;
  right: string;
  labels?: { leftTop: string; leftBottom: string; rightTop: string; rightBottom: string };
};

const SLIDES: Slide[] = [
  {
    plain: "Streaming",
    accent: "Payroll",
    body: "Pay people by the second instead of by the month. Rates, start and end dates live on chain, so everyone can watch wages land as the work happens.",
    href: "/streaming-payroll",
    left: "Team",
    right: "Contributor",
  },
  {
    plain: "Synchronised",
    accent: "Escrow",
    body: "Lock the payment and the proof in one contract. When the buyer confirms, both sides settle together. If a condition fails, nothing moves at all.",
    href: "/invoice-flows",
    left: "Buyer",
    right: "Seller",
    labels: { leftTop: "Buyer wallet", leftBottom: "Locked payment", rightTop: "Seller wallet", rightBottom: "Proof of delivery" },
  },
  {
    plain: "Self-driving",
    accent: "Treasury",
    body: "Write the rules once: keep a floor, set aside tax, sweep the rest to savings on Fridays. Drip Cash moves the money on schedule with every step on record.",
    href: "/treasury-sweeps",
    left: "Operating",
    right: "Reserve",
  },
];

const AUTOPLAY_MS = 7000;

export function HomeSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SLIDES.length + 1;
  const touch = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Drip Cash highlights"
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touch.current = null;
      }}
    >
      <div className="flex transition-transform duration-[900ms] ease-[cubic-bezier(0.7,0,0.2,1)]" style={{ transform: `translateX(-${index * 100}%)` }}>
        {/* Slide 0: brand statement over generated art. */}
        <div className="relative w-full shrink-0" aria-hidden={index !== 0}>
          <div className="grid min-h-[calc(var(--u)*690)] grid-cols-1 md:grid-cols-[64%_1fr]">
            <div className="relative flex min-h-[460px] items-end overflow-hidden md:min-h-0">
              <img src="/art/slide-home.webp" alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-deep/10 to-transparent" />
              <div className="relative px-[var(--pad)] pb-[calc(var(--u)*70)] max-md:pb-10">
                <h1 className="t-hero text-white">
                  Let it drip.
                  <br />
                  <span className="accent">Get paid.</span>
                </h1>
                <p className="mt-[calc(var(--u)*24)] text-[calc(var(--u)*22)] font-normal text-white max-md:text-[17px]">
                  {BRAND.symbol} is live on Robinhood Chain
                </p>
                <div className="mt-[calc(var(--u)*30)] flex flex-wrap items-center gap-3 max-md:mt-6">
                  <Link href="/platform" className="btn btn-light" tabIndex={index === 0 ? 0 : -1}>
                    Meet the platform
                  </Link>
                  <CopyCaPill className="inline-flex !bg-white/90" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-[calc(var(--u)*24)] px-[calc(var(--u)*60)] py-10 max-md:px-5">
              <p className="text-[calc(var(--u)*15)] font-bold uppercase text-drip max-md:text-[13px]">Money that keeps moving</p>
              <p className="t-lead">
                Streams, escrows and splits for anyone who is tired of waiting for payday. Built on Robinhood Chain, readable by everyone.
              </p>
            </div>
          </div>
        </div>

        {SLIDES.map((s, i) => (
          <div key={s.accent} className="w-full shrink-0" aria-hidden={index !== i + 1}>
            <div className="wrap flex min-h-[calc(var(--u)*690)] flex-col items-center justify-center py-12 text-center">
              <h2 className="t-hero text-deep">
                {s.plain} <span className="accent">{s.accent}</span>
              </h2>
              <p className="mx-auto mt-[calc(var(--u)*24)] max-w-[calc(var(--u)*800)] text-[calc(var(--u)*20)] font-normal leading-[1.35] text-deep max-md:text-[16px]">
                {s.body}
              </p>
              <FlowDiagram left={s.left} right={s.right} topLabels={s.labels} className="mt-[calc(var(--u)*40)] w-full max-w-[calc(var(--u)*780)] max-md:mt-8" />
              <Link href={s.href} className="btn mt-[calc(var(--u)*40)] max-md:mt-8" tabIndex={index === i + 1 ? 0 : -1}>
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-[calc(var(--u)*24)] flex justify-center gap-[calc(var(--u)*12)] max-md:bottom-3">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={`size-[calc(var(--u)*10)] min-h-2 min-w-2 rounded-full transition-colors ${i === index ? "bg-drip" : "bg-ink/25 hover:bg-ink/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
