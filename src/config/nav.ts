export type NavLink = { label: string; href: string };
export type NavGroup = {
  label: string;
  title: string;
  blurb: string;
  links: NavLink[];
  /** Footer shows a shorter list for some groups. */
  footer?: NavLink[];
};

export const NAV: NavGroup[] = [
  {
    label: "Who we serve",
    title: "Who we serve",
    blurb:
      "Drip Cash helps creators, businesses and platforms get paid as value is delivered, not weeks later. Money moves by the second, on rules everyone can read.",
    links: [
      { label: "Creators", href: "/creators" },
      { label: "Businesses", href: "/businesses" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
  {
    label: "Solutions",
    title: "Solutions",
    blurb:
      "One stack for money that flows: stream it, hold it under conditions, release it on proof, and see every drop land on Robinhood Chain.",
    links: [
      { label: "Drip API", href: "/api-gateway" },
      { label: "Drip Cash Platform", href: "/platform" },
      { label: "Drip Net", href: "/network" },
      { label: "Drip Vaults", href: "/vaults" },
      { label: "Discover DripScript", href: "/dripscript" },
    ],
    footer: [
      { label: "Drip Cash Platform", href: "/platform" },
      { label: "Drip Net", href: "/network" },
      { label: "Drip Vaults", href: "/vaults" },
      { label: "Discover DripScript", href: "/dripscript" },
    ],
  },
  {
    label: "Insights",
    title: "Insights",
    blurb:
      "Field notes on streaming money: how teams wire payouts, what the chain makes possible, and where getting paid is heading next.",
    links: [
      { label: "Use cases", href: "/use-cases" },
      { label: "Blogs and articles", href: "/news?filter=all" },
      { label: "Reports and Media", href: "/media-centre" },
      { label: "Discover DripScript", href: "/dripscript" },
    ],
    footer: [
      { label: "Use cases", href: "/use-cases" },
      { label: "Blogs and articles", href: "/news?filter=all" },
      { label: "Reports and Media", href: "/media-centre" },
    ],
  },
  {
    label: "Company",
    title: "Company",
    blurb:
      "A small crew that thinks payday is an outdated idea. We build open, auditable payment rails and ship them in public.",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Partners", href: "/partners" },
      { label: "Associations", href: "/associations" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Get in touch",
    title: "Get in touch",
    blurb:
      "Building payouts, payroll or a marketplace on Robinhood Chain? Tell us what you are moving and we will point you to the right tools.",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Media and Press", href: "/media-centre" },
    ],
  },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Legal", href: "/legal" },
];
