import type { Metadata } from "next";
import Link from "next/link";
import { CtaPhoto, PageHero, PostCard, Tags } from "@/components/site/blocks";
import { SubscribeBox } from "@/components/site/forms";
import { Reveal } from "@/components/Reveal";
import { CATEGORIES, TOPICS, articleHref, categoryLabel, formatDate, sortedArticles, type Category } from "@/content/articles";

export const metadata: Metadata = {
  title: "Blogs and articles",
  description: "News, perspectives, events, use cases and research from Drip Cash.",
};

type Props = { searchParams: Promise<{ filter?: string; topic?: string }> };

export default async function NewsPage({ searchParams }: Props) {
  const { filter = "all", topic } = await searchParams;
  const all = sortedArticles();
  const [featured] = all;
  const active = CATEGORIES.some((c) => c.key === filter) ? (filter as Category) : "all";
  const list = all
    .filter((a) => a !== featured || active !== "all" || topic)
    .filter((a) => active === "all" || a.category === active)
    .filter((a) => !topic || a.tags.some((t) => t.toLowerCase() === topic.toLowerCase()) || a.title.toLowerCase().includes(topic.toLowerCase()));

  return (
    <>
      <PageHero
        title={"Getting paid.\nReinvented."}
        art="/art/hero-news.webp"
        aside={
          <Link href={articleHref(featured)} className="group block rounded-l-[calc(var(--u)*40)] bg-white p-[calc(var(--u)*26)] max-md:rounded-l-3xl max-md:p-5">
            <p className="text-[calc(var(--u)*12)] text-drip max-md:text-[12px]">{categoryLabel(featured.category)}</p>
            <p className="mt-[calc(var(--u)*12)] text-[calc(var(--u)*13)] max-md:text-[13px]">{formatDate(featured.date)}</p>
            <p className="mt-[calc(var(--u)*10)] text-[calc(var(--u)*20)] font-bold leading-[1.3] text-ink group-hover:text-drip max-md:text-[17px]">{featured.title}</p>
            <Tags tags={featured.tags} />
          </Link>
        }
      >
        <Reveal delay={150}>
          <SubscribeBox className="mt-[calc(var(--u)*40)] max-md:mt-6" />
        </Reveal>
      </PageHero>

      <div className="relative z-10 bg-white shadow-[0_10px_40px_rgba(20,16,14,0.07)]">
        <nav aria-label="Categories" className="wrap flex flex-wrap gap-x-[calc(var(--u)*56)] gap-y-3 py-[calc(var(--u)*40)] max-md:py-5">
          {[{ key: "all", label: "All" }, ...CATEGORIES].map((c) => (
            <Link
              key={c.key}
              href={`/news?filter=${c.key}`}
              scroll={false}
              className={`text-[calc(var(--u)*20)] font-bold transition-colors max-md:text-[16px] ${active === c.key ? "text-drip" : "text-ink hover:text-drip"}`}
            >
              {c.label}
            </Link>
          ))}
        </nav>
      </div>

      <section className="wrap py-[calc(var(--u)*90)] max-md:py-10">
        <div className="grid grid-cols-1 gap-[calc(var(--u)*40)] md:grid-cols-2 max-md:gap-5">
          <div>
            <p className="text-[calc(var(--u)*24)] font-bold text-ink max-md:text-[20px]">Topics to explore</p>
            <div className="mt-[calc(var(--u)*20)] flex flex-col items-start gap-[calc(var(--u)*12)] max-md:flex-row max-md:flex-wrap">
              {TOPICS.map((t) => (
                <Link key={t} href={`/news?filter=${active}&topic=${encodeURIComponent(t)}`} scroll={false} className={`tag hover:opacity-80 ${topic === t ? "!bg-drip !text-white" : ""}`}>
                  {t}
                </Link>
              ))}
              {topic && (
                <Link href={`/news?filter=${active}`} scroll={false} className="text-[13px] text-mute underline">
                  Clear topic
                </Link>
              )}
            </div>
          </div>
          {list.map((p, i) => (
            <PostCard key={p.slug} post={p} delay={(i % 2) * 80} />
          ))}
        </div>
        {list.length === 0 && <p className="t-body mt-10 text-center">Nothing here yet for this filter. New posts land every few weeks.</p>}
      </section>

      <CtaPhoto title={"Ready to let your\nmoney drip?"} cta="wallet" />
    </>
  );
}
