export const VALUES = [
  {
    title: "Flow",
    body: "We think money should move the way work does: continuously. When something waits, we ask why, and usually find it does not have to.",
  },
  {
    title: "Ambition",
    body: "Replacing payday is a big idea. We would rather chase it carefully than settle for a slightly faster version of the old thing.",
  },
  {
    title: "Openness",
    body: "Rules that move money should be readable by everyone they affect. We publish how things work, and we ship in public.",
  },
  {
    title: "Adaptability",
    body: "When the facts change, so do we. Chains, wallets and habits evolve quickly, and we would rather adjust than defend yesterday's plan.",
  },
  {
    title: "Respect",
    body: "We value different perspectives, credit people's work, and have no tolerance for harassment or discrimination of any kind.",
  },
];

/** Roles, not people: the site shows no individuals. */
export const TEAM = [
  { role: "Protocol", focus: "Stream, escrow and vault contracts" },
  { role: "Product", focus: "Wallet flows and DripScript" },
  { role: "Payments", focus: "Payroll, invoices and payout design" },
  { role: "Security", focus: "Reviews, monitoring and disclosure" },
  { role: "Community", focus: "Calls, support and partner builds" },
  { role: "Design", focus: "Interfaces that explain money clearly" },
];

export const STANDARDS = [
  {
    name: "EIP-6963",
    title: "Multi-wallet discovery",
    body: "Wallet connect on Drip Cash uses multi-wallet discovery, so every installed wallet can announce itself and users choose which one to use. No wallet has to overwrite another to be found.",
    href: "https://eips.ethereum.org/EIPS/eip-6963",
  },
  {
    name: "EIP-1193",
    title: "Wallet provider interface",
    body: "Every request to a wallet (asking for an account, switching networks, sending a transaction) goes through the standard provider interface, so behaviour is the same across wallets.",
    href: "https://eips.ethereum.org/EIPS/eip-1193",
  },
  {
    name: "EIP-3085",
    title: "Adding a network",
    body: "When a wallet has never seen Robinhood Chain, Drip Cash offers to add it with the official chain details instead of asking people to paste RPC addresses by hand.",
    href: "https://eips.ethereum.org/EIPS/eip-3085",
  },
  {
    name: "ERC-20",
    title: "Fungible tokens",
    body: "$DRIPCASH and the assets streamed through Drip Cash follow the standard token interface, so balances show up in any wallet or explorer without special support.",
    href: "https://eips.ethereum.org/EIPS/eip-20",
  },
  {
    name: "EIP-712",
    title: "Readable signatures",
    body: "When a flow needs a signature, it will use typed structured data so wallets can show people exactly what they are agreeing to, field by field.",
    href: "https://eips.ethereum.org/EIPS/eip-712",
  },
  {
    name: "Robinhood Chain",
    title: "Network home",
    body: "Drip Cash is built for Robinhood Chain (chain ID 4663). Contracts, balances and records live there, and every one can be inspected on the public explorer.",
    href: "https://robinhoodchain.blockscout.com",
  },
];
