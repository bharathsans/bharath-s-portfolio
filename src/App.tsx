import React, { useEffect } from 'react';
import { sections } from './data/sections';
import { useBodyBgOnSection } from './hooks/useBodyBgOnSection';
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import FootprintTrail from './components/FootprintTrail';
import AudioPlayer from './components/AudioPlayer';
import LightBulbInteractive from './components/LightBulbInteractive';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  useBodyBgOnSection(sections);

  useEffect(() => {
    // Disable browser's native scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Ensure scroll to top on refresh
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);

    return () => {
      clearTimeout(timer);
      // Optionally, you might want to revert scroll restoration here if needed elsewhere.
      // if ('scrollRestoration' in history) {
      //   history.scrollRestoration = 'auto';
      // }
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans w-full overflow-x-hidden">
      <FootprintTrail />
      <Navbar sections={sections} onNavClick={scrollToSection} />
      <main className="pt-24 w-full">
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <AudioPlayer />
      <LightBulbInteractive />
    </div>
  );
}
