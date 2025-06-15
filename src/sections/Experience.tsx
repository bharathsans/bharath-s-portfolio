import React from 'react';

const Experience: React.FC = () => (
  <section id="experience" className="w-full h-screen flex flex-col justify-center items-center -mt-16">
    <div className="w-full flex flex-col items-center">
      <h2 className="text-5xl font-serif font-bold mb-2 text-center">Experience</h2>
      <div className="text-xl font-light mb-4 tracking-widest text-center">経験</div>
    </div>
    <div className="text-left w-full px-8 max-w-4xl">
      <ul className="list-disc ml-6 space-y-4 text-lg">
        <li>
          <span className="font-semibold">Hitachi</span> — Backend Engineer<br />
          <span className="text-base">Specialized in backend development, platform optimization, and cloud migrations within the SAP ecosystem. Led initiatives to reduce build times, migrate Java legacy services to the cloud, and build developer tools.</span>
        </li>
        <li>
          <span className="font-semibold">Myntra</span> — Build & Release Engineering<br />
          <span className="text-base">Developed key services for build and release, including a Central Configuration Management System that accelerated deployment cycles.</span>
        </li>
        <li>
          <span className="font-semibold">Competitive Programming</span><br />
          <span className="text-base">Authored algorithmic challenges for GeeksforGeeks and Hackerrank. ICPC Regionals participant. Multiple inter-college CP contest wins. Top 1% in several contests.</span>
        </li>
        <li>
          <span className="font-semibold">Skills</span>: Java, C++, Golang, React, Spring Boot, Microservices, CI/CD, Cloud Platforms
        </li>
      </ul>
    </div>
  </section>
);

export default Experience; 