import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/blocks";
import { Values } from "@/components/site/Values";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Careers",
  description: "Help build streaming payments on Robinhood Chain.",
};

export default function CareersPage() {
  const mail = `mailto:${BRAND.email}?subject=${encodeURIComponent("Joining Drip Cash")}`;
  return (
    <>
      <PageHero
        title="Careers"
        intro={[
          "We are building the rails for money that flows: streams, escrows and splits that let anyone get paid the moment value is delivered.",
          "Would you like to build them with us?",
        ]}
        cta={{ label: "All vacancies", href: "#vacancies" }}
        art="/art/hero-careers.webp"
      />

      <Values />

      <section id="vacancies" className="scroll-mt-28 bg-mist py-[calc(var(--u)*130)] max-md:py-14">
        <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[calc(var(--u)*90)]">
          <Reveal>
            <h2 className="t-h2 text-ink">Current vacancies</h2>
            <p className="t-lead mt-[calc(var(--u)*30)]">
              There are no open roles right now. We hire in small numbers and post every opening on X first.
            </p>
            <a href={BRAND.x} target="_blank" rel="noreferrer" className="btn mt-[calc(var(--u)*40)] max-md:mt-6">
              Follow {BRAND.xHandle}
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="corner card-shadow bg-white p-[calc(var(--u)*44)] max-md:p-6">
              <h3 className="t-h3 text-drip">Shape what comes next</h3>
              <p className="t-body mt-[calc(var(--u)*20)]">
                Looking for your next challenge, with experience in smart contracts, payments or product design? Send a short note and a link to your
                work. We keep every message and reply when something fits.
              </p>
              <a href={mail} className="btn mt-[calc(var(--u)*34)] max-md:mt-5">
                Email us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
