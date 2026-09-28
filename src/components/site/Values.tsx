import { Reveal } from "@/components/Reveal";
import { VALUES } from "@/content/company";

export function Values() {
  return (
    <section className="wrap py-[calc(var(--u)*130)] max-md:py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-[calc(var(--u)*90)]">
        <div className="md:sticky md:top-[calc(var(--u)*140)] md:self-start">
          <Reveal>
            <h2 className="t-h2 text-ink">Our values</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="t-lead mt-[calc(var(--u)*30)]">We come from payments, engineering and online communities. What holds us together is what we believe.</p>
          </Reveal>
        </div>
        <ol>
          {VALUES.map((v, i) => (
            <Reveal key={v.title} as="li" className="border-t border-ink/15 py-[calc(var(--u)*34)] last:border-b max-md:py-6">
              <div className="flex gap-[calc(var(--u)*30)] max-md:gap-4">
                <span className="text-[calc(var(--u)*18)] font-bold text-drip max-md:text-[15px]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="t-h3 text-ink">{v.title}</h3>
                  <p className="t-body mt-[calc(var(--u)*14)]">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
