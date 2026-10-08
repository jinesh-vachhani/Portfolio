import type { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <h2 className="mb-8 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
        {title}
        <span className="h-px flex-1 bg-line" />
      </h2>
      {children}
    </section>
  );
}
