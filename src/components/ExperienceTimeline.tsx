import React, { useRef, useEffect, useState } from 'react';
import { experienceData } from '../data/experienceData';

interface ExperienceItemProps {
  item: typeof experienceData[0];
  index: number;
}

const ExperienceTimelineItem: React.FC<ExperienceItemProps> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative mb-8 flex items-center w-full ${
        isEven ? 'justify-start' : 'justify-end'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        transition-all duration-700 ease-out`}
    >
      <div className={`absolute z-10 w-6 h-6 rounded-full bg-purple-500 shadow-lg border-2 border-white transform -translate-x-1/2 ${
        isEven ? 'left-1/2' : 'left-1/2'
      }`} />

      <div className={`
        w-[45%] p-6 rounded-lg shadow-xl bg-gradient-to-br from-white/90 to-purple-100/70 backdrop-blur-md
        flex flex-col gap-2 transition-all duration-300 ease-in-out
        hover:scale-[1.02] hover:shadow-2xl hover:border-purple-300 border border-purple-200
        ${isEven ? 'mr-auto text-left pr-10' : 'ml-auto text-right pl-10'}
        md:w-[48%] md:max-w-xl
        sm:w-full sm:!mx-0 sm:!px-6 sm:text-left
      `}>
        <h3 className="text-2xl font-bold text-gray-900 drop-shadow-sm font-serif">{item.company}</h3>
        <p className="text-lg text-purple-700 font-semibold">{item.title}</p>
        <p className="text-sm text-gray-500 italic mb-2">{item.year}</p>
        <p className="text-gray-700 leading-relaxed text-base">{item.description}</p>
        {item.achievements && item.achievements.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
            {item.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        )}
        {item.techStack && item.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.techStack.map((tech, idx) => (
              <span key={idx} className="bg-purple-200 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-purple-300 to-purple-700 h-full rounded-full shadow-md z-0" />
      
      {experienceData.map((item, index) => (
        <ExperienceTimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default ExperienceTimeline; 