import { projects } from "@/data/resume";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="Selected projects">
      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.id} id={`p-${p.id}`} className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-fg">{p.name}</h3>
                  <p className="mt-0.5 text-[15px] text-muted">{p.kind}</p>
                </div>
                <span className="rounded-full bg-subtle px-3 py-1 text-xs font-medium text-muted">{p.org}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-accent">{p.role}</p>

              <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{p.overview}</p>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-fg/80">
                {p.scope.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <dl
              className={`grid grid-cols-2 gap-px border-y border-line bg-line ${
                p.impact.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
              }`}
            >
              {p.impact.map((m) => (
                <div key={m.label} className="bg-subtle px-5 py-4 sm:px-6">
                  <dt className="sr-only">{m.label}</dt>
                  <dd>
                    <div className="text-2xl font-semibold tracking-tight text-accent">{m.value}</div>
                    <div className="mt-0.5 text-xs leading-snug text-muted">{m.label}</div>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="p-6 sm:p-8">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-faint">Key contributions</h4>
              <ul className="mt-4 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <svg viewBox="0 0 16 16" className="mt-[5px] size-3.5 shrink-0 text-accent" aria-hidden>
                      <path d="m3 8.5 3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
