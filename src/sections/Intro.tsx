import React from 'react';

const Intro: React.FC = () => (
  <section id="intro" className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden">
    {/* Background image for blending */}
    <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
      <img 
        src="/abotme.avif" 
        alt="About Me Background"
        className="w-full h-full object-cover opacity-70 pointer-events-none"
      />
    </div>
    <div className="text-center relative z-10"> {/* Added relative z-10 to ensure content is above image */}
      <h1 className="text-6xl font-serif font-bold mb-2">Bharath S</h1>
      <div className="text-2xl font-light mb-6 tracking-widest">ジョン・ドー</div>
      <p className="mb-8 text-lg">A passionate engineer, exceptional problem solver, chess player, pianist and lover of all things zen. 
        
        Explore my work and journey below.</p>
      <a
        href="https://drive.google.com/file/d/1wbbKPerYmZsi5la23mGtTdcUHQfzX80s/view?usp=sharing"
        className="inline-block px-8 py-3 bg-black text-white rounded-full text-lg font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </div>
  </section>
);

export default Intro; 