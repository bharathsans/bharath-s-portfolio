import React, { useState } from 'react';

interface Section {
  id: string;
  label: string;
}

interface NavbarProps {
  sections: Section[];
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavClick(id);
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 flex items-center md:justify-center">
        {/* Desktop Navigation - Centered for desktop */}
        <div className="hidden md:flex justify-center items-center gap-12 flex-grow">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="text-xl font-extrabold font-serif text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Icon - Aligned to right on mobile */}
        <div className="md:hidden flex justify-end w-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 hover:text-blue-700 focus:outline-none focus:text-blue-700"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className="text-3xl font-bold font-serif text-gray-900 hover:text-blue-700 transition-colors duration-200"
            >
              {section.label}
            </button>
          ))}
          {/* Close button for mobile menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-900 hover:text-blue-700 focus:outline-none focus:text-blue-700"
            aria-label="Close navigation"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" // X icon
              ></path>
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 