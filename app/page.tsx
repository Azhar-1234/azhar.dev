import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechHighlights from "@/components/TechHighlights";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Plugins from "@/components/Plugins";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-cream">
      <Nav />
      <Hero />
      <TechHighlights />
      <Skills />
      <Experience />
      <Plugins />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
