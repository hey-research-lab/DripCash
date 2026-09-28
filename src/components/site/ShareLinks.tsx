"use client";

import { useState } from "react";
import { CheckIcon, LinkIcon, XIcon } from "@/components/icons";

export function ShareLinks({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = () => {
    const url = window.location.href;
    window.open(`https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank", "noopener");
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {}
  };
  return (
    <span className="flex items-center gap-3">
      Share:
      <button type="button" onClick={share} aria-label="Share on X" className="grid size-7 place-items-center rounded-full bg-ink text-white hover:bg-drip">
        <XIcon className="size-3.5" />
      </button>
      <button type="button" onClick={copy} aria-label="Copy link" className="grid size-7 place-items-center rounded-full bg-ink text-white hover:bg-drip">
        {copied ? <CheckIcon className="size-3.5" /> : <LinkIcon className="size-3.5" />}
      </button>
    </span>
  );
}
