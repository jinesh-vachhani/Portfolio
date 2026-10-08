import { experience } from "@/data/resume";
import { Section } from "./Section";

const fmt = (ym: string) =>
  new Date(`${ym}-01T00:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" });

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-12 border-l border-line pl-8">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span
              className={`absolute top-1.5 -left-[37px] size-[9px] rounded-full ring-4 ring-bg ${
                e.end ? "bg-faint" : "bg-accent"
              }`}
              aria-hidden
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold text-fg">{e.role}</h3>
                <p className="text-[15px] font-medium text-accent">{e.company}</p>
              </div>
              <span className="shrink-0 text-sm tabular-nums text-faint">
                {fmt(e.start)} — {e.end ? fmt(e.end) : <span className="font-medium text-accent">Present</span>}
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {e.points.map((p) => (
                <li key={p} className="relative pl-5 text-[15.5px] leading-relaxed text-muted">
                  <span className="absolute top-[0.7em] left-0 h-px w-2.5 bg-faint" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
