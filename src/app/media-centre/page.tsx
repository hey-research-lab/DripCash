import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CenterTitle, PageHero, PostCard, PostGrid } from "@/components/site/blocks";
import { PressForm } from "@/components/site/forms";
import { CopyText } from "@/components/site/CopyText";
import { DripMark } from "@/components/Logo";
import { ArrowRight, DownloadIcon } from "@/components/icons";
import { BRAND } from "@/config/brand";
import { articleHref, categoryLabel, formatDate, sortedArticles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Media centre",
  description: "Press releases, brand assets and background on Drip Cash.",
};

const BOILERPLATE = `${BRAND.name} streams payments on Robinhood Chain. Payers set a rate, a condition or a split, and receivers get paid the moment value is delivered, with every transaction on a public record. ${BRAND.symbol} is the project's token. More at ${BRAND.domain}.`;

const SHORT = `${BRAND.name}: streaming payments on Robinhood Chain. ${BRAND.slogan}`;

const ASSETS = [
  { name: "Mark (SVG)", file: "/brand/dripcash-mark.svg", note: "Vector drop mark, orange on transparent." },
  { name: "Mark (WebP, 1024px)", file: "/brand/dripcash-mark.webp", note: "Raster mark for documents and slides." },
  { name: "App icon (WebP, 512px)", file: "/brand/dripcash-icon.webp", note: "Orange mark on a white tile." },
  { name: "Social card (WebP)", file: "/brand/og.webp", note: "1200 by 630 share image with the wordmark." },
];

export default function MediaCentrePage() {
  const posts = sortedArticles();
  const releases = posts.filter((p) => p.category === "news");
  const explainers = posts.filter((p) => p.category !== "news");
  return (
    <>
      <PageHero title="Media centre" intro={["Background, releases and brand files for journalists, analysts and commentators."]} art="/art/hero-media.webp">
        <Reveal delay={150}>
          <p className="t-body mt-[calc(var(--u)*30)]">Want releases delivered to your inbox? Leave your details below.</p>
          <PressForm />
        </Reveal>
      </PageHero>

      <section className="py-[calc(var(--u)*130)] max-md:py-14">
        <CenterTitle title="Press releases" sub="For follow-ups on any announcement, message us on X." />
        <div className="wrap mt-[calc(var(--u)*70)] grid grid-cols-1 gap-[calc(var(--u)*40)] md:grid-cols-2 max-md:mt-8 max-md:gap-5">
          {releases.map((p, i) => (
            <PostCard key={p.slug} post={p} delay={(i % 2) * 80} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-[calc(var(--u)*130)] max-md:py-14">
        <CenterTitle title="About us, in brief" />
        <div className="wrap mt-[calc(var(--u)*70)] grid grid-cols-1 gap-[calc(var(--u)*40)] md:grid-cols-2 max-md:mt-8 max-md:gap-5">
          {[
            { title: "Boilerplate", body: BOILERPLATE },
            { title: "One-liner", body: SHORT },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="h-full">
              <div className="corner flex h-full flex-col bg-white p-[calc(var(--u)*40)] max-md:p-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-full bg-drip text-white">
                    <DripMark className="size-8" />
                  </span>
                  <div>
                    <p className="t-h4 text-ink">{b.title}</p>
                    <p className="t-small">{BRAND.name}</p>
                  </div>
                </div>
                <p className="t-body mt-[calc(var(--u)*24)] flex-1">{b.body}</p>
                <div className="mt-[calc(var(--u)*24)] flex flex-wrap gap-6">
                  <a href="/brand/dripcash-mark.webp" download className="flex items-center gap-2 text-[15px] font-bold text-ink hover:text-drip">
                    <DownloadIcon className="size-5" /> Download image
                  </a>
                  <CopyText text={b.body} label="Copy bio" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-[calc(var(--u)*130)] max-md:py-14">
        <CenterTitle title="Explainers" sub="Longer reads on how streaming money works." />
        <ul className="wrap mt-[calc(var(--u)*60)] max-md:mt-8">
          {explainers.map((p) => (
            <li key={p.slug} className="border-b border-ink/15">
              <Link href={articleHref(p)} className="group grid grid-cols-1 gap-1 py-[calc(var(--u)*22)] md:grid-cols-[calc(var(--u)*160)_calc(var(--u)*200)_1fr_auto] md:items-center md:gap-6 max-md:py-4">
                <span className="text-[calc(var(--u)*14)] font-bold text-drip max-md:text-[13px]">{categoryLabel(p.category)}</span>
                <span className="text-[calc(var(--u)*14)] max-md:text-[13px]">{formatDate(p.date)}</span>
                <span className="text-[calc(var(--u)*19)] font-bold text-ink group-hover:text-drip max-md:text-[17px]">{p.title}</span>
                <ArrowRight className="hidden size-6 text-mute md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-mist py-[calc(var(--u)*130)] max-md:py-14">
        <CenterTitle title="Brand assets" />
        <div className="wrap mt-[calc(var(--u)*60)] grid grid-cols-1 gap-[calc(var(--u)*30)] sm:grid-cols-2 lg:grid-cols-4 max-md:mt-8 max-md:gap-4">
          {ASSETS.map((a) => (
            <Reveal key={a.file} className="h-full">
              <a href={a.file} download className="group corner flex h-full flex-col bg-white p-[calc(var(--u)*30)] max-md:p-5">
                <div className="grid aspect-square place-items-center bg-mist">
                  <img src={a.file} alt={a.name} className="max-h-[70%] max-w-[70%] object-contain" />
                </div>
                <p className="t-h4 mt-4 text-ink">{a.name}</p>
                <p className="t-small mt-1 flex-1">{a.note}</p>
                <span className="mt-4 flex items-center gap-2 text-[15px] font-bold text-ink group-hover:text-drip">
                  <DownloadIcon className="size-5" /> Download
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="wrap mt-[calc(var(--u)*70)] text-center max-md:mt-10">
          <p className="t-h4 text-ink">More information?</p>
          <p className="t-body mt-2">
            Journalists, analysts and commentators can reach the team on X at{" "}
            <a href={BRAND.x} target="_blank" rel="noreferrer" className="font-bold text-drip underline">
              {BRAND.xHandle}
            </a>
            .
          </p>
        </Reveal>
      </section>

      <PostGrid title={"Getting paid.\nReinvented."} sub="Our edit of Drip Cash news, events and perspectives, together with use cases and research." />
    </>
  );
}
