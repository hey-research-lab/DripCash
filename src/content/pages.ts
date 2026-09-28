import type { ArtName } from "@/components/art/LineArt";
import type { Cta, CardItem } from "@/components/site/blocks";
import type { Category } from "@/content/articles";

export type Row = { title: string; body: string[]; art: ArtName; note?: string; cta?: Cta; seed?: number };

export type PageSpec = {
  slug: string;
  metaTitle: string;
  description: string;
  hero: { title: string; accent?: boolean; intro: string[]; cta: Cta; art: string };
  /** Optional centred statement right after the hero. */
  statement?: { title: string; sub?: string };
  rows: Row[];
  /** "How it works" style diagram block. */
  diagram?: { title: string; sub?: string; left: string; right: string };
  cards?: { title: string; sub?: string; intro?: string; items: CardItem[]; cols?: 2 | 3 | 4 };
  /** Two short closing statements side by side (platform page). */
  pair?: { title: string; items: { title: string; body: string }[] };
  posts?: { title?: string; sub?: string; category?: Category };
  closing: { title: string; cta: Cta; style?: "peach" | "photo" };
};

const TALK: Cta = { label: "Talk to us", href: "/contact" };
const START: Cta = "wallet";

export const PAGES: Record<string, PageSpec> = {
  creators: {
    slug: "creators",
    metaTitle: "Creators",
    description: "Streams, splits and sponsorship payouts for creators on Robinhood Chain.",
    hero: {
      title: "Creators",
      intro: [
        "Audiences grow in real time, algorithms change weekly, and sponsors still pay on thirty-day terms. The creator economy moves faster than the money behind it.",
        "Drip Cash lets creators get paid while the work is live: sponsorships by the day, memberships by the second, and collaborators paid their share the moment revenue lands.",
      ],
      cta: START,
      art: "/art/hero-creators.webp",
    },
    rows: [
      {
        title: "New income,\nsame audience.",
        body: [
          "Turn one-off deals into continuous streams. Fans can support you by the minute while you stream, brands pay for each day their placement is live, and every drop is visible on chain. Start with a single stream and add splits, gates and memberships as you grow.",
        ],
        art: "network",
      },
      {
        title: "Fees that\nwork for you.",
        body: [
          "Because payouts are programmable, pricing can follow real behaviour: a premium rate for live sessions, a lower rate for replays, a bonus when a milestone is hit. Rules run on their own, so you spend your time creating instead of invoicing.",
        ],
        art: "ripple",
        seed: 4,
      },
      {
        title: "Stay ahead\nof the feed.",
        body: [
          "No platform lock-in and no new bank account. Drip Cash works with the wallet you already have, and your streams follow you wherever your audience goes. Switch platforms, keep your income.",
        ],
        art: "store",
      },
    ],
    diagram: { title: "How it works", sub: "Streams connect a payer and a creator through one readable rule.", left: "Sponsor", right: "Creator" },
    cards: {
      title: "Streaming pay powers\nnew creator deals.",
      intro: "How creators are using Drip Cash to get paid as they go:",
      items: [
        { title: "Live sponsorships", body: "A brand funds a stream that pays for every day the sponsored content stays published. Take it down and the stream stops.", href: "/perspectives/why-payday-should-be-every-second" },
        { title: "Collaborator splits", body: "Editors, designers and co-hosts receive their share of each payment automatically, without one person playing accountant.", href: "/perspectives/splits-for-teams-that-ship-together" },
        { title: "Streaming memberships", body: "Supporters pay a small rate per second while subscribed and can stop at any moment. No chargebacks, no churn surprises.", href: "/use-cases/paying-creators-while-the-campaign-runs" },
      ],
    },
    closing: { title: "Getting paid, reinvented\nfor the creator economy.", cta: START },
  },

  businesses: {
    slug: "businesses",
    metaTitle: "Businesses",
    description: "Contractor payroll, escrowed invoices and treasury rules for businesses on Robinhood Chain.",
    hero: {
      title: "Businesses",
      intro: [
        "Drip Cash plugs into how a business already pays people. It sits next to your accounting, not instead of it, and moves money on rules your whole team can read.",
      ],
      cta: TALK,
      art: "/art/hero-businesses.webp",
    },
    rows: [
      {
        title: "Ready\nto run.",
        body: [
          "Connect a wallet, fund a stream and pay your first contractor in minutes. Templates cover payroll, retainers, escrow and sweeps, so you start from something that already works and adjust it to your terms.",
        ],
        art: "store",
        seed: 17,
      },
      {
        title: "Rules\nby design.",
        body: [
          "DripScript turns payment terms into short rules: pay this rate while the contract is open, hold 20% until delivery, sweep surplus to savings every Friday. Terms stop living in email threads and start running on their own.",
        ],
        art: "rings",
      },
      {
        title: "Open\nsettlement.",
        body: [
          "Every stream and release is a public record on Robinhood Chain. Finance can reconcile from the chain itself, auditors can verify without asking, and contractors can see exactly what they are owed.",
        ],
        art: "globe",
        seed: 12,
      },
    ],
    cards: {
      title: "Drip Cash\nworking for you.",
      sub: "How teams use streaming money to pay people and suppliers without the month-end scramble.",
      cols: 4,
      items: [
        { title: "Contractor payroll", body: "Hourly or daily streams for every contractor, paused for holidays and closed when the engagement ends.", href: "/streaming-payroll" },
        { title: "Escrowed invoices", body: "Supplier payments locked until delivery is confirmed, then released in the same transaction.", href: "/invoice-flows" },
        { title: "Treasury sweeps", body: "Floors, reserves and savings moves that run on schedule without a spreadsheet.", href: "/treasury-sweeps" },
        { title: "Tax reserves", body: "A fixed share of every receipt set aside the moment it arrives, so tax day is never a surprise.", href: "/tax-reserves" },
      ],
    },
    closing: { title: "The future of getting paid is\nprogrammable and open.", cta: TALK },
  },

  platforms: {
    slug: "platforms",
    metaTitle: "Platforms",
    description: "Marketplace payouts, revenue shares and escrow for platforms building on Robinhood Chain.",
    hero: {
      title: "Platforms",
      intro: [
        "Marketplaces, apps and communities all end up in the payments business. Holding user balances, chasing payouts and settling disputes eats time that should go into the product.",
        "Drip Cash lets platforms route money straight from payer to payee under published rules, so the platform never has to sit in the middle.",
      ],
      cta: TALK,
      art: "/art/hero-platforms.webp",
    },
    rows: [
      {
        title: "Synchronised\nreleases.",
        body: [
          "Payment and proof settle together, or not at all. Buyers know their money only moves when the order is fulfilled; sellers know it cannot be clawed back once it has.",
        ],
        art: "network",
        seed: 21,
      },
      {
        title: "Balances\nyou never hold.",
        body: [
          "Funds sit in rule-bound contracts instead of a platform wallet. That means less custody risk, fewer compliance headaches, and nothing for an attacker to drain in one place.",
        ],
        art: "ripple",
        seed: 9,
      },
      {
        title: "Audit-ready\nby default.",
        body: [
          "Every payout, fee and split is written to Robinhood Chain. Reports come from a public source of truth instead of a database only you can see.",
        ],
        art: "globe",
      },
    ],
    cards: {
      title: "Programmable payouts\nworking for you.",
      sub: "How platforms use Drip Cash to pay sellers, partners and communities.",
      cols: 4,
      items: [
        { title: "Marketplace escrow", body: "Hold the buyer's payment in a contract and release it the moment delivery is confirmed.", href: "/perspectives/escrow-without-the-middleman" },
        { title: "Revenue shares", body: "Stream each partner's share of revenue as it arrives instead of paying out once a quarter.", href: "/perspectives/splits-for-teams-that-ship-together" },
        { title: "Community rewards", body: "Pay contributors continuously while their work is live, with rules everyone can inspect.", href: "/smart-wallets" },
        { title: "Batch payouts", body: "Split one deposit across hundreds of receivers in a single, verifiable transaction.", href: "/network" },
      ],
    },
    closing: { title: "The future of platforms is\nopen and programmable.", cta: TALK },
  },

  "api-gateway": {
    slug: "api-gateway",
    metaTitle: "Drip API",
    description: "One API to create streams, escrows and payouts on Robinhood Chain.",
    hero: {
      title: "Drip API",
      intro: ["Create, fund and manage payment streams from any app with a handful of calls.", "How? With one gateway that speaks Robinhood Chain for you."],
      cta: TALK,
      art: "/art/hero-api.webp",
    },
    statement: {
      title: "For payments that flow\nbetween apps and wallets",
      sub: "The Drip API connects your product to streaming money on Robinhood Chain: wallets, contracts, balances and events behind one consistent interface. Key benefits:",
    },
    rows: [],
    cards: {
      title: "",
      cols: 3,
      items: [
        { title: "One interface", body: "Create streams, escrows and splits with the same request shape, whatever the payout." },
        { title: "Wallet-first", body: "Every transaction is signed by the user's own wallet. The API never holds a private key." },
        { title: "Rule execution", body: "Deploy DripScript rules alongside a stream and let the chain enforce them." },
        { title: "Live events", body: "Subscribe to deposits, releases and withdrawals as they land in new blocks." },
        { title: "Safe by default", body: "Read calls go through a filtered relay; only the wallet can move funds." },
        { title: "Readable records", body: "Every action links to its transaction on the public explorer." },
      ],
    },
    posts: { title: "Explore the future." },
    closing: { title: "Start building\nwith streaming money.", cta: TALK, style: "peach" },
  },

  platform: {
    slug: "platform",
    metaTitle: "Drip Cash Platform",
    description: "Stream, escrow and sweep money on Robinhood Chain from one platform.",
    hero: {
      title: "Drip Cash\nPlatform",
      accent: true,
      intro: [
        "The Drip Cash platform gives payers and receivers one place to stream, hold, release and split money, with rules built into every flow.",
        "Connect the wallet you already use. Write your terms once, and Drip Cash carries them out.",
      ],
      cta: START,
      art: "/art/hero-platform.webp",
    },
    statement: { title: "Programmable money,\nbuilt for getting paid." },
    rows: [
      {
        title: "Streaming\nPayroll.",
        body: ["Pay a rate per second, hour or day. Start, pause, top up or close a stream at any time, with every change on record."],
        art: "network",
        seed: 31,
      },
      {
        title: "Synchronised\nEscrow.",
        body: ["Lock payment and proof in one contract. Both legs complete together when conditions are met, or everything returns to where it started."],
        art: "sphere",
      },
      {
        title: "Self-driving\nTreasury.",
        body: ["Floors, reserves and sweeps as rules instead of reminders. Money moves on schedule and anyone on the team can read why."],
        art: "rings",
      },
    ],
    cards: {
      title: "One platform. Three capabilities.",
      cols: 3,
      items: [
        { title: "Programmable", body: "Turn payment terms into rules. DripScript expresses rates, gates, limits and splits as readable lines instead of burying them in code." },
        { title: "Connected", body: "Works with the wallets people already use through standard discovery. No new account, no new network to learn beyond Robinhood Chain." },
        { title: "Visible", body: "See every stream, balance and release in real time, straight from the chain, and act within the rules you set." },
      ],
    },
    pair: {
      title: "One platform for\nmoney that flows.",
      items: [
        { title: "Modular by design.", body: "Start with a single stream and add escrow, splits and sweeps as you need them, on the same contracts and the same record." },
        { title: "Built for everyone.", body: "Creators, businesses and platforms use the same primitives, sized to their own flows and under their own control." },
      ],
    },
    closing: { title: "Ready to let your\nmoney drip?", cta: START, style: "peach" },
  },

  network: {
    slug: "network",
    metaTitle: "Drip Net",
    description: "Drip Net routes streams, splits and batch payouts across wallets on Robinhood Chain.",
    hero: {
      title: "Drip Net",
      intro: [
        "Drip Net is the routing layer behind every Drip Cash payment. It fans one deposit out to many receivers, keeps splits in sync, and settles batches in a single transaction.",
        "Payers and receivers coordinate in real time, across wallets and apps, with the chain as the shared record.",
      ],
      cta: TALK,
      art: "/art/hero-network.webp",
    },
    statement: { title: "Drip Net sits at the\nheart of streaming money." },
    diagram: { title: "How Drip Net works", sub: "One deposit in, many streams out, each one on its own rule.", left: "Payer", right: "Receivers" },
    rows: [
      {
        title: "Open\nby design.",
        body: ["Any EVM wallet can send or receive. No custom bridges, no wrapped balances and no private ledger to reconcile against."],
        art: "globe",
        seed: 44,
      },
      {
        title: "Rules\nbuilt in.",
        body: ["Every route follows a published rule: shares, caps, schedules and gates. What the rule says is exactly what the chain does."],
        art: "rings",
      },
      {
        title: "Scales\nwith you.",
        body: ["Pay one person or a thousand from the same contract. Batches settle together, so costs grow slowly as receivers are added."],
        art: "network",
        seed: 52,
      },
    ],
    cards: {
      title: "Capabilities that are\nredefining payday.",
      cols: 3,
      items: [
        { title: "Batch settlement", body: "Split one deposit across many receivers in a single transaction, with each share visible on chain." },
        { title: "Programmable distributions", body: "Share revenue or rewards on a schedule, automatically, with caps and floors per receiver." },
        { title: "Lifecycle automation", body: "Start, pause and close streams on events, so payouts follow the work without manual steps." },
      ],
    },
    closing: { title: "The future of getting paid\nis flowing already.", cta: TALK },
  },

  vaults: {
    slug: "vaults",
    metaTitle: "Drip Vaults",
    description: "Drip Vaults hold funds for streams and escrows under published rules on Robinhood Chain.",
    hero: {
      title: "Drip Vaults",
      intro: [
        "Money that is on its way to someone needs a safe place to wait. Drip Vaults hold funds for streams and escrows under rules that nobody, including us, can quietly change.",
        "Payers keep control of what has not been earned yet. Receivers can see exactly what is coming.",
      ],
      cta: TALK,
      art: "/art/hero-vaults.webp",
    },
    rows: [
      {
        title: "Funds that\nwait safely.",
        body: [
          "Each vault holds only the money for its own stream or escrow. There is no shared pool, no platform balance and no single wallet that holds everyone's funds.",
        ],
        art: "ripple",
        seed: 13,
      },
      {
        title: "Control without\ncompromise.",
        body: [
          "Payers can top up, pause or close within the rules they agreed. Receivers can withdraw what they have earned at any time. Neither can take what belongs to the other.",
        ],
        art: "store",
        seed: 5,
      },
      {
        title: "Built\nto last.",
        body: [
          "Vault rules are simple on purpose: fewer moving parts, fewer surprises. Every deposit, release and withdrawal is on Robinhood Chain for anyone to verify.",
        ],
        art: "sphere",
        seed: 19,
      },
    ],
    cards: {
      title: "Making streaming money work.",
      cols: 3,
      items: [
        { title: "Stream vaults", body: "Hold a stream's budget and release it second by second to the receiver." },
        { title: "Escrow vaults", body: "Hold a payment until both sides confirm, then settle both legs together." },
        { title: "Reserve vaults", body: "Set money aside by rule, such as tax or a rainy-day floor, until it is needed." },
      ],
    },
    closing: { title: "Money that waits safely\nand moves on time.", cta: TALK },
  },

  partners: {
    slug: "partners",
    metaTitle: "Partners",
    description: "Build payouts, payroll and marketplaces with Drip Cash on Robinhood Chain.",
    hero: {
      title: "Drip Cash\nfor Partners",
      intro: [
        "Wallets, tools and agencies: your users want to be paid faster, but streaming money is new and the details matter. Build with us and bring it to them without starting from zero.",
        "Ready to partner with Drip Cash?",
      ],
      cta: TALK,
      art: "/art/hero-partners.webp",
    },
    rows: [
      {
        title: "Upgrade how your\nusers get paid.",
        body: [
          "Drip Cash is designed to slot into existing apps. Add streams, escrow or splits behind your own interface and let your users keep the wallets they already trust.",
        ],
        art: "network",
        seed: 61,
      },
      {
        title: "Unlock new\nrevenue.",
        body: [
          "Programmable payouts open new products: premium payout speeds, automated treasury for your customers, or revenue shares with your own community.",
        ],
        art: "ripple",
        seed: 22,
      },
      {
        title: "Ship new\nexperiences.",
        body: [
          "Launch faster with shared templates and direct support from the team. We share what we learn from every integration so the next one is easier.",
        ],
        art: "sphere",
        seed: 27,
      },
    ],
    cards: {
      title: "Streaming money that works\nfor you and your users.",
      sub: "How partners are building with Drip Cash.",
      cols: 3,
      items: [
        { title: "Smart payout wallets", body: "Wallets that show incoming streams live and let users route earnings by rule." },
        { title: "Programmable payroll", body: "HR and invoicing tools that pay contractors as time is logged, not at month end." },
        { title: "Community treasuries", body: "Groups that fund contributors continuously and publish every payment." },
      ],
    },
    closing: { title: "Ready to shape\nhow people get paid?", cta: TALK },
  },
};

/** Use-case pages linked from /use-cases. */
export const USE_CASES: Record<string, PageSpec> = {
  "streaming-payroll": {
    slug: "streaming-payroll",
    metaTitle: "Streaming payroll",
    description: "Pay contractors and teams by the second on Robinhood Chain.",
    hero: { title: "Streaming\npayroll", intro: ["Pay people as they work, not weeks later."], cta: { label: "Learn more", href: "/platform" }, art: "/art/hero-payroll.webp" },
    statement: {
      title: "Cut waiting, fees and admin",
      sub: "Monthly payroll made sense when moving money was slow and expensive. On Robinhood Chain it is neither. Drip Cash streams wages at an agreed rate, so contractors are paid for every hour the moment it passes and teams stop running payroll as a monthly event.",
    },
    rows: [],
    cards: {
      title: "Upgrade payroll with streaming money.",
      cols: 3,
      items: [
        { title: "Lower costs", body: "No batch transfers, no intermediary fees and no currency desks on the payer side." },
        { title: "Faster pay", body: "Earnings are withdrawable at any moment, in any time zone, on any day of the week." },
        { title: "Rules, not reminders", body: "Pause for holidays, raise a rate or close a contract with one change that everyone can see." },
      ],
    },
    closing: { title: "Welcome to payroll\nwithout payday.", cta: { label: "Find out more", href: "/platform" } },
  },
  "invoice-flows": {
    slug: "invoice-flows",
    metaTitle: "Invoice flows",
    description: "Escrowed invoices that release on delivery.",
    hero: { title: "Invoice\nflows", intro: ["Smarter cash flow for everyone who sends an invoice."], cta: { label: "Learn more", href: "/platform" }, art: "/art/hero-invoices.webp" },
    statement: {
      title: "Get paid on delivery, not on day thirty",
      sub: "An invoice is a promise that money will move later. Drip Cash moves it into an escrow the moment work is agreed, and releases it the moment delivery is confirmed. Suppliers stop chasing; buyers stop paying before they are sure.",
    },
    rows: [],
    cards: {
      title: "Better terms for both sides.",
      cols: 3,
      items: [
        { title: "Funds up front", body: "The buyer's payment is locked before work starts, so the supplier knows it exists." },
        { title: "Release on proof", body: "Confirmation, a deadline or a delivery signal releases both legs together." },
        { title: "Clean records", body: "Every invoice leaves a public trail for accounting and audits." },
      ],
    },
    closing: { title: "Invoices that\npay themselves.", cta: { label: "Find out more", href: "/platform" } },
  },
  "treasury-sweeps": {
    slug: "treasury-sweeps",
    metaTitle: "Treasury sweeps",
    description: "Real-time treasury rules for teams on Robinhood Chain.",
    hero: { title: "Treasury\nsweeps", intro: ["Real-time treasury that runs itself."], cta: { label: "Learn more", href: "/platform" }, art: "/art/hero-sweeps.webp" },
    statement: {
      title: "Keep money where it should be",
      sub: "Operating wallets drift: too much idle cash one week, not enough the next. Sweep rules keep a floor in place, move surplus to reserves, and top up when a balance runs low, all on schedule and all on record.",
    },
    rows: [],
    cards: {
      title: "Treasury on autopilot.",
      cols: 3,
      items: [
        { title: "Floors and ceilings", body: "Hold exactly what operations need and move the rest automatically." },
        { title: "Scheduled moves", body: "Weekly, daily or per-block sweeps defined once in DripScript." },
        { title: "Full visibility", body: "Every sweep is readable by the whole team before and after it runs." },
      ],
    },
    closing: { title: "Treasury that\nsweeps itself.", cta: { label: "Find out more", href: "/platform" } },
  },
  "smart-wallets": {
    slug: "smart-wallets",
    metaTitle: "Smart wallets",
    description: "Wallets that route earnings by rule.",
    hero: { title: "Smart\nwallets", intro: ["Go beyond a balance and a send button."], cta: { label: "Learn more", href: "/platform" }, art: "/art/hero-wallets.webp" },
    statement: {
      title: "Wallets that know what to do with money",
      sub: "Income rarely belongs in one place. Smart wallet rules split every incoming stream the moment it lands: a share to savings, a share to tax, a share to the people you work with, and the rest to spend.",
    },
    rows: [],
    cards: {
      title: "Earnings that sort themselves.",
      cols: 3,
      items: [
        { title: "Automatic splits", body: "Route each incoming payment by fixed shares or by rule." },
        { title: "Goals and floors", body: "Fill a savings goal first, then let the rest flow through." },
        { title: "Your keys, your rules", body: "Rules run on chain, but only your wallet can change them." },
      ],
    },
    closing: { title: "Your wallet,\nworking for you.", cta: { label: "Find out more", href: "/platform" } },
  },
  "tax-reserves": {
    slug: "tax-reserves",
    metaTitle: "Tax reserves",
    description: "Set tax aside automatically as money arrives.",
    hero: { title: "Tax\nreserves", intro: ["Make tax season less taxing with programmable money."], cta: { label: "Learn more", href: "/platform" }, art: "/art/hero-reserves.webp" },
    statement: {
      title: "Set it aside the moment it arrives",
      sub: "The hardest part of tax for independent earners is having the money when it is due. A reserve rule moves an agreed share of every receipt into a separate vault instantly, so the bill is covered before you have had a chance to spend it.",
    },
    rows: [],
    cards: {
      title: "Tax handled as you earn.",
      cols: 3,
      items: [
        { title: "Instant set-aside", body: "A fixed percentage of each payment moves to a reserve on arrival." },
        { title: "Clear records", body: "Every reserve deposit is timestamped on chain for your accountant." },
        { title: "Release when due", body: "Unlock the reserve on a date you choose, and not a day earlier." },
      ],
    },
    closing: { title: "Tax season,\nalready covered.", cta: { label: "Find out more", href: "/platform" } },
  },
};
