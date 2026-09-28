# Drip Cash

**Let it drip. Get paid.**

Drip Cash ($DRIPCASH) is streaming money on Robinhood Chain. Payers can pay by the second,
hold payments until both sides agree, and split income automatically. This repository is the
full Drip Cash website and wallet entry point. Anyone can read it, run it, and check how it
works.

- Site: https://dripcash.xyz
- X: https://x.com/dripcashxyz
- GitHub: https://github.com/DripCash/DripCash
- Network: Robinhood Chain (chain id 4663)

## The problem

Most people still get paid the way they did decades ago: in lumps, late, and on someone
else's schedule.

- **Work is continuous, pay is not.** Contractors, creators and shift workers earn every
  hour but wait two to six weeks for an invoice or payday to clear.
- **Every payout has a middleman.** Platforms, payment processors and banks each hold the
  money for a while and take a cut before it arrives.
- **Terms live on paper.** "Pay 30% up front, the rest on delivery", "split 60/40 with my
  co-host", "set aside tax" are agreed in chats and contracts, then enforced by hand. When
  someone forgets, nobody gets paid.
- **Nobody can see where a payment is.** "It's processing" is the only status most people
  ever get.

## The solution

Drip Cash turns payment terms into rules that run on chain, and lets money flow at the speed
of the work.

- **Streams.** A payer deposits a budget once. It is released to the receiver second by
  second, and the receiver can withdraw what they have earned at any moment.
- **Drip Vaults.** Money is held under a rule until it should move:
  - stream vaults release a budget over time;
  - escrow vaults hold a payment until both sides confirm, then settle both legs together;
  - reserve vaults set money aside, for example for tax, until it is needed.
- **DripScript.** Rates, conditions, limits and splits are written as short, readable rules
  instead of buried in contract code.
- **Drip Net.** One deposit in, many streams out, each on its own rule. Batch payouts split a
  single deposit across hundreds of receivers in one verifiable transaction.
- **Drip API.** Platforms can open, pause and settle streams for their own users.

Everything settles on Robinhood Chain, so both sides can check a payment's status themselves
at any time.

Who it's for: creators (sponsorships, tips, collaborator splits), businesses (payroll by the
hour, invoices, treasury sweeps), and platforms that pay many people at once.

## What you can try in this app

**Connect wallet works for real.** It finds browser wallets (MetaMask, Rabby and others),
switches to Robinhood Chain or adds it, shows your ETH balance, reconnects on the next visit
without a popup, and follows account and network changes.

**Live from Robinhood Chain:** the current block number and gas price, read through the
site's own read-only relay at `/api/rpc`.

**Pages to explore:**
- Who we serve: creators, businesses, platforms.
- Solutions: the Drip API, the platform, Drip Net, Drip Vaults, DripScript.
- Use cases: streaming payroll, invoice flows, treasury sweeps, smart wallets, tax reserves.
- Articles, media centre, company pages and legal pages.

**Coming at launch.** Opening streams and vaults, and the contact and newsletter forms, are
previews. The forms check what you type, then explain that the feature opens at launch.
Nothing is sent and no transaction is made.

## Run it locally

You need Node.js 20 or newer. Download this repository (Code, Download ZIP) or fork it, then
open a terminal in its folder:

```bash
npm install
npm run build
npm start
```

Open http://localhost:4700. During development use `npm run dev` instead of the last two
steps.

No accounts or API keys are needed. The app runs on Robinhood Chain's public RPC.

### Optional: your own RPC

If the public RPC is slow or rate limited, point the app at your own endpoint (for example
Alchemy). Create `.env.local` in the project root with one of these variables:

| Variable | Used by | Value |
| --- | --- | --- |
| `ROBINHOOD_RPC_URL` | server only | Full HTTPS RPC URL for Robinhood Chain mainnet |
| `NEXT_PUBLIC_ROBINHOOD_RPC_URL` | browser and server | Same, but also visible to the browser |

If neither is set, the app uses `https://rpc.mainnet.chain.robinhood.com`, with
`https://robinhood-rpc.publicnode.com` as a fallback.

### Robinhood Chain in your wallet

The app adds the network for you. To add it by hand:

| Field | Value |
| --- | --- |
| Network name | Robinhood Chain |
| Chain ID | 4663 |
| RPC URL | https://rpc.mainnet.chain.robinhood.com |
| Currency | ETH |
| Explorer | https://robinhoodchain.blockscout.com |

## Project layout

```
src/app/            pages and the /api/rpc read-only relay
src/components/     UI, wallet connect, contract address button, generated art
src/content/        page copy and articles
src/config/brand.ts name, links, network and token contract address
src/config/nav.ts   menus
```

Built with Next.js 16, React 19, TypeScript and Tailwind CSS v4. Wallet connect uses the
standard wallet interfaces (EIP-6963, EIP-1193) with no wallet SDK.

## Token contract

The $DRIPCASH contract address is set in one place: `const CA` in `src/config/brand.ts`.
Until it is published, the contract buttons on the site read "CA soon".
