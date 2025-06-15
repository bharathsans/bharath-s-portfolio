import React from 'react';

const Intro: React.FC = () => (
  <section id="intro" className="w-full h-screen flex flex-col justify-center items-center">
    <div className="text-center">
      <h1 className="text-6xl font-serif font-bold mb-2">Bharath S</h1>
      <div className="text-2xl font-light mb-6 tracking-widest">ジョン・ドー</div>
      <p className="mb-8 text-lg">Welcome to my portfolio. I'm a passionate engineer, chess enthusiast, and lover of all things zen. Explore my work and journey below.</p>
      <a
        href="#"
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