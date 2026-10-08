import { profile } from "@/data/resume";
import { EmailButton } from "./EmailButton";
import { DownloadIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import { SectionNav } from "./SectionNav";

export function Sidebar({ hasResume }: { hasResume: boolean }) {
  return (
    <header className="print-static flex flex-col gap-10 pt-12 pb-6 lg:sticky lg:top-0 lg:h-screen lg:py-14">
      <div>
        <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-accent text-lg font-semibold tracking-wide text-accent-fg">
          {profile.initials}
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-[2.6rem]">{profile.name}</h1>
        <p className="mt-2 text-lg text-fg/90">{profile.title}</p>
        <p className="mt-1 text-sm text-muted">{profile.specialty}</p>

        <div className="mt-6 flex flex-col gap-1.5">
          <a
            href={profile.phoneHref}
            className="inline-flex w-fit items-center gap-2.5 text-xl font-semibold tracking-tight text-fg transition-colors hover:text-accent"
          >
            <PhoneIcon className="size-5 text-accent" />
            {profile.phone}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-fit items-center gap-2.5 text-[15px] break-all text-muted transition-colors hover:text-accent"
          >
            <MailIcon className="size-5 text-accent" />
            {profile.email}
          </a>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 text-sm">
          {profile.available && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-medium text-accent">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>
          )}
          <span className="inline-flex items-center gap-2 text-muted">
            <PinIcon className="size-4 text-faint" />
            {profile.location}
          </span>
        </div>

        <div className="no-print mt-8 flex flex-wrap gap-2.5">
          <EmailButton
            email={profile.email}
            subject="Opportunity for Jinesh"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <MailIcon />
            Email me
          </EmailButton>
          {hasResume && (
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:border-faint"
            >
              <DownloadIcon />
              Resume
            </a>
          )}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-faint"
          >
            <LinkedInIcon />
            <span className="lg:sr-only xl:not-sr-only">LinkedIn</span>
          </a>
        </div>
      </div>

      <SectionNav />
    </header>
  );
}
