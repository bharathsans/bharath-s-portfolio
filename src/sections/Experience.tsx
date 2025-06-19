import React from 'react';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience: React.FC = () => (
  <section id="experience" className="w-full min-h-screen flex flex-col justify-center items-center py-16 scroll-mt-20 relative overflow-hidden">
    {/* Background image for blending */}
    <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
      <img 
        src="/blue-1.avif" 
        alt="Experience Background"
        className="w-full h-full object-cover opacity-20 pointer-events-none"
      />
    </div>
    <div className="text-center mb-4 w-full px-4 relative z-10"> {/* Added relative z-10 to ensure content is above image */}
      <div className="w-32 h-32 mx-auto mb-8 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-white rounded-full animate-pulse opacity-80 shadow-2xl" />
        <div className="absolute inset-2 bg-white/80 rounded-full flex items-center justify-center border-4 border-blue-300 shadow-inner animate-[wiggle_2s_ease-in-out_infinite]">
          <span className="text-5xl select-none" role="img" aria-label="compass">🧭</span>
        </div>
      </div>
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