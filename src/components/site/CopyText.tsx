"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";

export function CopyText({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1400);
        } catch {}
      }}
      className="flex items-center gap-2 text-[15px] font-bold text-ink hover:text-drip"
    >
      {copied ? <CheckIcon className="size-5 text-drip" /> : <CopyIcon className="size-5" />}
      {copied ? "Copied" : label}
    </button>
  );
}
