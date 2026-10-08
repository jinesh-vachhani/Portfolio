import { profile } from "@/data/resume";
import { CopyButton } from "./CopyButton";
import { EmailButton } from "./EmailButton";
import { ArrowIcon, DownloadIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons";
import { Section } from "./Section";

export function Contact({ hasResume }: { hasResume: boolean }) {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-accent/25 bg-accent-soft p-7 sm:p-10">
        <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">Let&apos;s talk about your team.</h3>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">
          I&apos;m interested in backend and full-stack roles where reliability, real-time systems and clean API
          design matter. Call or email, whichever is easier for you.
        </p>

        <div className="mt-7 divide-y divide-line rounded-xl border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-3 px-4 py-3.5">
            <PhoneIcon className="size-5 text-accent" />
            <a href={profile.phoneHref} className="text-lg font-semibold tracking-tight text-fg hover:text-accent">
              {profile.phone}
            </a>
            <span className="no-print ml-auto flex gap-2">
              <a
                href={profile.phoneHref}
                className="rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-fg transition-opacity hover:opacity-90 sm:py-1"
              >
                Call
              </a>
              <CopyButton text={profile.phone} />
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 px-4 py-3.5">
            <MailIcon className="size-5 text-accent" />
            <a href={`mailto:${profile.email}`} className="min-w-0 font-mono text-sm break-all text-fg hover:text-accent">
              {profile.email}
            </a>
            <span className="no-print ml-auto">
              <CopyButton text={profile.email} />
            </span>
          </div>
        </div>

        <div className="no-print mt-5 flex flex-wrap gap-3">
          <EmailButton
            email={profile.email}
            subject="Opportunity for Jinesh"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <MailIcon />
            Send an email
          </EmailButton>
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
