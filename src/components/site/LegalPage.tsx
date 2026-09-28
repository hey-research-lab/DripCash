import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "@/components/icons";

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <section className="wrap pb-[calc(var(--u)*120)] pt-[calc(var(--u)*50)] max-md:pb-14">
      <h1 className="t-hero text-ink">{title}</h1>
      <Link href="/" className="mt-[calc(var(--u)*50)] inline-flex items-center gap-2 text-[calc(var(--u)*15)] hover:text-drip max-md:mt-6 max-md:text-[14px]">
        <ArrowLeft className="size-5" /> Back to home
      </Link>
      {updated && <p className="t-small mt-[calc(var(--u)*40)] text-mute">Last updated {updated}</p>}
      <div className="prose-drip t-small mt-[calc(var(--u)*20)] max-w-[calc(var(--u)*1140)]">{children}</div>
    </section>
  );
}
