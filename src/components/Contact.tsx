import { profile } from "@/data/resume";
import { CopyEmail } from "./CopyEmail";
import { ArrowIcon, DownloadIcon, LinkedInIcon, MailIcon } from "./Icons";
import { Section } from "./Section";

export function Contact({ hasResume }: { hasResume: boolean }) {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-accent/25 bg-accent-soft p-7 sm:p-10">
        <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">Let&apos;s talk about your team.</h3>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">
          I&apos;m interested in backend and full-stack roles where reliability, real-time systems and clean API
          design matter. The fastest way to reach me is email.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
          <MailIcon className="size-4 text-faint" />
          <a href={`mailto:${profile.email}`} className="font-mono text-sm text-fg hover:text-accent">
            {profile.email}
          </a>
          <span className="ml-auto">
            <CopyEmail email={profile.email} />
          </span>
        </div>

        <div className="no-print mt-5 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Jinesh")}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <MailIcon />
            Send an email
          </a>
          {hasResume && (
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-faint"
            >
              <DownloadIcon />
              Download resume
            </a>
          )}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-faint"
          >
            <LinkedInIcon />
            LinkedIn
            <ArrowIcon className="size-3.5 text-faint" />
          </a>
        </div>
      </div>
    </Section>
  );
}
