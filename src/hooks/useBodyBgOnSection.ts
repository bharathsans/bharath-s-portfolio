import { useEffect } from 'react';

export function useBodyBgOnSection(
  sections: Array<{ id: string; label: string; jp: string; bg: string }>
) {
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (section.bg.startsWith('linear-gradient')) {
              document.body.style.background = section.bg;
            } else {
              document.body.style.background = section.bg;
            }
            found = true;
            break;
          }
        }
      }
      if (!found) document.body.style.background = '';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
} 