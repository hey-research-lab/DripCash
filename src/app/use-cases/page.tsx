import type { Metadata } from "next";
import { CardGrid, PageHero, PostGrid } from "@/components/site/blocks";

export const metadata: Metadata = {
  title: "Use cases",
  description: "Streaming payroll, escrowed invoices, treasury sweeps, smart wallets and tax reserves on Robinhood Chain.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        title="Use cases"
        intro={[
          "Explore how streaming money works in practice, from payroll by the second to wallets that sort earnings on their own, and see how Drip Cash changes when people get paid.",
        ]}
        cta={{ label: "Talk to us", href: "/contact" }}
        art="/art/hero-usecases.webp"
      />
      <section className="py-[calc(var(--u)*110)] max-md:py-12">
        <CardGrid
          cols={3}
          items={[
            { title: "Streaming payroll", body: "Pay contractors and teams by the second, with lower costs and no month-end run.", href: "/streaming-payroll" },
            { title: "Invoice flows", body: "Smarter cash flow: payments locked up front and released on delivery.", href: "/invoice-flows" },
            { title: "Treasury sweeps", body: "Real-time rules that keep every wallet at the right balance.", href: "/treasury-sweeps" },
            { title: "Smart wallets", body: "Wallets that split incoming money into savings, tax and spending by rule.", href: "/smart-wallets" },
            { title: "Tax reserves", body: "Make tax less taxing by setting it aside the moment money arrives.", href: "/tax-reserves" },
          ]}
        />
      </section>
      <PostGrid filter={(a) => a.category === "use-cases" || a.category === "perspectives"} moreHref="/news?filter=use-cases" />
    </>
  );
}
