import { existsSync } from "node:fs";
import path from "node:path";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/resume";

export default function Home() {
  const hasResume = existsSync(path.join(process.cwd(), "public", profile.resumePath));

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
      <Sidebar hasResume={hasResume} />
      <main className="min-w-0 lg:pt-4">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact hasResume={hasResume} />
        <footer className="border-t border-line py-8 text-sm text-faint">
          © {profile.name}
        </footer>
      </main>
    </div>
  );
}
