import { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  label: string;
  bg: string;
  backgroundImage?: string; // Optional background image
}

export const useActiveSection = (sections: Section[]) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '-50% 0px -50% 0px', // Trigger when 50% of the section is in view
        threshold: 0, // No threshold needed with rootMargin
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [sections]);

  return activeSectionId;
}; 