import { Hero } from "@/components/ui/hero";
import { About } from "@/components/ui/about";
import { Experience } from "@/components/ui/experience";
import { Skills } from "@/components/ui/skills";
import { Projects } from "@/components/ui/projects";
import { Education } from "@/components/ui/education";
import { Contact } from "@/components/ui/contact";
import { Navigation } from "@/components/ui/navigation";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
