import React from 'react';

interface Section {
  id: string;
  label: string;
}

interface NavbarProps {
  sections: Section[];
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, onNavClick }) => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center gap-8 py-6 bg-opacity-70 backdrop-blur-md">
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => onNavClick(section.id)}
        className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
      >
        {section.label}
      </button>
    ))}
  </nav>
);

export default Navbar; 