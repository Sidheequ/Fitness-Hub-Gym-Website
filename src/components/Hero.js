import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Body</h1>
        <h2 className="hero-subtitle">Transform Your Life</h2>
        <p className="hero-description">
          Join Fitness Hub and embark on a journey to a stronger, healthier you. 
          State-of-the-art equipment, expert trainers, and a supportive community await.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
            Get Started
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('features')}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

