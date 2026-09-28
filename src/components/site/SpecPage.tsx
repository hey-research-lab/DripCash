import { Fragment } from "react";
import { Reveal } from "@/components/Reveal";
import { FlowDiagram } from "@/components/art/FlowDiagram";
import { CardGrid, CenterTitle, CtaPeach, CtaPhoto, FeatureRow, PageHero, PostGrid } from "@/components/site/blocks";
import type { PageSpec } from "@/content/pages";

/** Renders a data-driven inner page in the shared section order. */
export function SpecPage({ spec }: { spec: PageSpec }) {
  const { hero } = spec;
  return (
    <>
      <PageHero title={hero.title} accent={hero.accent} intro={hero.intro} cta={hero.cta} art={hero.art} />

      {spec.statement && (
        <section className="py-[calc(var(--u)*120)] max-md:py-14">
          <CenterTitle title={spec.statement.title} sub={spec.statement.sub} />
        </section>
      )}

      {spec.rows.map((row, i) => (
        <Fragment key={row.title}>
          <FeatureRow title={row.title} body={row.body} art={row.art} flip={i % 2 === 1} note={row.note} cta={row.cta} seed={row.seed} />
        </Fragment>
      ))}

      {spec.diagram && (
        <section className="py-[calc(var(--u)*110)] max-md:py-12">
          <CenterTitle title={spec.diagram.title} sub={spec.diagram.sub} />
          <Reveal className="wrap mt-[calc(var(--u)*60)] max-md:mt-8">
            <FlowDiagram left={spec.diagram.left} right={spec.diagram.right} className="mx-auto w-full max-w-[calc(var(--u)*980)]" />
          </Reveal>
        </section>
      )}

      {spec.cards && (
        <section className="pb-[calc(var(--u)*140)] pt-[calc(var(--u)*60)] max-md:pb-14 max-md:pt-6">
          {spec.cards.title && <CenterTitle title={spec.cards.title} sub={spec.cards.sub} />}
          <CardGrid items={spec.cards.items} intro={spec.cards.intro} cols={spec.cards.cols} />
        </section>
      )}

      {spec.pair && (
        <section className="bg-mist py-[calc(var(--u)*130)] max-md:py-14">
          <CenterTitle title={spec.pair.title} />
          <div className="wrap mt-[calc(var(--u)*70)] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[calc(var(--u)*80)] max-md:mt-8">
            {spec.pair.items.map((it, i) => (
              <Reveal key={it.title} delay={i * 100}>
                <h3 className="t-h3 text-drip">{it.title}</h3>
                <p className="t-lead mt-[calc(var(--u)*20)]">{it.body}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {spec.posts && (
        <PostGrid
          title={spec.posts.title}
          sub={spec.posts.sub}
          filter={spec.posts.category ? (a) => a.category === spec.posts!.category : undefined}
        />
      )}

      {spec.closing.style === "photo" ? (
        <CtaPhoto title={spec.closing.title} cta={spec.closing.cta} />
      ) : (
        <CtaPeach title={spec.closing.title} cta={spec.closing.cta} />
      )}
    </>
  );
}
