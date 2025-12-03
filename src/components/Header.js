import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Fitness Hub</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
          <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

