import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/site/blocks";
import { PaperForm } from "@/components/site/forms";

export const metadata: Metadata = {
  title: "DripScript paper",
  description: "DripScript: the readable rules language behind every Drip Cash stream.",
};

const SAMPLE = `stream contractor_pay
  from  team.wallet
  to    0xA11ce…
  rate  25 USD per hour
  while contract.open
  pause on holidays

split every_receipt
  20% -> tax.reserve
  10% -> savings
  rest -> spend`;

export default function DripScriptPage() {
  return (
    <>
      <PageHero title={"Drip Cash\nDripScript"} intro={["Introducing the language of getting paid."]} art="/art/hero-dripscript.webp" />

      <section className="wrap py-[calc(var(--u)*120)] max-md:py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-[calc(var(--u)*90)]">
          <div>
            <Reveal>
              <p className="t-lead">
                Payments are about to change shape. Instead of fixed amounts on fixed dates, money can follow the work: flowing while it happens,
                pausing when it stops, and releasing when both sides agree.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="t-body mt-[calc(var(--u)*28)]">
                Most talk about programmable money starts with tokens and ledgers. DripScript starts with the terms people already agree on (a rate,
                a deadline, a split) and writes them as short rules that anyone can read out loud.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-body mt-[calc(var(--u)*24)]">
                Each rule compiles to checks that run on Robinhood Chain. The same rule reads the same way to the payer, the receiver and anyone
                auditing them later, and it cannot be changed quietly after the fact.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="t-h4 mt-[calc(var(--u)*44)] text-ink">Download this paper to learn:</p>
              <ul className="t-body mt-[calc(var(--u)*14)] list-disc space-y-2 pl-5">
                <li>What streaming and conditional payments are, and where they beat monthly payouts</li>
                <li>The building blocks of DripScript: rates, gates and splits</li>
                <li>Worked examples for payroll, creator deals, escrow and treasury</li>
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <pre className="corner mt-[calc(var(--u)*44)] overflow-x-auto bg-deep p-[calc(var(--u)*30)] font-mono text-[calc(var(--u)*14)] leading-[1.7] text-[#f4d9cc] max-md:p-5 max-md:text-[12px]">
                <code>{SAMPLE}</code>
              </pre>
            </Reveal>
          </div>
          <Reveal className="md:pt-[calc(var(--u)*10)]">
            <PaperForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
