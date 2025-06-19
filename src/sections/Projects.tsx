import React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const projects = [
  {
    title: 'LiGenChess',
    description: 'An open source project which acts as an AI wrapper over Lichess. Automations and advanced analytics/ training',
    tags: [
      { label: 'React', color: 'bg-blue-100 text-blue-800' },
      { label: 'Java - SpringBoot', color: 'bg-green-100 text-green-800' },
      { label: 'GenAI / RAG', color: 'bg-red-100 text-blue-800' },
      { label: 'MongoDB', color: 'bg-yellow-100 text-yellow-800' },
    ],
  },
  {
    title: 'Central Config Management',
    description: 'Devloped a service along with UI where users can perform CRUD operations on all the config files. Improved build times as config files are out of the codebase',
    tags: [
      { label: 'Golang', color: 'bg-purple-100 text-purple-800' },
      { label: 'MongoDB', color: 'bg-yellow-100 text-yellow-800' },
      { label: 'CI/CD - Docker & k8s', color: 'bg-blue-100 text-blue-800' },
    ],
  },
  {
    title: 'Best Employee Award FY23-24',
    description: 'Awarded the best employee award in my org for delivering time bound critical features and impact',
    tags: [
      { label: 'System Design', color: 'bg-purple-100 text-purple-800' },
      { label: 'Leadership', color: 'bg-yellow-100 text-yellow-800' },
    ],
  },
  {
    title: 'ICPC Regionalist - Asia West',
    description: 'Qualified for ICPC Regionals, competed at Amritapuri and IIT Kharagpur',
    tags: [
      { label: 'C++', color: 'bg-yellow-200 text-yellow-900' },
      { label: 'DSA', color: 'bg-blue-50 text-blue-700' },
    ],
  },
  {
    title: 'This portfolio website!',
    description: 'Since you are already here, please feel free to explore!',
    tags: [
      { label: 'Typrescript', color: 'bg-green-100 text-green-800' },
      { label: 'React', color: 'bg-blue-100 text-blue-800' },
      { label: 'Vite', color: 'bg-blue-100 text-blue-800' },
    ],
  },
  {
    title: 'Winners at multiple inter-college competetive programming contest',
    description: 'Constantly ranked at top 1% in most competetive coding contest in Codeforces, Leetcode, Hackerrank',
    tags: [
      { label: 'C++', color: 'bg-purple-100 text-purple-800' },
      { label: 'DSA', color: 'bg-gray-200 text-gray-800' },
    ],
  },
];

const Projects: React.FC = () => {
  const CARD_WIDTH = 400; // px
  const GAP = 32; // px
  const SCROLL_AMOUNT = CARD_WIDTH + GAP;
  const maxDrag = -((CARD_WIDTH + GAP) * (projects.length - 2));
  const x = useMotionValue(0);

  // Move the board right (i.e., x more negative) by one card
  const handleRightArrowClick = () => {
    let current = x.get();
    let next = current - SCROLL_AMOUNT;
    if (next < maxDrag) {
      next = maxDrag;
    }
    animate(x, next, { type: 'spring', stiffness: 300, damping: 30 });
  };

  // Move the board left (i.e., x more positive) by one card
  const handleLeftArrowClick = () => {
    let current = x.get();
    let next = current + SCROLL_AMOUNT;
    if (next > 0) {
      next = 0;
    }
    animate(x, next, { type: 'spring', stiffness: 300, damping: 30 });
  };

  return (
    <section id="works-highlights" className="w-full min-h-screen flex flex-col justify-center items-center pt-48 pb-16 scroll-mt-48 relative">
      {/* Background image for blending */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <img 
          src="/sea2.avif" 
          alt="Works & Highlights Background"
          className="w-full h-full object-cover opacity-20 pointer-events-none"
        />
      </div>
      <div className="text-center mb-12 relative z-10"> {/* Added relative z-10 to ensure content is above image */}
        <div className="w-32 h-32 mx-auto mb-8 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-200 to-white rounded-full animate-pulse opacity-80 shadow-2xl" />
          <div className="absolute inset-2 bg-white/80 rounded-full flex items-center justify-center border-4 border-green-300 shadow-inner animate-[wiggle_2s_ease-in-out_infinite]">
            <span className="text-5xl select-none" role="img" aria-label="trophy">🏆</span>
          </div>
        </div>
        <h2 className="text-5xl font-serif font-bold mb-2">Works & Highlights</h2>
        <div className="text-xl font-light mb-4 tracking-widest">注目作品</div>
        <p className="mb-8 text-lg">Here are some of my recent works and proudest achievements</p>
      </div>
      <div className="w-full max-w-6xl px-2 relative z-10"> {/* Also moved this div to be relative z-10 */}
        <motion.div
          className="flex gap-8 cursor-grab active:cursor-grabbing py-8"
          drag="x"
          dragConstraints={{ left: maxDrag, right: 0 }}
          style={{ x }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="min-w-[400px] max-w-[400px] rounded-2xl shadow-2xl p-8 relative border-2 border-green-800 border-dashed hover:shadow-green-300 transition-shadow duration-300 flex flex-col items-start"
              style={{ background: '#f5f5e6', backgroundImage: 'repeating-linear-gradient(135deg, #ece9d8 0px, #ece9d8 2px, transparent 2px, transparent 8px)' }}
              whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Red Pin */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 rounded-full shadow-lg border-2 border-white z-10" />
              <h3 className="text-3xl font-serif font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4 text-lg font-serif">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag.label} className={`px-3 py-1 rounded-full text-base ${tag.color}`}>{tag.label}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={handleLeftArrowClick}
            className="rounded-full bg-green-500 hover:bg-green-700 text-white p-4 shadow-lg transition-colors duration-200 animate-bounce"
            aria-label="Scroll left"
          >
            <FiArrowDown className="w-8 h-8 rotate-90" />
          </button>
          <button
            onClick={handleRightArrowClick}
            className="rounded-full bg-green-500 hover:bg-green-700 text-white p-4 shadow-lg transition-colors duration-200 animate-bounce"
            aria-label="Scroll right"
          >
            <FiArrowDown className="w-8 h-8 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 