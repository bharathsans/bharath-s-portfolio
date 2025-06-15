import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience: React.FC = () => (
  <section id="experience" className="w-full min-h-screen flex flex-col justify-center items-center py-16 scroll-mt-20">
    <div className="text-center mb-12 w-full px-4">
      <h2 className="text-5xl font-serif font-bold mb-2 text-gray-900 drop-shadow-lg">Experience</h2>
      <div className="text-xl font-light mb-4 tracking-widest text-gray-900">経験</div>
      <div className="flex justify-center my-6">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 rounded-full blur-sm opacity-70" />
      </div>
    </div>
    
    <ExperienceTimeline />
  </section>
);

export default Experience; 