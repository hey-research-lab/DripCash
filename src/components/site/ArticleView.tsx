import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { PostGrid, Tags } from "@/components/site/blocks";
import { SubscribeBox } from "@/components/site/forms";
import { ShareLinks } from "@/components/site/ShareLinks";
import { ArrowLeft } from "@/components/icons";
import { ARTICLES, categoryLabel, findArticle, formatDate, type Category } from "@/content/articles";

export function articleParams(category: Category) {
  return ARTICLES.filter((a) => a.category === category).map((a) => ({ slug: a.slug }));
}

export async function articleMetadata(category: Category, params: Promise<{ slug: string }>): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle(category, slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.lead,
    openGraph: { title: a.title, description: a.lead, images: [{ url: a.cover }] },
  };
}

export async function ArticleView({ category, params }: { category: Category; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = findArticle(category, slug);
  if (!a) notFound();
  const label = categoryLabel(a.category);
  return (
    <>
      <section className="relative">
        <div className="wrap grid grid-cols-1 md:min-h-[calc(var(--u)*650)] md:grid-cols-[calc(var(--u)*520)_1fr]">
          <div className="relative z-10 flex flex-col justify-center pb-10 pt-[calc(var(--u)*60)]">
            <Reveal>
              <h1 className="t-hero text-ink">{a.title}</h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-[calc(var(--u)*30)] text-[calc(var(--u)*14)] text-drip max-md:text-[13px]">{label}</p>
              <p className="mt-2 text-[calc(var(--u)*14)] max-md:text-[13px]">
                {formatDate(a.date)} · By the Drip Cash team
              </p>
              <Tags tags={a.tags} />
              <div className="mt-[calc(var(--u)*30)] flex flex-wrap items-center gap-6 text-[calc(var(--u)*14)] max-md:text-[14px]">
                <Link href={`/news?filter=${a.category}`} className="flex items-center gap-2 hover:text-drip">
                  <ArrowLeft className="size-5" /> Back to {label}
                </Link>
                <ShareLinks title={a.title} />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-l-[150px] bg-panel md:absolute md:right-0 md:top-0 md:h-[calc(var(--u)*650)] md:w-[calc(100%-var(--u)*760)] md:rounded-l-[calc(var(--u)*325)] max-md:ml-5">
          <img src={a.cover} alt="" className="absolute inset-0 size-full object-cover" />
        </div>
      </section>

      <section className="wrap py-[calc(var(--u)*100)] max-md:py-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.25fr_1fr] md:gap-[calc(var(--u)*100)]">
          <article>
            <p className="t-lead">{a.lead}</p>
            <div className="prose-drip t-body">
              {a.body.map((b, i) => (
                <div key={i}>
                  {b.h && <h2>{b.h}</h2>}
                  {b.p && <p>{b.p}</p>}
                  {b.list && (
                    <ul>
                      {b.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </article>
          <aside className="md:sticky md:top-[calc(var(--u)*140)] md:self-start">
            <span className="block h-[2px] w-[calc(var(--u)*62)] min-w-12 bg-drip" />
            <blockquote className="mt-[calc(var(--u)*46)] text-[calc(var(--u)*23)] font-bold leading-[1.35] text-ink max-md:mt-5 max-md:text-[20px]">
              “{a.quote}”
            </blockquote>
            <p className="mt-[calc(var(--u)*50)] text-[calc(var(--u)*22)] font-bold text-ink max-md:mt-5 max-md:text-[18px]">Drip Cash</p>
            <SubscribeBox className="mt-[calc(var(--u)*60)] max-md:mt-8" />
          </aside>
        </div>
      </section>

      <PostGrid title="Keep reading." filter={(x) => x.slug !== a.slug} />
    </>
  );
}
