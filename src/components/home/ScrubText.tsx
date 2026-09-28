"use client";

import { useEffect, useRef, useState } from "react";

const LINES: { text: string; accent?: boolean }[] = [
  { text: "Work happens in real time. Value is delivered by the minute." },
  { text: "Yet your money still waits for payday, stuck between invoice and transfer," },
  { text: "and it is holding you back.", accent: true },
];

/**
 * Pinned paragraph that fills in word by word as the reader scrolls through
 * a tall track. Without scroll (reduced motion), it simply shows filled.
 */
export function ScrubText() {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = track.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 1;
      setProgress(reduce ? 1 : p);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const words = LINES.flatMap((l, li) => l.text.split(" ").map((w) => ({ w, accent: l.accent, li })));
  const lit = Math.round(progress * 1.15 * words.length);

  return (
    <div ref={track} className="relative h-[200vh] max-md:h-[160vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <p className="wrap text-center text-[calc(var(--u)*46)] font-bold leading-[1.25] tracking-[calc(var(--u)*-0.8)] max-md:text-[26px]">
          {words.map((item, i) => (
            <span key={i}>
              {i > 0 && words[i - 1].li !== item.li && item.li === 1 ? <br className="max-md:hidden" /> : null}
              <span className={`transition-colors duration-300 ${i < lit ? (item.accent ? "text-drip" : "text-ink") : "text-[#e4e0de]"}`}>{item.w}</span>{" "}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
