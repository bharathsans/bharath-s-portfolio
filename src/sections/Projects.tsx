import React from 'react';

const Projects: React.FC = () => (
  <section id="projects" className="w-full h-screen flex flex-col justify-center items-center pt-24 scroll-mt-24">
    <div className="text-center">
      <h2 className="text-5xl font-serif font-bold mb-2 text-center">Projects</h2>
      <div className="text-xl font-light mb-4 tracking-widest text-center">作晶集</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Dummy project cards */}
        <a href="#" className="bg-white/80 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-5xl">♜</div>
          <div className="font-bold text-xl mb-2">Chess Tactics Trainer</div>
          <div className="text-base mb-2">A web app for practicing chess tactics, built with React and Tailwind.</div>
          <div className="text-blue-600 underline">View Project</div>
        </a>
        <a href="#" className="bg-white/80 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-5xl">♙</div>
          <div className="font-bold text-xl mb-2">Portfolio Website</div>
          <div className="text-base mb-2">This very site! Built with React, Tailwind, and Framer Motion.</div>
          <div className="text-blue-600 underline">View Project</div>
        </a>
        <a href="#" className="bg-white/80 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-5xl">♞</div>
          <div className="font-bold text-xl mb-2">Algorithm Visualizer</div>
          <div className="text-base mb-2">Visualize algorithms and data structures interactively. Built with React and D3.</div>
          <div className="text-blue-600 underline">View Project</div>
        </a>
        <a href="#" className="bg-white/80 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-5xl">♛</div>
          <div className="font-bold text-xl mb-2">CP Contest Platform</div>
          <div className="text-base mb-2">A platform for hosting and participating in competitive programming contests.</div>
          <div className="text-blue-600 underline">View Project</div>
        </a>
      </div>
    </div>
  </section>
);

export default Projects; 