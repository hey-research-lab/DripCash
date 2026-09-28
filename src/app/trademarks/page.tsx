import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = { title: "Trademarks", description: "Using the Drip Cash name and mark." };

export default function Page() {
  return (
    <LegalPage title="Trademarks" updated="28 September 2026">
      <p>
        {BRAND.name}, {BRAND.symbol}, DripScript, Drip Net, Drip Vaults and the drop mark are brand names and marks used by the {BRAND.name} project.
      </p>
      <h2>Fair use</h2>
      <p>
        You may use the name and mark to refer to the project accurately, for example in news coverage, reviews, tutorials or integrations, as long
        as the use does not suggest endorsement or partnership that does not exist.
      </p>
      <h2>Please do not</h2>
      <ul>
        <li>Use the mark as part of your own product name, token name or logo.</li>
        <li>Modify, recolour or distort the mark.</li>
        <li>Use the name for a token, contract or site that could be mistaken for the official one.</li>
      </ul>
      <p>
        Official files are available in the <Link href="/media-centre">media centre</Link>. The only official contract address is the one shown in
        this site&apos;s navbar and footer.
      </p>
    </LegalPage>
  );
}
