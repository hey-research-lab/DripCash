import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { PostGrid } from "@/components/site/blocks";
import { ContactForm } from "@/components/site/forms";
import { RippleArt } from "@/components/art/LineArt";
import { LiveChainStrip } from "@/components/LiveChain";
import { BRAND } from "@/config/brand";
import { XIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Drip Cash team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="wrap pb-[calc(var(--u)*110)] pt-[calc(var(--u)*40)] max-md:pb-12">
        <Reveal>
          <h1 className="t-hero text-ink">
            Money that flows,
            <br />
            people who get paid.
          </h1>
        </Reveal>
        <div className="mt-[calc(var(--u)*110)] grid grid-cols-1 gap-12 md:grid-cols-[calc(var(--u)*620)_1fr] md:gap-[calc(var(--u)*90)] max-md:mt-10">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120} className="md:pt-[calc(var(--u)*80)]">
            <RippleArt className="w-full max-w-[calc(var(--u)*460)] max-md:max-w-[320px]" seed={33} />
            <p className="t-h4 mt-[calc(var(--u)*30)] text-ink">Prefer a quick message?</p>
            <p className="t-body mt-2">The fastest way to reach the team is a DM on X.</p>
            <a href={BRAND.x} target="_blank" rel="noreferrer" className="btn mt-[calc(var(--u)*24)] max-md:mt-5">
              <XIcon className="size-4" /> {BRAND.xHandle}
            </a>
            <div className="mt-[calc(var(--u)*50)] max-md:mt-8">
              <LiveChainStrip />
            </div>
          </Reveal>
        </div>
      </section>

      <PostGrid title={"Getting paid.\nReinvented."} sub="Our edit of Drip Cash news, events and perspectives, together with use cases and research." />
    </>
  );
}
