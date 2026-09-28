import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { DripMark } from "@/components/Logo";
import { CardGrid, CenterTitle, CtaPhoto, PageHero } from "@/components/site/blocks";
import { Values } from "@/components/site/Values";
import { TEAM } from "@/content/company";

export const metadata: Metadata = {
  title: "About Drip Cash",
  description: "The crew building streaming payments on Robinhood Chain.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Drip Cash"
        intro={["Builders who think payday is an outdated idea, and are replacing it with money that flows."]}
        cta={{ label: "Talk to us", href: "/contact" }}
        art="/art/hero-about.webp"
      />

      <Values />

      <section className="bg-mist py-[calc(var(--u)*130)] max-md:py-14">
        <div className="wrap">
          <Reveal>
            <h2 className="t-h2 text-ink">The crew</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-lead mt-[calc(var(--u)*30)] max-w-[calc(var(--u)*900)]">
              A small team organised around the parts of a payment that matter most. We show the work, not the faces: every contract and every change
              is public.
            </p>
          </Reveal>
          <div className="mt-[calc(var(--u)*70)] grid grid-cols-2 gap-[calc(var(--u)*30)] md:grid-cols-3 max-md:mt-8 max-md:gap-4">
            {TEAM.map((t, i) => (
              <Reveal key={t.role} delay={(i % 3) * 80} className="h-full">
                <div className="corner flex h-full flex-col bg-white p-[calc(var(--u)*34)] max-md:p-4">
                  <div className="grid size-[calc(var(--u)*84)] min-h-14 min-w-14 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#f8a47f,#f15a22_60%,#b83c10)] text-white">
                    <DripMark className="size-1/2" />
                  </div>
                  <p className="t-h4 mt-[calc(var(--u)*24)] text-ink max-md:mt-3">{t.role}</p>
                  <p className="t-small mt-1">{t.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[calc(var(--u)*130)] max-md:py-14">
        <CenterTitle title="Built in public" sub="How we hold ourselves accountable." />
        <CardGrid
          items={[
            { title: "Public contracts", body: "Every contract address is published before it holds a single drop, and verified on the explorer." },
            { title: "Open records", body: "Streams, releases and payouts are Robinhood Chain transactions anyone can inspect." },
            { title: "Community calls", body: "A monthly open call on what shipped, what is next and what we got wrong.", href: "/events/drip-cash-community-call-september" },
          ]}
        />
      </section>

      <CtaPhoto title={"Ready to let your\nmoney drip?"} cta="wallet" />
    </>
  );
}
