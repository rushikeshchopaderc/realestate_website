import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onPageChange, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePageChange = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <h2>🏠 Elite Properties</h2>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul>
              <li><button onClick={() => handlePageChange('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
              <li><button onClick={() => scrollToSection('properties')}>Properties</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
              <li><button onClick={() => handlePageChange('builder')} className={currentPage === 'builder' ? 'active' : ''}>Builder.io Demo</button></li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><button onClick={() => handlePageChange('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('properties')}>Properties</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
            <li><button onClick={() => handlePageChange('builder')} className={currentPage === 'builder' ? 'active' : ''}>Builder.io Demo</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
