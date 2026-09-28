import { HomeSlider } from "@/components/home/HomeSlider";
import { ScrubText } from "@/components/home/ScrubText";
import { Reveal } from "@/components/Reveal";
import { CtaButton, CtaPhoto, ServeColumns } from "@/components/site/blocks";
import { RingsArt, SphereArt } from "@/components/art/LineArt";
import { LiveChainStrip } from "@/components/LiveChain";

export default function HomePage() {
  return (
    <>
      <HomeSlider />

      <div className="wrap border-y border-ink/10 py-[calc(var(--u)*22)] max-md:py-4">
        <LiveChainStrip className="justify-center" />
      </div>

      <ScrubText />

      <section className="wrap pb-[calc(var(--u)*120)] text-center max-md:pb-14">
        <Reveal>
          <h2 className="t-h2 text-ink">
            Introducing <span className="accent">Drip Cash</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-lead mx-auto mt-[calc(var(--u)*34)] max-w-[calc(var(--u)*860)]">
            Drip Cash is the payment engine for money that flows. Stream it, lock it behind a condition, split it between a team, and let every
            drop settle on Robinhood Chain the moment it is earned.
          </p>
        </Reveal>
      </section>

      <section className="wrap py-[calc(var(--u)*80)] max-md:py-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[calc(var(--u)*60)]">
          <Reveal>
            <SphereArt className="mx-auto w-full max-w-[calc(var(--u)*520)] max-md:max-w-[340px]" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="t-h2 text-ink">
                Money that
                <br />
                moves with
                <br />
                <span className="accent">the work.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="t-lead mt-[calc(var(--u)*34)]">
                People expect payments to be instant, visible and fair. Payroll runs monthly, invoices wait thirty days, and platforms hold
                balances in the middle. Streaming turns that waiting into a steady flow both sides can see.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="t-lead mt-[calc(var(--u)*28)]">
                With rules written in plain language, a wallet can pay by the second, release on proof, or split income automatically, all with
                the wallets people already use.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="t-lead mt-[calc(var(--u)*28)] font-normal text-deep">Welcome to a world without payday.</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-[calc(var(--u)*40)] max-md:mt-6">
                <CtaButton cta="wallet" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wrap py-[calc(var(--u)*120)] max-md:py-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[calc(var(--u)*80)]">
          <div>
            <Reveal>
              <h2 className="t-h2">
                <span className="accent">DripScript</span>
                <br />
                <span className="text-ink">
                  The language
                  <br />
                  of getting paid.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="t-lead mt-[calc(var(--u)*34)]">
                Describe how money should behave in a few readable lines: who is paid, how fast, and what must be true first. DripScript compiles
                those lines into checks that run on Robinhood Chain, so the rules are the same for everyone.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="t-lead mt-[calc(var(--u)*28)] text-drip">Your money now works while you sleep.</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-[calc(var(--u)*40)] max-md:mt-6">
                <CtaButton cta={{ label: "Learn more", href: "/dripscript" }} />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <RingsArt className="mx-auto w-full max-w-[calc(var(--u)*420)] max-md:max-w-[300px]" />
          </Reveal>
        </div>
      </section>

      <section className="pb-[calc(var(--u)*140)] pt-[calc(var(--u)*60)] max-md:pb-14">
        <div className="wrap text-center">
          <Reveal>
            <h2 className="t-h2 text-drip">Who we serve</h2>
          </Reveal>
        </div>
        <div className="mt-[calc(var(--u)*40)]">
          <ServeColumns
            columns={[
              {
                title: "Creators",
                href: "/creators",
                points: [
                  "Sponsorships paid for every day a campaign is live",
                  "Tips and memberships that stream instead of trickling in monthly",
                  "Collaborator splits that settle the moment revenue lands",
                ],
              },
              {
                title: "Businesses",
                href: "/businesses",
                points: [
                  "Contractor payroll by the hour across any time zone",
                  "Escrowed invoices that release on delivery",
                  "Treasury rules that sweep, reserve and save on schedule",
                ],
              },
              {
                title: "Platforms",
                href: "/platforms",
                points: [
                  "Marketplace payouts without holding user balances",
                  "Revenue shares streamed to sellers and partners",
                  "Public records of every payment for easy audits",
                ],
              },
            ]}
          />
        </div>
      </section>

      <CtaPhoto title={"Ready to let your\nmoney drip?"} cta="wallet" />
    </>
  );
}
