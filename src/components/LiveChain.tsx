"use client";

import { useSyncExternalStore } from "react";
import { CHAIN } from "@/config/brand";

/*
 * Live Robinhood Chain facts, read through this site's /api/rpc relay. One
 * shared poller feeds every component, so several readers cost one request.
 */

type Facts = { block: number | null; gasGwei: number | null; ok: boolean | null };

let facts: Facts = { block: null, gasGwei: null, ok: null };
const listeners = new Set<() => void>();
let timer: number | null = null;

async function poll() {
  try {
    const res = await fetch("/api/rpc", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify([
        { jsonrpc: "2.0", id: 0, method: "eth_blockNumber", params: [] },
        { jsonrpc: "2.0", id: 1, method: "eth_gasPrice", params: [] },
      ]),
      cache: "no-store",
    });
    const body = (await res.json()) as { result?: string }[];
    if (!res.ok || !Array.isArray(body)) throw new Error("rpc");
    facts = {
      block: body[0]?.result ? Number(BigInt(body[0].result)) : null,
      gasGwei: body[1]?.result ? Number(BigInt(body[1].result)) / 1e9 : null,
      ok: true,
    };
  } catch {
    facts = { ...facts, ok: false };
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timer === null) {
    poll();
    timer = window.setInterval(poll, 6000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  };
}

const EMPTY: Facts = { block: null, gasGwei: null, ok: null };

export function useChainFacts() {
  return useSyncExternalStore(subscribe, () => facts, () => EMPTY);
}

export function useBlockNumber() {
  return useChainFacts().block;
}

/** Thin strip of live chain numbers with a pulsing dot. */
export function LiveChainStrip({ className = "" }: { className?: string }) {
  const { block, gasGwei, ok } = useChainFacts();

  return (
    <div className={`flex flex-wrap items-center gap-x-[calc(var(--u)*36)] gap-y-2 text-[calc(var(--u)*15)] max-md:text-[13px] ${className}`}>
      <span className="flex items-center gap-2 font-bold uppercase text-ink">
        <span key={block ?? 0} className={`pulse-once size-2 rounded-full ${ok === false ? "bg-amber-500" : "bg-emerald-500"}`} />
        {CHAIN.name} live
      </span>
      <span>
        Block <b className="font-bold tabular-nums">{block ? `#${block.toLocaleString("en-US")}` : "…"}</b>
      </span>
      <span>
        Gas <b className="font-bold tabular-nums">{gasGwei !== null ? `${gasGwei < 0.01 ? gasGwei.toFixed(4) : gasGwei.toFixed(3)} gwei` : "…"}</b>
      </span>
      <span>
        Chain ID <b className="font-bold tabular-nums">{CHAIN.id}</b>
      </span>
      {ok === false && <span className="text-mute">Chain unreachable right now, retrying.</span>}
    </div>
  );
}
