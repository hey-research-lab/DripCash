"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { NAV, type NavGroup } from "@/config/nav";
import { CopyCaPill } from "@/components/CopyCa";
import { WalletButton } from "@/components/wallet/WalletButton";
import { ArrowRight, ChevronDown, CloseIcon, MenuIcon } from "@/components/icons";

function groupIsActive(group: NavGroup, pathname: string) {
  return group.links.some((l) => {
    const path = l.href.split("?")[0];
    return path === pathname || (path !== "/" && pathname.startsWith(path + "/"));
  });
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation. Keyed on the path so it runs once per route.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenGroup(null);
    setMobileOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled || mobileOpen ? "bg-white/85 py-[calc(var(--u)*18)] shadow-[0_10px_30px_rgba(20,16,14,0.06)] backdrop-blur-md" : "bg-white py-[calc(var(--u)*52)]"
      } max-md:py-3`}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <div className="wrap relative flex items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-[calc(var(--u)*48)] lg:flex">
          {NAV.map((group, i) => {
            const active = groupIsActive(group, pathname);
            return (
              <button
                key={group.label}
                type="button"
                onMouseEnter={() => setOpenGroup(i)}
                onFocus={() => setOpenGroup(i)}
                onClick={() => setOpenGroup(openGroup === i ? null : i)}
                aria-expanded={openGroup === i}
                className={`relative py-2 text-[calc(var(--u)*16)] font-light transition-colors hover:text-ink ${
                  active || openGroup === i ? "text-ink" : "text-mute"
                }`}
              >
                {group.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-drip transition-transform duration-300 ${
                    active || openGroup === i ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center gap-[calc(var(--u)*14)] lg:flex">
          <CopyCaPill className="inline-flex" />
          <WalletButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <WalletButton />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="grid size-10 place-items-center text-ink"
          >
            {mobileOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
          </button>
        </div>

        {openGroup !== null && (
          <MegaMenu group={NAV[openGroup]} onPick={() => setOpenGroup(null)} />
        )}
      </div>

      {mobileOpen && <MobileMenu pathname={pathname} />}
    </header>
  );
}

function MegaMenu({ group, onPick }: { group: NavGroup; onPick: () => void }) {
  return (
    <div className="absolute left-[calc(var(--u)*510)] top-full z-10 hidden pt-[calc(var(--u)*6)] lg:block">
      <div className="flex w-[calc(var(--u)*660)] gap-[calc(var(--u)*24)] rounded-[0_calc(var(--u)*24)_calc(var(--u)*24)_calc(var(--u)*24)] bg-white p-[calc(var(--u)*18)] pb-[calc(var(--u)*24)] shadow-[0_20px_50px_rgba(20,16,14,0.10)]">
        <div className="w-[calc(var(--u)*200)] shrink-0">
          <p className="text-[calc(var(--u)*20)] font-bold text-deep">{group.title}</p>
          <p className="mt-[calc(var(--u)*16)] text-[calc(var(--u)*12)] leading-[1.75] text-deep">{group.blurb}</p>
        </div>
        <ul className="flex-1 pt-[calc(var(--u)*40)]">
          {group.links.map((l) => (
            <li key={l.href + l.label}>
              <Link
                href={l.href}
                onClick={onPick}
                className="group flex items-center justify-between py-[calc(var(--u)*8)] text-[calc(var(--u)*15)] font-light text-ink hover:text-drip"
              >
                {l.label}
                <ArrowRight className="size-[calc(var(--u)*18)] text-mute transition-transform group-hover:translate-x-1 group-hover:text-drip" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState<number | null>(() => {
    const i = NAV.findIndex((g) => groupIsActive(g, pathname));
    return i >= 0 ? i : null;
  });
  return (
    <div className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-ink/10 bg-white lg:hidden">
      <div className="wrap py-4">
        {NAV.map((group, i) => (
          <div key={group.label} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between py-4 text-[18px] font-bold text-ink"
              aria-expanded={open === i}
            >
              {group.label}
              <ChevronDown className={`size-5 transition-transform ${open === i ? "rotate-180 text-drip" : ""}`} />
            </button>
            {open === i && (
              <ul className="pb-4">
                {group.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="flex items-center justify-between py-2 text-[16px] font-light text-ink">
                      {l.label}
                      <ArrowRight className="size-4 text-mute" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-3 py-5">
          <CopyCaPill className="inline-flex" />
        </div>
      </div>
    </div>
  );
}
