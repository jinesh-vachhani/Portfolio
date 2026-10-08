"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { MailIcon } from "./Icons";

// mailto: only works when the visitor has a mail app set up. Desktops often don't, so we
// offer the web clients recruiters actually use; phones always do, so it goes first there.
export function EmailButton({
  email,
  subject = "",
  className,
  children,
}: {
  email: string;
  subject?: string;
  className: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [touch, setTouch] = useState(false);
  const [copied, setCopied] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    // pointerdown covers mouse, touch and pen alike.
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = () => {
    setTouch(window.matchMedia("(pointer: coarse)").matches);
    setOpen((o) => !o);
  };

  const to = encodeURIComponent(email);
  const su = encodeURIComponent(subject);
  const mailApp = { label: touch ? "Email app" : "Mail app", href: `mailto:${email}${subject ? `?subject=${su}` : ""}`, external: false };
  const web = [
    { label: "Gmail", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`, external: true },
    { label: "Outlook", href: `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${su}`, external: true },
  ];
  const options = touch ? [mailApp, ...web] : [...web, mailApp];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked: the address is shown in the menu, so it can still be selected by hand.
    }
  };

  const item = "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-[15px] text-fg hover:bg-subtle active:bg-subtle sm:py-2 sm:text-sm";

  return (
    <div ref={root} className="relative">
      <button type="button" onClick={toggle} aria-haspopup="menu" aria-expanded={open} className={className}>
        {children}
      </button>

      {open && (
        <>
          {/* Phones: dimmed backdrop + bottom sheet. Larger screens: a dropdown under the button. */}
          <div className="fixed inset-0 z-40 bg-black/40 sm:hidden" aria-hidden />
          <div
            role="menu"
            className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-line bg-surface p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl sm:absolute sm:inset-x-auto sm:top-full sm:bottom-auto sm:left-0 sm:mt-2 sm:w-64 sm:rounded-xl sm:p-1.5 sm:shadow-xl sm:shadow-black/10"
          >
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-line sm:hidden" aria-hidden />
            <div className="px-3 pt-1 pb-2.5 text-xs text-faint">
              Write to <span className="font-mono text-fg select-all">{email}</span>
            </div>
            {options.map((o) => (
              <a
                key={o.label}
                role="menuitem"
                href={o.href}
                target={o.external ? "_blank" : undefined}
                rel={o.external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className={item}
              >
                <MailIcon className="size-4 text-faint" />
                {o.label}
              </a>
            ))}
            <button type="button" role="menuitem" onClick={copy} className={item} aria-live="polite">
              <svg viewBox="0 0 24 24" className="size-4 text-faint" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
              {copied ? <span className="text-accent">Copied ✓</span> : "Copy address"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-1 w-full rounded-lg border border-line py-3 text-[15px] font-medium text-muted sm:hidden"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}
