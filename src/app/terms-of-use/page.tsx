import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = { title: "Terms of use", description: "Terms for using dripcash.xyz." };

export default function Page() {
  return (
    <LegalPage title="Terms of use" updated="28 September 2026">
      <p>By using {BRAND.domain} you agree to these terms. If you do not agree, please do not use the site.</p>
      <h2>Information only</h2>
      <p>
        Content on this site describes {BRAND.name} and streaming payments in general. It is not financial, legal, tax or investment advice, and it
        is not an offer to buy or sell any asset, including {BRAND.symbol}.
      </p>
      <h2>Your wallet, your responsibility</h2>
      <p>
        The site never holds your keys. Any transaction you approve is sent by your own wallet to Robinhood Chain and cannot be reversed by us.
        Check every request in your wallet before approving it.
      </p>
      <h2>Features before launch</h2>
      <p>
        Streams, escrows, payouts and forms are shown for preview and open at launch. Until then they do not move funds or send messages. Features
        may change before release.
      </p>
      <h2>Digital assets carry risk</h2>
      <p>
        Token prices can move sharply, smart contracts can contain defects, and networks can be congested or unavailable. Only use funds you can
        afford to lose.
      </p>
      <h2>No warranty</h2>
      <p>
        The site is provided as is, without warranties of any kind. To the extent the law allows, {BRAND.name} is not liable for losses arising
        from use of the site or the networks it connects to.
      </p>
      <h2>Changes</h2>
      <p>We may update these terms as the product develops. The date above shows the latest version.</p>
    </LegalPage>
  );
}
