import React, { useState } from 'react';

const DefenceHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-defence-green rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-defence-dark">DEFENCE REALTOR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-defence-dark transition-colors">Home</a>
            <a href="#mission" className="text-gray-600 hover:text-defence-dark transition-colors">Mission</a>
            <a href="#projects" className="text-gray-600 hover:text-defence-dark transition-colors">Projects</a>
            <a href="#services" className="text-gray-600 hover:text-defence-dark transition-colors">Services and News</a>
            <a href="#team" className="text-gray-600 hover:text-defence-dark transition-colors">Team</a>
            <a href="#gallery" className="text-gray-600 hover:text-defence-dark transition-colors">Gallery</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-white border border-gray-300 text-defence-dark px-6 py-2 rounded hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-defence-dark"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-defence-dark">Home</a>
              <a href="#mission" className="block px-3 py-2 text-gray-600 hover:text-defence-dark">Mission</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-defence-dark">Projects</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-defence-dark">Services and News</a>
              <a href="#team" className="block px-3 py-2 text-gray-600 hover:text-defence-dark">Team</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:text-defence-dark">Gallery</a>
              <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-defence-dark">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default DefenceHeader;
