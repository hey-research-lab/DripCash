"use client";

import { useState } from "react";
import { BRAND, TOKEN, explorerToken, shortAddress } from "@/config/brand";
import { CheckIcon, CopyIcon, GithubIcon, XIcon } from "@/components/icons";

/** Copies the contract address. Before launch it stays calm and disabled. */
function useCopyCa() {
  const [copied, setCopied] = useState(false);
  const live = TOKEN.isLive;
  const copy = async () => {
    if (!live) return;
    try {
      await navigator.clipboard.writeText(BRAND.ca);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked; the address stays visible to select by hand.
    }
  };
  return { live, copied, copy };
}

/** Compact pill for the navbar and the mobile menu. */
export function CopyCaPill({ className = "" }: { className?: string }) {
  const { live, copied, copy } = useCopyCa();
  return (
    <button
      type="button"
      onClick={copy}
      disabled={!live}
      title={live ? `Copy ${BRAND.symbol} contract address` : `${BRAND.symbol} contract is published at launch`}
      aria-label={live ? "Copy contract address" : "Contract address published at launch"}
      className={`items-center gap-[calc(var(--u)*8)] rounded-full border border-ink/15 bg-white/70 px-[calc(var(--u)*14)] py-[calc(var(--u)*7)] text-[calc(var(--u)*14)] font-medium text-ink transition-colors hover:border-drip disabled:cursor-default disabled:hover:border-ink/15 max-md:px-3 max-md:py-2 max-md:text-[13px] ${className}`}
    >
      <span className="font-bold text-drip">CA</span>
      <span className="font-mono tracking-tight">{live ? shortAddress(BRAND.ca, 5, 4) : "soon"}</span>
      {live &&
        (copied ? (
          <CheckIcon className="size-[calc(var(--u)*15)] min-h-3.5 min-w-3.5 text-drip" />
        ) : (
          <CopyIcon className="size-[calc(var(--u)*15)] min-h-3.5 min-w-3.5" />
        ))}
    </button>
  );
}

/** Token block for the footer, shown at every screen size. */
export function CaBlock() {
  const { live, copied, copy } = useCopyCa();
  return (
    <div className="w-full max-w-[400px]">
      <p className="text-[calc(var(--u)*15)] font-bold uppercase text-ink max-md:text-[14px]">{BRAND.symbol} contract</p>
      <div className="corner mt-[calc(var(--u)*14)] flex items-center gap-2 border-2 border-drip-line bg-white p-1.5 pl-4">
        <span className="min-w-0 flex-1 truncate font-mono text-[13px] text-ink">
          {live ? shortAddress(BRAND.ca, 10, 8) : "Published at launch"}
        </span>
        <button
          type="button"
          onClick={copy}
          disabled={!live}
          aria-label="Copy contract address"
          className="grid size-9 shrink-0 place-items-center rounded-full bg-mist text-ink transition-colors hover:bg-peach disabled:opacity-40 disabled:hover:bg-mist"
        >
          {copied ? <CheckIcon className="size-4 text-drip" /> : <CopyIcon className="size-4" />}
        </button>
      </div>
      <p className="mt-2 text-[12px] text-mute">{live ? "Robinhood Chain · tap to copy" : "Robinhood Chain · the address appears here on launch day"}</p>
      <div className="mt-3 flex items-center gap-4 text-[14px] text-ink">
        {live && (
          <a href={explorerToken(BRAND.ca)} target="_blank" rel="noreferrer" className="hover:text-drip">
            Explorer
          </a>
        )}
        <a href={BRAND.x} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-drip">
          <XIcon className="size-4" /> {BRAND.xHandle}
        </a>
        {BRAND.github && (
          <a href={BRAND.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-drip">
            <GithubIcon className="size-4" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}
