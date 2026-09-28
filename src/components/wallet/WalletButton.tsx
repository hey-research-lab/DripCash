"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CHAIN, explorerAddress, shortAddress } from "@/config/brand";
import { useWallet } from "@/components/wallet/WalletProvider";
import { CheckIcon, CloseIcon, CopyIcon } from "@/components/icons";
import { useBlockNumber } from "@/components/LiveChain";

/** Header button: opens the wallet sheet, shows the short address once connected. */
export function WalletButton({ className = "", full = false }: { className?: string; full?: boolean }) {
  const { address, onRobinhoodChain } = useWallet();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`btn btn-sm ${full ? "w-full" : ""} ${className}`}
      >
        {address ? (
          <>
            <span className={`size-2 rounded-full ${onRobinhoodChain ? "bg-emerald-500" : "bg-amber-500"}`} />
            <span className="font-mono">{shortAddress(address, 5, 4)}</span>
          </>
        ) : (
          "Connect wallet"
        )}
      </button>
      {open && <WalletSheet onClose={() => setOpen(false)} />}
    </>
  );
}

function WalletSheet({ onClose }: { onClose: () => void }) {
  const wallet = useWallet();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);
  // Portalled to <body>: the sticky header uses backdrop-filter, which would
  // otherwise trap this fixed overlay inside the header box.
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-deep/50 p-4" onMouseDown={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Wallet"
        onMouseDown={(e) => e.stopPropagation()}
        className="corner-lg relative w-full max-w-[440px] bg-white p-7 text-ink shadow-2xl max-md:p-5"
      >
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-5 top-5 text-mute hover:text-ink">
          <CloseIcon className="size-6" />
        </button>
        {wallet.address ? <Connected /> : <Picker onDone={() => undefined} />}
        {wallet.error && (
          <p className="mt-4 rounded-md bg-peach/60 px-3 py-2 text-[14px] text-deep" role="alert">
            {wallet.error}{" "}
            <button type="button" onClick={wallet.clearError} className="font-bold underline">
              Dismiss
            </button>
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}

function Picker({ onDone }: { onDone: () => void }) {
  const { wallets, connect, connecting } = useWallet();
  return (
    <div>
      <p className="text-[22px] font-bold">Connect a wallet</p>
      <p className="mt-2 text-[15px] leading-relaxed">
        Drip Cash runs on {CHAIN.name}. Pick a browser wallet; we will ask it to switch to (or add) the network.
      </p>
      <ul className="mt-5 space-y-2">
        {wallets.map((w) => (
          <li key={w.rdns}>
            <button
              type="button"
              disabled={connecting || Boolean(w.unsupported)}
              onClick={async () => {
                if (await connect(w)) onDone();
              }}
              className="flex w-full items-center gap-3 border border-ink/15 px-4 py-3 text-left text-[16px] font-medium transition-colors hover:border-drip disabled:cursor-not-allowed disabled:opacity-50"
            >
              {w.icon ? <img src={w.icon} alt="" className="size-7 rounded-md" /> : <span className="size-7 rounded-md bg-mist" />}
              <span className="flex-1">{w.name}</span>
              <span className="text-[13px] text-mute">{w.unsupported ? "Not supported" : connecting ? "Waiting…" : "Connect"}</span>
            </button>
          </li>
        ))}
      </ul>
      {wallets.length === 0 && (
        <div className="mt-5 bg-mist px-4 py-4 text-[15px] leading-relaxed">
          No browser wallet found. Install MetaMask, Rabby or another EVM wallet, then reload this page.
        </div>
      )}
    </div>
  );
}

function Connected() {
  const { address, walletName, balance, onRobinhoodChain, switchNetwork, switching, disconnect } = useWallet();
  const block = useBlockNumber();
  const [copied, setCopied] = useState(false);
  if (!address) return null;
  return (
    <div>
      <p className="text-[13px] font-bold uppercase text-drip">{walletName ?? "Wallet"} connected</p>
      <div className="mt-2 flex items-center gap-2">
        <a href={explorerAddress(address)} target="_blank" rel="noreferrer" className="font-mono text-[20px] font-medium hover:text-drip">
          {shortAddress(address, 8, 6)}
        </a>
        <button
          type="button"
          aria-label="Copy address"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(address);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1400);
            } catch {}
          }}
          className="grid size-8 place-items-center rounded-full bg-mist hover:bg-peach"
        >
          {copied ? <CheckIcon className="size-4 text-drip" /> : <CopyIcon className="size-4" />}
        </button>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-3 text-[14px]">
        <div className="bg-mist p-3">
          <dt className="text-mute">Balance</dt>
          <dd className="mt-1 text-[18px] font-bold">{balance === null ? "…" : `${balance} ${CHAIN.nativeSymbol}`}</dd>
        </div>
        <div className="bg-mist p-3">
          <dt className="text-mute">Network</dt>
          <dd className={`mt-1 text-[16px] font-bold ${onRobinhoodChain ? "text-emerald-600" : "text-amber-600"}`}>
            {onRobinhoodChain ? CHAIN.name : "Wrong network"}
          </dd>
        </div>
      </dl>
      <p className="mt-3 text-[13px] text-mute">
        {block ? `${CHAIN.name} block #${block.toLocaleString("en-US")}` : `Reading ${CHAIN.name}…`}
      </p>
      {!onRobinhoodChain && (
        <button type="button" onClick={switchNetwork} disabled={switching} className="btn mt-4 w-full">
          {switching ? "Check your wallet…" : `Switch to ${CHAIN.name}`}
        </button>
      )}
      <div className="mt-5 border-l-2 border-drip pl-3 text-[14px] leading-relaxed">
        Streams, escrows and payouts open at launch. Your wallet stays connected, so you will be ready the moment they do.
      </div>
      <button type="button" onClick={disconnect} className="mt-5 text-[14px] font-bold text-ink underline underline-offset-4 hover:text-drip">
        Disconnect
      </button>
    </div>
  );
}
