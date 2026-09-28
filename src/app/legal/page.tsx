import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = { title: "Legal", description: "Legal information for Drip Cash." };

const LINKS = [
  { label: "Terms of use", href: "/terms-of-use" },
  { label: "Trademarks", href: "/trademarks" },
  { label: "Unsolicited ideas submission policy", href: "/unsolicited-ideas-submission-policy" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

export default function Page() {
  return (
    <LegalPage title="Legal">
      <ul>
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label} &gt;</Link>
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
