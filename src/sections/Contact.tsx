import React from 'react';
import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';

const MagicalSparkles = () => (
  <div className="absolute inset-0 pointer-events-none z-20">
    <div className="absolute top-6 left-10 w-2 h-2 bg-purple-300 rounded-full blur-sm animate-pulse" />
    <div className="absolute bottom-10 right-12 w-1.5 h-1.5 bg-white rounded-full blur-md animate-pulse" />
    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-200 rounded-full blur-lg animate-ping" />
    <div className="absolute bottom-8 left-1/3 w-1 h-1 bg-purple-100 rounded-full blur-sm animate-pulse" />
    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full blur-md animate-pulse" />
  </div>
);

// Neon glow animation (fade in/out) - now more subtle
const neonGlowStyle = {
  border: '4px solid #6d28d9', // Tailwind purple-800
  animation: 'neonGlow 2.5s ease-in-out infinite',
};

const Contact: React.FC = () => (
  <section id="contact" className="w-screen min-h-screen flex flex-col justify-center items-center pt-64 scroll-mt-96 overflow-x-hidden relative">
    {/* Background image for blending */}
    <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
      <img 
        src="/icemountain.avif" 
        alt="Contact Me Background"
        className="w-full h-full object-cover opacity-20 pointer-events-none"
      />
    </div>
    {/* Neon glow animation keyframes */}
    <style>{`
      @keyframes neonGlow {
        0%, 100% {
          box-shadow: 0 0 0px 0px #6d28d900, 0 0 0px 0px #6d28d900;
        }
        50% {
          box-shadow: 0 0 8px 2px #6d28d9bb, 0 0 16px 4px #6d28d988;
        }
      }
    `}</style>
    <div className="text-center mb-8 w-full px-4 relative z-10">
      <div className="w-32 h-32 mx-auto mb-8 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-200 to-white rounded-full animate-pulse opacity-80 shadow-2xl" />
        <div className="absolute inset-2 bg-white/80 rounded-full flex items-center justify-center border-4 border-purple-300 shadow-inner animate-[wiggle_2s_ease-in-out_infinite]">
          <span className="text-5xl select-none" role="img" aria-label="owl">🦉</span>
        </div>
      </div>
      <h2 className="text-5xl font-serif font-bold mb-2 tracking-tight text-gray-900 drop-shadow-lg">Contact Me</h2>
      <div className="text-xl font-light mb-4 tracking-widest text-purple-600">連絡</div>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">Send an OWL or try reaching me through faster magical means. I promise a reply as swift as a Nimbus 2000!</p>
      <div className="flex justify-center my-6">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 rounded-full blur-sm opacity-70" />
      </div>
    </div>
    <div className="flex flex-col md:flex-row gap-8 w-[90%] md:w-[80%] justify-center items-stretch relative z-10">
      {/* Message Form */}
      <div className="flex-1 relative bg-gradient-to-br from-white/90 via-purple-100/80 to-purple-200/70 rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center backdrop-blur-md overflow-hidden" style={neonGlowStyle}>
        <MagicalSparkles />
        <form className="flex flex-col gap-5 items-center w-full z-20 relative">
          <input type="text" placeholder="Your Name (Muggle or Wizard)" className="px-5 py-3 rounded-lg border border-purple-200 bg-white/80 text-gray-900 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 w-full text-lg placeholder-purple-400 shadow-inner focus:shadow-purple-300/30" />
          <input type="email" placeholder="Your (Email)" className="px-5 py-3 rounded-lg border border-purple-200 bg-white/80 text-gray-900 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 w-full text-lg placeholder-purple-400 shadow-inner focus:shadow-purple-300/30" />
          <textarea placeholder="Your Message" className="px-5 py-3 rounded-lg border border-purple-200 bg-white/80 text-gray-900 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 w-full h-28 text-lg placeholder-purple-400 shadow-inner focus:shadow-purple-300/30" />
          <button type="submit" className="px-10 py-3 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 text-white rounded-full font-semibold text-lg shadow-lg hover:from-purple-500 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mt-2 focus:ring-2 focus:ring-purple-300 focus:shadow-purple-300/40 hover:shadow-purple-400/40">
            <span>Send OWL</span>
            <span className="text-2xl">🦉</span>
          </button>
        </form>
      </div>
      {/* Magical Means */}
      <div className="flex-1 relative bg-gradient-to-br from-white/90 via-purple-100/80 to-purple-200/70 rounded-2xl shadow-xl p-10 flex flex-col justify-center items-center gap-7 backdrop-blur-md overflow-hidden" style={neonGlowStyle}>
        <MagicalSparkles />
        <div className="text-xl font-semibold mb-2 text-purple-700 tracking-tight font-serif drop-shadow">Faster Magical Means</div>
        <a href="mailto:sanbharath99@gmail.com" className="flex items-center gap-3 text-lg text-gray-800 hover:text-purple-700 transition-colors font-medium">
          <FiMail className="text-2xl text-purple-500 drop-shadow" />
          <span className="break-all">sanbharath99@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/bharath-san/" target="_blank" className="flex items-center gap-3 text-lg text-gray-800 hover:text-purple-700 transition-colors font-medium">
          <FiLinkedin className="text-2xl text-purple-500 drop-shadow" />
          <span>LinkedIn</span>
        </a>
        <a href="tel:" className="flex items-center gap-3 text-lg text-gray-800 hover:text-purple-700 transition-colors font-medium">
          <FiPhone className="text-2xl text-purple-500 drop-shadow" />
          <span>9894074855</span>
        </a>
      </div>
    </div>
    <div className="mt-16 mb-16 text-center w-full relative z-10">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 rounded-full blur-sm opacity-70" />
      </div>
      <blockquote className="italic text-purple-600 text-lg mb-4 max-w-xl mx-auto">“Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.”</blockquote>
      <p className="text-lg font-medium text-gray-800 tracking-wide">
        Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="font-bold">Bharath</span>
      </p>
    </div>
  </section>
);

export default Contact;

// Tailwind custom animation for owl wiggle
// Add to your tailwind.config.js:
// theme: { extend: { keyframes: { wiggle: { '0%, 100%': { transform: 'rotate(-6deg)' }, '50%': { transform: 'rotate(6deg)' } } }, animation: { wiggle: 'wiggle 2s ease-in-out infinite' } } } 