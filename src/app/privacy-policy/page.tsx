import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = { title: "Privacy policy", description: "How Drip Cash handles information on dripcash.xyz." };

export default function Page() {
  return (
    <LegalPage title="Privacy policy" updated="28 September 2026">
      <p>
        This policy explains what information {BRAND.domain} handles when you visit it, and what it does not. It works alongside our{" "}
        <Link href="/terms-of-use">terms of use</Link>. We will update it when the way the site works changes.
      </p>
      <p>The policy covers:</p>
      <ul>
        <li>What this site collects</li>
        <li>Wallet connections</li>
        <li>Chain reads</li>
        <li>Forms</li>
        <li>Storage in your browser</li>
        <li>Your choices</li>
        <li>How to contact us</li>
      </ul>
      <h2>What this site collects</h2>
      <p>
        The site runs without advertising trackers or analytics cookies. Like any web server, our hosting provider may keep short-lived technical
        logs (such as IP address, time and requested page) to keep the service secure and working.
      </p>
      <h2>Wallet connections</h2>
      <p>
        When you connect a wallet, your wallet shares a public address with this page. We use it to show your balance and network in your browser.
        Connecting never gives us access to your keys or funds, and every transaction must be approved in your wallet.
      </p>
      <h2>Chain reads</h2>
      <p>
        Balances, block numbers and gas prices are read from Robinhood Chain through a relay on this site, which forwards read-only requests to a
        public RPC provider. Those requests can include your public address. Blockchain data is public by nature and cannot be deleted by us.
      </p>
      <h2>Forms</h2>
      <p>
        The contact, newsletter, press and paper forms are not connected to any inbox yet. Submitting them keeps the details in your browser only and
        shows a notice; nothing is transmitted or stored by us until those services open at launch, when this policy will be updated.
      </p>
      <h2>Storage in your browser</h2>
      <p>
        The site stores the last connected wallet (its name and public address) in your browser&apos;s local storage so it can reconnect quietly.
        Disconnecting, or clearing site data, removes it.
      </p>
      <h2>Your choices</h2>
      <p>You can use the site without connecting a wallet. You can disconnect at any time from the wallet menu, and revoke the site in your wallet.</p>
      <h2>How to contact us</h2>
      <p>
        Questions about this policy can be sent to <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> or to{" "}
        <a href={BRAND.x} target="_blank" rel="noreferrer">
          {BRAND.xHandle}
        </a>{" "}
        on X.
      </p>
    </LegalPage>
  );
}
