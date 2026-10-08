import { education, skills } from "@/data/resume";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills & education">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.group} className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
            <dt className="pt-1 text-sm font-semibold text-fg">{g.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <span key={s} className="rounded-md bg-subtle px-2.5 py-1 text-sm text-fg/85">
                  {s}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-col gap-1 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold text-fg">{education.degree}</h3>
          <p className="text-sm text-muted">
            {education.school} · {education.place}
          </p>
        </div>
        <span className="text-sm tabular-nums text-faint">
          {education.start} — {education.end}
        </span>
      </div>
    </Section>
  );
}
