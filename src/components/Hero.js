import React from 'react';
import './Hero.css';
import heroImage from '../assets/gym.png';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h4 className="hero-title">Where Strength Meets Discipline.</h4>
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Connect With Us
          </button>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="Fitness workout" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

