import type { Metadata } from "next";
import { SpecPage } from "@/components/site/SpecPage";
import { USE_CASES } from "@/content/pages";

const spec = USE_CASES["invoice-flows"];

export const metadata: Metadata = { title: spec.metaTitle, description: spec.description };

export default function Page() {
  return <SpecPage spec={spec} />;
}
