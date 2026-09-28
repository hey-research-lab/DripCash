import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NAV, LEGAL_LINKS } from "@/config/nav";
import { BRAND } from "@/config/brand";
import { CaBlock } from "@/components/CopyCa";
import { GithubIcon, XIcon } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="bg-mist pb-[calc(var(--u)*80)] pt-[calc(var(--u)*110)] text-ink max-md:pb-10 max-md:pt-14">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.2fr_1.2fr_1fr_1fr_1fr]">
          {NAV.map((group) => (
            <div key={group.label}>
              <p className="text-[calc(var(--u)*15)] font-bold uppercase max-md:text-[14px]">{group.label}</p>
              <ul className="mt-[calc(var(--u)*14)] space-y-[calc(var(--u)*6)] max-md:mt-3 max-md:space-y-2">
                {(group.footer ?? group.links).map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="text-[calc(var(--u)*14)] font-light hover:text-drip max-md:text-[14px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-[calc(var(--u)*80)] border-t border-rule pt-[calc(var(--u)*64)] max-md:mt-10 max-md:pt-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <Logo />
              <p className="mt-[calc(var(--u)*24)] text-[calc(var(--u)*10.5)] font-light max-md:text-[11px]">
                © 2026 {BRAND.name}. All rights reserved.
              </p>
            </div>

            <CaBlock />

            <div className="flex flex-col gap-[calc(var(--u)*50)] md:items-end max-md:gap-5">
              <div className="flex flex-wrap items-center gap-[calc(var(--u)*60)] max-md:gap-6">
                {LEGAL_LINKS.map((l) => (
                  <Link key={l.href} href={l.href} className="text-[calc(var(--u)*15)] font-bold hover:text-drip max-md:text-[14px]">
                    {l.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2">
                  <a href={BRAND.x} target="_blank" rel="noreferrer" aria-label="Drip Cash on X" className="grid size-[calc(var(--u)*24)] min-h-6 min-w-6 place-items-center rounded-full bg-ink text-white hover:bg-drip">
                    <XIcon className="size-3" />
                  </a>
                  {BRAND.github && (
                    <a href={BRAND.github} target="_blank" rel="noreferrer" aria-label="Drip Cash on GitHub" className="grid size-[calc(var(--u)*24)] min-h-6 min-w-6 place-items-center rounded-full bg-ink text-white hover:bg-drip">
                      <GithubIcon className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[calc(var(--u)*13)] font-light max-md:text-[13px]">{BRAND.slogan}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
