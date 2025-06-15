import React, { useEffect } from 'react';
import { sections } from './data/sections';
import { useBodyBgOnSection } from './hooks/useBodyBgOnSection';
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  useBodyBgOnSection(sections);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen font-sans w-full overflow-x-hidden">
      <Navbar sections={sections} onNavClick={scrollToSection} />
      <main className="pt-24 w-full">
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
