"use client";

import { useEffect, useState } from "react";
import { sections } from "@/data/resume";

export function SectionNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    // A section is "current" once it crosses the upper third of the viewport.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="no-print hidden lg:block">
      <ul className="space-y-1">
        {sections.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={on ? "true" : undefined}
                className={`group flex items-center gap-3 py-1.5 text-sm transition-colors ${
                  on ? "font-medium text-fg" : "text-faint hover:text-fg"
                }`}
              >
                <span
                  className={`h-px transition-all ${on ? "w-10 bg-accent" : "w-5 bg-line group-hover:w-8 group-hover:bg-faint"}`}
                />
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
