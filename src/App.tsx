import { useEffect } from 'react';
import { sections } from './data/sections';
import { useActiveSection } from './hooks/useActiveSection';
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
  const activeSectionId = useActiveSection(sections);

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
    <div className="relative font-sans antialiased text-gray-800 bg-[#F0F0F0]">
      <Navbar sections={sections} onNavClick={scrollToSection} activeSectionId={activeSectionId} />
      <main className="w-full">
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <AudioPlayer />
      <LightBulbInteractive />
      <FootprintTrail />
    </div>
  );
}
