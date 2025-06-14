import React, { useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the project and its key features.',
    tags: [
      { label: 'React', color: 'bg-blue-100 text-blue-800' },
      { label: 'Node.js', color: 'bg-green-100 text-green-800' },
    ],
  },
  {
    title: 'Project Two',
    description: 'Another amazing project with its unique features and technologies.',
    tags: [
      { label: 'TypeScript', color: 'bg-purple-100 text-purple-800' },
      { label: 'MongoDB', color: 'bg-yellow-100 text-yellow-800' },
    ],
  },
  {
    title: 'Achievement: Hackathon Winner',
    description: 'Won 1st place at the National Hackathon for building a real-time collaboration tool.',
    tags: [
      { label: 'Award', color: 'bg-yellow-200 text-yellow-900' },
      { label: 'Collaboration', color: 'bg-blue-50 text-blue-700' },
    ],
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to several open source projects, including a popular React library.',
    tags: [
      { label: 'Open Source', color: 'bg-green-100 text-green-800' },
      { label: 'React', color: 'bg-blue-100 text-blue-800' },
    ],
  },
  {
    title: 'Chess AI Bot',
    description: 'Developed a chess AI bot that plays at an advanced level and explains its moves.',
    tags: [
      { label: 'AI', color: 'bg-purple-100 text-purple-800' },
      { label: 'Chess', color: 'bg-gray-200 text-gray-800' },
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
    if (next < maxDrag) next = maxDrag;
    animate(x, next, { type: 'spring', stiffness: 300, damping: 30 });
  };

  // Move the board left (i.e., x more positive) by one card
  const handleLeftArrowClick = () => {
    let current = x.get();
    let next = current + SCROLL_AMOUNT;
    if (next > 0) next = 0;
    animate(x, next, { type: 'spring', stiffness: 300, damping: 30 });
  };

  return (
    <section id="works-highlights" className="w-full h-screen flex flex-col justify-center items-center pt-48 pb-16 scroll-mt-48">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-serif font-bold mb-2">Works & Highlights</h2>
        <div className="text-xl font-light mb-4 tracking-widest">注目作品</div>
        <p className="mb-8 text-lg">Here are some of my recent works and proudest achievements</p>
      </div>
      <div className="w-full max-w-6xl px-2">
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