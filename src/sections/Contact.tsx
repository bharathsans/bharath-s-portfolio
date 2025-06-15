import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="w-full h-screen flex flex-col justify-center items-center">
    <div className="text-center pt-32">
      <h2 className="text-5xl font-serif font-bold mb-2">Contact Me</h2>
      <div className="text-xl font-light mb-4 tracking-widest">連絡</div>
      <p className="mb-8 text-lg">Want to get in touch or chat with my AI bot? Drop a message below!</p>
      <form className="flex flex-col gap-4 items-center">
        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded-lg border border-gray-300 w-64" />
        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-lg border border-gray-300 w-64" />
        <textarea placeholder="Your Message" className="px-4 py-2 rounded-lg border border-gray-300 w-64 h-24" />
        <button type="submit" className="px-8 py-2 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-colors duration-200">Send</button>
      </form>
      {/* AI bot placeholder */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl text-white mb-2">🤖</div>
        <span className="text-base text-gray-200">AI Bot coming soon...</span>
      </div>
    </div>
  </section>
);

export default Contact; 