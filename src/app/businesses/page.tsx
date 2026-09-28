import type { Metadata } from "next";
import { SpecPage } from "@/components/site/SpecPage";
import { PAGES } from "@/content/pages";

const spec = PAGES["businesses"];

export const metadata: Metadata = { title: spec.metaTitle, description: spec.description };

export default function Page() {
  return <SpecPage spec={spec} />;
}
