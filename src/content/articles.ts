export type Category = "news" | "perspectives" | "events" | "use-cases" | "research";

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "news", label: "News" },
  { key: "perspectives", label: "Perspectives" },
  { key: "events", label: "Events" },
  { key: "use-cases", label: "Use cases" },
  { key: "research", label: "Research" },
];

export const categoryLabel = (c: Category) => CATEGORIES.find((x) => x.key === c)?.label ?? c;

export type Block = { h?: string; p?: string; list?: string[] };

export type Article = {
  category: Category;
  slug: string;
  date: string; // ISO
  title: string;
  tags: string[];
  cover: string;
  lead: string;
  quote: string;
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    category: "news",
    slug: "drip-cash-opens-its-streaming-rails-on-robinhood-chain",
    date: "2026-09-24",
    title: "Drip Cash opens its streaming rails on Robinhood Chain",
    tags: ["Launch", "Robinhood Chain", "Streams"],
    cover: "/art/cover-01.webp",
    lead:
      "Drip Cash is live on Robinhood Chain as a home for money that moves continuously. Wallets can connect today, and the first streams, escrows and payouts open at token launch.",
    quote: "Payday is a batch job from the fax era. We would rather let money flow the moment value is delivered.",
    body: [
      { p: "Most people still get paid in lumps: at the end of a month, at the end of a milestone, or at the end of an argument about an invoice. Drip Cash turns that lump into a stream. A payer sets a rate, a start and an end, and the balance moves to the receiver second by second on Robinhood Chain." },
      { h: "What is live today", p: "The site reads Robinhood Chain directly: connected wallets see their live ETH balance, the current block and the network state. Wallets that point at another network are offered a one-click switch, or an add when the chain is new to them." },
      { h: "What opens at launch", list: ["Rate-based streams that anyone can top up, pause or close.", "Escrows that release only when both sides confirm.", "Payout batches that split one deposit across many receivers.", "The $DRIPCASH contract address, published in the navbar and footer."] },
      { h: "Why Robinhood Chain", p: "Streams need blocks that are cheap and quick enough that settling every few seconds is sensible. Robinhood Chain gives us both, plus an ecosystem of wallets that already speak EVM." },
    ],
  },
  {
    category: "news",
    slug: "wallet-connect-now-live-on-dripcash-xyz",
    date: "2026-09-18",
    title: "Wallet connect is now live on dripcash.xyz",
    tags: ["Product", "Wallets"],
    cover: "/art/cover-02.webp",
    lead:
      "Connect is the first door we opened. It finds every wallet installed in your browser, asks for one account, and moves you onto Robinhood Chain without a copy-pasted RPC in sight.",
    quote: "Connecting should feel like tapping a card, not configuring a router.",
    body: [
      { p: "Drip Cash discovers wallets through the multi-wallet discovery standard, so MetaMask, Rabby and friends can live side by side without fighting over one global object. Pick one, approve the account, and the network switch follows." },
      { h: "Quietly remembered", p: "When you come back, the site checks with your wallet that it still shares the same account before showing it. Lock the wallet, revoke access or switch accounts and the page follows along." },
      { h: "Nothing to sign yet", p: "Connecting shares an address and nothing else. There are no signatures to approve and no transactions to send until streams open at launch." },
    ],
  },
  {
    category: "news",
    slug: "dripscript-draft-published",
    date: "2026-08-29",
    title: "The first DripScript draft is published",
    tags: ["DripScript", "Rules"],
    cover: "/art/cover-03.webp",
    lead:
      "DripScript is the small, readable language behind every stream: who gets paid, how fast, and what has to be true before money moves. Today we are sharing the first draft of the grammar.",
    quote: "If a rule moves money, a person should be able to read it out loud.",
    body: [
      { p: "Every payment has conditions hiding in it. A freelancer is paid while a milestone is open. A contributor is paid while their pull request is merged. A seller is paid when the parcel lands. DripScript writes those conditions down as short sentences that compile to on-chain checks." },
      { h: "Three building blocks", list: ["Rates: how much moves per second, hour or block.", "Gates: what must be true before the stream starts or keeps running.", "Splits: where each drop lands when there is more than one receiver."] },
      { h: "Feedback welcome", p: "The draft is intentionally small. Tell us which payouts you cannot express yet, and we will shape the next revision around them." },
    ],
  },
  {
    category: "perspectives",
    slug: "why-payday-should-be-every-second",
    date: "2026-09-22",
    title: "Why payday should be every second",
    tags: ["Streams", "Creators", "Cash flow"],
    cover: "/art/cover-04.webp",
    lead:
      "Waiting thirty days to be paid for work you finished today is a loan you never agreed to give. Streaming pay closes that gap and changes who carries the risk.",
    quote: "A stream is a promise you can watch being kept.",
    body: [
      { p: "Net-30 terms quietly move working capital from the people doing the work to the people buying it. Small studios, freelancers and creators feel it most: rent is due on the first, but the invoice clears on the thirty-first." },
      { h: "Risk becomes visible", p: "With a stream, both sides can see exactly how much has been earned and paid at any moment. If a project stops, the stream stops, and nobody has to chase a half-finished invoice." },
      { h: "Cash flow without credit", p: "Because money arrives continuously, a receiver can spend what they earned this morning without borrowing against it. The payer keeps control too: unspent funds stay theirs until the rate moves them." },
      { h: "Where it fits first", list: ["Retainers and ongoing contracts.", "Creator sponsorships paid while a campaign runs.", "Contributor rewards that follow real activity."] },
    ],
  },
  {
    category: "perspectives",
    slug: "escrow-without-the-middleman",
    date: "2026-09-10",
    title: "Escrow without the middleman: both sides settle, or neither does",
    tags: ["Escrow", "Marketplaces"],
    cover: "/art/cover-05.webp",
    lead:
      "Marketplaces spend enormous effort holding money in the middle. A synchronised release lets the chain hold it instead, and lets both sides leave with what they were promised.",
    quote: "The best escrow agent is one that cannot change its mind.",
    body: [
      { p: "Classic escrow asks a third party to hold funds, check conditions and then release. It works, but it is slow, costly and opaque to the people whose money is waiting." },
      { h: "Two legs, one outcome", p: "In a Drip Cash escrow, the payment and the proof sit in the same contract. When the buyer confirms, or a deadline passes with no dispute, both legs complete in one transaction. If a condition fails, everything rolls back to where it started." },
      { h: "Disputes stay rare", p: "Because the rules are published before any money moves, fewer situations are left open to interpretation. When a dispute does happen, both sides are looking at the same record." },
    ],
  },
  {
    category: "perspectives",
    slug: "treasury-that-sweeps-itself",
    date: "2026-08-19",
    title: "A treasury that sweeps itself",
    tags: ["Treasury", "Businesses", "Automation"],
    cover: "/art/cover-06.webp",
    lead:
      "Most small teams run treasury on a spreadsheet and a calendar reminder. Rules that move surplus automatically can do the boring part better.",
    quote: "Idle balances are a decision nobody meant to make.",
    body: [
      { p: "A business receiving many small payments ends up with money scattered across wallets: some to pay suppliers, some for tax, some that should simply be saved. Moving it by hand is error-prone and always late." },
      { h: "Sweeps as rules", p: "With DripScript, a sweep is a short rule: keep a floor in the operating wallet, send a share of every receipt to a tax reserve, and move the remainder to savings every Friday." },
      { h: "Everyone can audit it", p: "Because the rules live on chain, an accountant or co-founder can read exactly what will happen before it happens, and check afterwards that it did." },
    ],
  },
  {
    category: "perspectives",
    slug: "splits-for-teams-that-ship-together",
    date: "2026-07-30",
    title: "Splits for teams that ship together",
    tags: ["Splits", "Communities"],
    cover: "/art/cover-07.webp",
    lead:
      "When five people build something together, one wallet usually receives the money and one person becomes the accountant. Splits make that job disappear.",
    quote: "Fair shares should not depend on who holds the treasury key.",
    body: [
      { p: "A split takes one incoming stream and fans it out to several receivers by fixed shares or by rules. Each member sees their own stream fill up the moment revenue arrives." },
      { h: "Change is a vote, not a favour", p: "Shares can be updated through an agreed process, and the history of every change stays visible. New members join by rule rather than by request." },
    ],
  },
  {
    category: "events",
    slug: "drip-cash-community-call-september",
    date: "2026-09-26",
    title: "Community call: streams, escrows and the road to launch",
    tags: ["Community", "Roadmap"],
    cover: "/art/cover-08.webp",
    lead:
      "Our monthly open call walks through what shipped, what is next, and the questions the community sent in. The recording and notes are posted on X after each call.",
    quote: "Build in public, answer in public.",
    body: [
      { p: "This month we covered wallet connect, the DripScript draft and how the first streams will be rolled out after launch." },
      { h: "Agenda", list: ["Live demo of connect and network switching.", "DripScript: rates, gates and splits.", "Launch checklist and what the contract address unlocks.", "Open questions."] },
      { h: "Join the next one", p: "Follow @dripcashxyz on X for the date and link. Everyone is welcome; no wallet needed to listen in." },
    ],
  },
  {
    category: "events",
    slug: "builders-afternoon-streaming-payments",
    date: "2026-08-14",
    title: "Builders afternoon: wiring streaming payments into your app",
    tags: ["Developers", "Workshop"],
    cover: "/art/cover-09.webp",
    lead:
      "A hands-on session for developers who want to pay users, creators or contributors by the second. Bring a laptop and a test wallet.",
    quote: "Ten lines of code should be enough to start paying someone.",
    body: [
      { p: "We walked through reading chain state from Robinhood Chain, connecting wallets with discovery, and sketching a payout flow with DripScript." },
      { h: "What you will leave with", list: ["A working connect button.", "A payout rule you can read out loud.", "A checklist for going live after launch."] },
    ],
  },
  {
    category: "use-cases",
    slug: "paying-creators-while-the-campaign-runs",
    date: "2026-09-05",
    title: "Paying creators while the campaign runs",
    tags: ["Creators", "Sponsorships"],
    cover: "/art/cover-10.webp",
    lead:
      "Sponsorship deals often pay half up front and half weeks after the campaign ends. A stream pays the creator for each day the campaign is live.",
    quote: "Creators should not have to invoice for work the world can already see.",
    body: [
      { p: "A brand deposits the campaign budget into a stream with a start date, an end date and a gate: the sponsored post must stay published. Each day it stays up, a slice of the budget moves to the creator." },
      { h: "Good for both sides", list: ["Creators are paid continuously and never chase an invoice.", "Brands pay only for the days the campaign actually runs.", "Both can see progress at any time."] },
    ],
  },
  {
    category: "use-cases",
    slug: "contractor-payroll-by-the-hour",
    date: "2026-08-08",
    title: "Contractor payroll by the hour, not by the month",
    tags: ["Payroll", "Businesses"],
    cover: "/art/cover-11.webp",
    lead:
      "Distributed teams hire contractors across time zones and currencies. Hourly streams remove the end-of-month scramble and the transfer fees that come with it.",
    quote: "The clock is already the timesheet.",
    body: [
      { p: "Each contractor gets a stream at their agreed hourly rate. The business can pause it for holidays, raise it for a promotion, or close it when a contract ends, and the contractor can withdraw whenever they like." },
      { h: "Less admin", p: "No timesheet reconciliation, no batch transfers, no currency conversion on the business side. Every payment is a public record on Robinhood Chain." },
    ],
  },
  {
    category: "research",
    slug: "state-of-streaming-payments-2026",
    date: "2026-07-15",
    title: "Report: the state of streaming payments in 2026",
    tags: ["Report", "Market"],
    cover: "/art/cover-12.webp",
    lead:
      "Our first report looks at how teams on public chains pay people today, where money waits the longest, and which payouts benefit most from moving continuously.",
    quote: "The longest wait in most payment flows is not the network. It is the calendar.",
    body: [
      { p: "We grouped payouts into five families (payroll, creator deals, marketplace escrow, contributor rewards and treasury moves) and looked at where each one loses time." },
      { h: "Key findings", list: ["Calendar delays outweigh network delays in almost every flow.", "Escrow is where disputes and support costs concentrate.", "Splits are usually handled by hand, by one trusted person."] },
      { h: "Read the full report", p: "The full report will be published alongside the launch. Follow @dripcashxyz on X to be notified." },
    ],
  },
];

export const byDate = (a: Article, b: Article) => (a.date < b.date ? 1 : -1);
export const sortedArticles = () => [...ARTICLES].sort(byDate);

export function findArticle(category: Category, slug: string) {
  return ARTICLES.find((a) => a.category === category && a.slug === slug);
}

export function articleHref(a: Pick<Article, "category" | "slug">) {
  return `/${a.category}/${a.slug}`;
}

export function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export const TOPICS = ["Streams", "Escrow", "Creators", "DripScript", "Treasury", "Robinhood Chain"];
