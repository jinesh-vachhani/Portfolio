import { glance, highlights, profile, strengths } from "@/data/resume";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="text-2xl font-medium leading-snug tracking-tight text-fg sm:text-[1.75rem]">{profile.headline}</p>

      <div className="mt-6 space-y-4 text-[16.5px] leading-relaxed text-muted">
        {profile.summary.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {glance.map((g) => (
          <div key={g.label} className="bg-surface px-5 py-4 last:sm:col-span-2">
            <dt className="text-xs font-medium uppercase tracking-wider text-faint">{g.label}</dt>
            <dd className="mt-1 text-[15px] font-medium text-fg">{g.value}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-14 mb-5 text-lg font-semibold text-fg">Impact highlights</h3>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4">
        {highlights.map((h) => (
          <li key={h.label} className="rounded-xl border border-line bg-surface p-4 sm:p-5">
            <div className="text-3xl font-semibold tracking-tight text-accent">{h.value}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{h.label}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-14 mb-5 text-lg font-semibold text-fg">What I bring to a team</h3>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {strengths.map((s, i) => (
          <li key={s.title} className="border-t-2 border-accent/70 pt-4">
            <div className="text-xs font-medium tabular-nums text-faint">0{i + 1}</div>
            <h4 className="mt-1 font-semibold text-fg">{s.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
