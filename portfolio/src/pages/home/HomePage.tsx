import { Header } from "../../components/Header";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
