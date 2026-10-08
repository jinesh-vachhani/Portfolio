"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard?.writeText(email).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        })
      }
      className="rounded-md border border-line bg-surface px-3 py-2 text-xs sm:py-1 font-medium text-muted transition-colors hover:border-faint hover:text-fg"
      aria-live="polite"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
