import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { CtaPhoto, PageHero, PostGrid } from "@/components/site/blocks";
import { STANDARDS } from "@/content/company";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Associations",
  description: "The open standards Drip Cash builds on.",
};

export default function AssociationsPage() {
  return (
    <>
      <PageHero
        title="Associations"
        intro={["We build on shared, open standards so Drip Cash works with the wallets and tools people already use.", "Ready to take your first steps?"]}
        cta={{ label: "Talk to us", href: "/contact" }}
        art="/art/hero-associations.webp"
      />

      <section className="wrap py-[calc(var(--u)*120)] max-md:py-12">
        {STANDARDS.map((s, i) => (
          <Reveal key={s.name} className="border-b border-ink/15 py-[calc(var(--u)*60)] first:pt-0 max-md:py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[calc(var(--u)*340)_1fr] md:gap-[calc(var(--u)*80)]">
              <div className="corner grid aspect-[16/9] place-items-center bg-mist p-6 text-center">
                <div>
                  <p className="text-[calc(var(--u)*40)] font-extrabold tracking-tight text-ink max-md:text-[30px]">{s.name}</p>
                  <p className="mt-1 text-[calc(var(--u)*14)] font-bold uppercase text-drip max-md:text-[12px]">{s.title}</p>
                </div>
              </div>
              <div>
                <p className="t-body">{s.body}</p>
                <a href={s.href} target="_blank" rel="noreferrer" className="mt-[calc(var(--u)*24)] inline-flex items-center gap-2 text-[calc(var(--u)*16)] font-bold text-ink hover:text-drip max-md:text-[15px]">
                  Find out more <ArrowRight className="size-5" />
                </a>
              </div>
            </div>
            <span className="sr-only">Standard {i + 1}</span>
          </Reveal>
        ))}
      </section>

      <PostGrid title={"Getting paid.\nReinvented."} sub="Learn how these standards shape Drip Cash." />

      <CtaPhoto title={"Ready to let your\nmoney drip?"} cta="wallet" />
    </>
  );
}
