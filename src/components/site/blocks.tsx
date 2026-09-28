import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { LineArt, type ArtName } from "@/components/art/LineArt";
import { WalletButton } from "@/components/wallet/WalletButton";
import { ArrowRight } from "@/components/icons";
import { articleHref, categoryLabel, formatDate, sortedArticles, type Article } from "@/content/articles";

export type Cta = { label: string; href: string } | "wallet";

export function CtaButton({ cta, light = false, className = "" }: { cta: Cta; light?: boolean; className?: string }) {
  if (cta === "wallet") return <WalletButton className={`!px-[calc(var(--u)*24)] !py-[calc(var(--u)*12)] !text-[calc(var(--u)*18)] max-md:!text-[16px] ${light ? "btn-light" : ""} ${className}`} />;
  return (
    <Link href={cta.href} className={`btn ${light ? "btn-light" : ""} ${className}`}>
      {cta.label}
    </Link>
  );
}

/** Split heading: plain words, then an orange tail. */
export function Split({ plain, accent, breakBefore = false }: { plain?: string; accent?: string; breakBefore?: boolean }) {
  return (
    <>
      {plain}
      {plain && accent && (breakBefore ? <br /> : " ")}
      {accent && <span className="accent">{accent}</span>}
    </>
  );
}

/**
 * Inner-page hero: copy on the left, a dark art panel on the right that bleeds
 * to the viewport edge with one large rounded corner.
 */
export function PageHero({
  title,
  accent = false,
  intro = [],
  cta,
  art,
  aside,
  children,
}: {
  title: ReactNode;
  accent?: boolean;
  intro?: string[];
  cta?: Cta;
  art: string;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="wrap relative grid grid-cols-1 md:min-h-[calc(var(--u)*780)] md:grid-cols-[calc(var(--u)*430)_1fr]">
        <div className="relative z-10 pb-10 pt-[calc(var(--u)*70)] md:pb-[calc(var(--u)*80)]">
          <Reveal>
            <h1 className={`t-hero whitespace-pre-line ${accent ? "text-drip" : "text-ink"}`}>{title}</h1>
          </Reveal>
          {intro.map((p, i) => (
            <Reveal key={i} delay={120 + i * 80}>
              <p className="t-lead mt-[calc(var(--u)*40)] max-md:mt-5">{p}</p>
            </Reveal>
          ))}
          {children}
          {cta && (
            <Reveal delay={300}>
              <div className="mt-[calc(var(--u)*80)] max-md:mt-8">
                <CtaButton cta={cta} />
              </div>
            </Reveal>
          )}
        </div>
      </div>
      <div className="relative h-[340px] overflow-hidden rounded-tl-[120px] bg-panel md:absolute md:right-0 md:top-0 md:h-[calc(var(--u)*780)] md:w-[calc(100%-var(--u)*658)] md:rounded-tl-[calc(var(--u)*260)] max-md:ml-5">
        <img src={art} alt="" className="absolute inset-0 size-full object-cover" />
        {aside && <div className="absolute bottom-[calc(var(--u)*60)] right-0 z-10 w-[min(100%,calc(var(--u)*380))] max-md:bottom-4 max-md:w-[90%]">{aside}</div>}
      </div>
    </section>
  );
}

/** Two-column row: big heading and copy against an orange line illustration. */
export function FeatureRow({
  title,
  body,
  art,
  flip = false,
  cta,
  seed,
  note,
}: {
  title: ReactNode;
  body: string[];
  art: ArtName;
  flip?: boolean;
  cta?: Cta;
  seed?: number;
  note?: string;
}) {
  return (
    <section className="wrap py-[calc(var(--u)*110)] max-md:py-12">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[calc(var(--u)*80)]">
        <Reveal className={flip ? "md:order-2" : ""}>
          <LineArt name={art} seed={seed} className="mx-auto w-full max-w-[calc(var(--u)*500)] max-md:max-w-[340px]" />
        </Reveal>
        <div className={flip ? "md:order-1" : ""}>
          <Reveal>
            <h2 className="t-h2 whitespace-pre-line text-ink">{title}</h2>
          </Reveal>
          {body.map((p, i) => (
            <Reveal key={i} delay={100 + i * 60}>
              <p className="t-lead mt-[calc(var(--u)*34)] max-md:mt-5">{p}</p>
            </Reveal>
          ))}
          {note && (
            <Reveal delay={200}>
              <p className="t-lead mt-[calc(var(--u)*34)] text-drip max-md:mt-5">{note}</p>
            </Reveal>
          )}
          {cta && (
            <Reveal delay={260}>
              <div className="mt-[calc(var(--u)*40)] max-md:mt-6">
                <CtaButton cta={cta} />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

export function CenterTitle({ title, sub, className = "" }: { title: ReactNode; sub?: ReactNode; className?: string }) {
  return (
    <div className={`wrap text-center ${className}`}>
      <Reveal>
        <h2 className="t-h2 whitespace-pre-line text-ink">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={100}>
          <p className="t-lead mx-auto mt-[calc(var(--u)*30)] max-w-[calc(var(--u)*900)] whitespace-pre-line max-md:mt-5">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

export type CardItem = { title: string; body: string; href?: string };

/** Use-case cards: white, soft shadow, orange top rule, brand corners. */
export function CardGrid({ items, intro, cols = 3 }: { items: CardItem[]; intro?: string; cols?: 2 | 3 | 4 }) {
  const grid = cols === 4 ? "md:grid-cols-2 xl:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className="wrap mt-[calc(var(--u)*60)] max-md:mt-8">
      {intro && (
        <Reveal>
          <p className="mb-[calc(var(--u)*50)] text-center text-[calc(var(--u)*22)] font-bold text-mute max-md:mb-6 max-md:text-[17px]">{intro}</p>
        </Reveal>
      )}
      <div className={`grid grid-cols-1 gap-[calc(var(--u)*30)] max-md:gap-5 ${grid}`}>
        {items.map((it, i) => {
          const inner = (
            <>
              <span className="block h-[3px] w-[calc(var(--u)*60)] min-w-10 bg-drip" />
              <h3 className="t-h4 mt-[calc(var(--u)*26)] text-ink max-md:mt-4">{it.title}</h3>
              <p className="t-body mt-[calc(var(--u)*16)] max-md:mt-3">{it.body}</p>
              {it.href && (
                <span className="mt-auto flex items-center gap-2 pt-[calc(var(--u)*26)] text-[calc(var(--u)*16)] font-bold text-ink group-hover:text-drip max-md:pt-5 max-md:text-[15px]">
                  Learn more <ArrowRight className="size-5" />
                </span>
              )}
            </>
          );
          const cls = "group corner card-shadow flex h-full flex-col bg-white p-[calc(var(--u)*40)] max-md:p-6";
          return (
            <Reveal key={it.title} delay={i * 80} className="h-full">
              {it.href ? (
                <Link href={it.href} className={cls}>
                  {inner}
                </Link>
              ) : (
                <div className={cls}>{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

/** Peach radial band with a centred heading and one button. */
export function CtaPeach({ title, cta }: { title: ReactNode; cta: Cta }) {
  return (
    <section className="bg-[radial-gradient(ellipse_at_center,#ffffff_0%,#fde7dd_38%,#f8c6b1_100%)] py-[calc(var(--u)*150)] text-center max-md:py-16">
      <div className="wrap">
        <Reveal>
          <h2 className="t-h2 mx-auto max-w-[calc(var(--u)*1000)] whitespace-pre-line text-ink">{title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-[calc(var(--u)*60)] max-md:mt-8">
            <CtaButton cta={cta} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Dark art band ("ready to…") used on the home page and the lists. */
export function CtaPhoto({ title, cta }: { title: ReactNode; cta: Cta }) {
  return (
    <section className="relative overflow-hidden py-[calc(var(--u)*190)] text-center text-white max-md:py-20">
      <img src="/art/cta-city.webp" alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-deep/25" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="t-h2 mx-auto max-w-[calc(var(--u)*900)] whitespace-pre-line">{title}</h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-[calc(var(--u)*60)] max-md:mt-8">
            <CtaButton cta={cta} light />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-[calc(var(--u)*12)] flex flex-wrap gap-[calc(var(--u)*8)] max-md:gap-1.5">
      {tags.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}

/** Horizontal post card: text on the left, cover on the right. */
export function PostCard({ post, delay = 0 }: { post: Article; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link href={articleHref(post)} className="group corner card-shadow grid h-full grid-cols-1 overflow-hidden bg-white sm:grid-cols-[1fr_1fr]">
        <div className="flex flex-col p-[calc(var(--u)*26)] max-md:p-5">
          <p className="text-[calc(var(--u)*12)] font-light text-drip max-md:text-[12px]">{categoryLabel(post.category)}</p>
          <p className="mt-[calc(var(--u)*14)] text-[calc(var(--u)*13)] font-light text-ink max-md:mt-2 max-md:text-[13px]">{formatDate(post.date)}</p>
          <h3 className="mt-[calc(var(--u)*12)] text-[calc(var(--u)*22)] font-bold leading-[1.3] text-ink group-hover:text-drip max-md:text-[19px]">{post.title}</h3>
          <Tags tags={post.tags} />
        </div>
        <div className="relative min-h-[200px] sm:min-h-[calc(var(--u)*280)]">
          <img src={post.cover} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </Link>
    </Reveal>
  );
}

/** "Explore the future." block: latest posts, optionally filtered. */
export function PostGrid({
  title = "Explore the future.",
  sub,
  filter,
  count = 4,
  moreHref = "/news?filter=all",
}: {
  title?: ReactNode;
  sub?: ReactNode;
  filter?: (a: Article) => boolean;
  count?: number;
  moreHref?: string;
}) {
  const posts = sortedArticles().filter(filter ?? (() => true)).slice(0, count);
  return (
    <section className="py-[calc(var(--u)*130)] max-md:py-14">
      <CenterTitle title={title} sub={sub} />
      <div className="wrap mt-[calc(var(--u)*70)] grid grid-cols-1 gap-[calc(var(--u)*40)] md:grid-cols-2 max-md:mt-8 max-md:gap-5">
        {posts.map((p, i) => (
          <PostCard key={p.slug} post={p} delay={(i % 2) * 80} />
        ))}
      </div>
      <div className="wrap mt-[calc(var(--u)*30)] flex justify-end max-md:mt-5">
        <Link href={moreHref} className="flex items-center gap-2 text-[calc(var(--u)*16)] font-normal text-ink hover:text-drip max-md:text-[15px]">
          More <ArrowRight className="size-6 text-mute" />
        </Link>
      </div>
    </section>
  );
}

/** Numbered, centred list columns joined by orange connector lines. */
export function ServeColumns({ columns }: { columns: { title: string; href: string; points: string[] }[] }) {
  return (
    <div className="wrap">
      <Reveal className="hidden md:block">
        <svg viewBox="0 0 1000 80" className="h-[calc(var(--u)*80)] w-full" preserveAspectRatio="none" fill="none">
          <path className="draw-line" pathLength={1} d="M149 80 V2 H851 V80 M500 2 V80" stroke="#F15A22" strokeWidth="2" vectorEffect="non-scaling-stroke" />
        </svg>
      </Reveal>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-[calc(var(--u)*60)]">
        {columns.map((c, i) => (
          <Reveal key={c.title} delay={i * 150} className="text-center">
            <span className="mx-auto block h-[2px] w-[calc(var(--u)*40)] min-w-8 bg-drip md:hidden" />
            <Link href={c.href} className="t-h4 mt-[calc(var(--u)*30)] inline-block text-ink hover:text-drip max-md:mt-4">
              {c.title}
            </Link>
            <ul className="mx-auto mt-[calc(var(--u)*22)] max-w-[calc(var(--u)*250)] list-disc space-y-2 pl-4 text-left text-[calc(var(--u)*15)] leading-[1.6] max-md:max-w-[320px] max-md:text-[15px]">
              {c.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
