import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "writing"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-slate-900">
      {/* Spotlight effect */}
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.1) 40%, transparent 80%)`,
        }}
      />

      {/* Animated gradient orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-float" />
      <div
        className="fixed bottom-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header activeSection={activeSection} />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
