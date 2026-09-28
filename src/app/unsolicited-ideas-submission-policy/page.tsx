import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = { title: "Unsolicited ideas submission policy", description: "How Drip Cash handles unsolicited ideas." };

export default function Page() {
  return (
    <LegalPage title="Unsolicited ideas submission policy" updated="28 September 2026">
      <p>
        We love hearing from the community, but we do not accept unsolicited ideas for products, features, designs or campaigns outside of our open
        channels. This keeps things fair for everyone and avoids misunderstandings about who came up with what.
      </p>
      <h2>If you send an idea anyway</h2>
      <ul>
        <li>It will not be treated as confidential.</li>
        <li>{BRAND.name} has no obligation to review, use, credit or pay for it.</li>
        <li>We may already be working on something similar, independently.</li>
      </ul>
      <h2>Where feedback belongs</h2>
      <p>
        Feature requests and feedback are welcome in public on X at {BRAND.xHandle} and during our monthly community calls, where everyone can see
        and build on them.
      </p>
    </LegalPage>
  );
}
