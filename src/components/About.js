import React from 'react';
import './About.css';
import aboutImage from '../assets/1.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image-section">
          <div className="chevron-arrows">
            <div className="chevron chevron-1"></div>
            <div className="chevron chevron-2"></div>
            <div className="chevron chevron-3"></div>
          </div>
          <div className="image-frame">
            <img src={aboutImage} alt="Fitness equipment" className="about-image" />
          </div>
        </div>
        <div className="about-content">
          <h2 className="about-title">
          <i>Turn Pain Into Power.</i>
          </h2>
          <p className="about-description">
          <b>Fitness Hub</b> is a modern fitness destination where strength, discipline, and transformation come together. We believe fitness is more than just lifting weights—it’s a lifestyle built on dedication, passion, and growth. Our mission is to empower individuals to become the strongest version of themselves, both physically and mentally. Whether you are a beginner starting your journey or an athlete striving for peak performance, Fitness Hub offers expert trainers, progressive training programs, high-quality equipment, and a supportive community to help you reach your goals. We aim to inspire healthier living through science-based fitness, personalized coaching, and a motivating environment that pushes you forward. From strength training, weight-loss programs, cross-training, and HIIT sessions to yoga, Zumba, flexibility classes, and personal training—we provide a complete fitness experience designed for every individual. With certified trainers, affordable plans, progress tracking, and a friendly atmosphere, Fitness Hub is where you don’t just work out — you evolve. Join us and discover a place where your transformation truly begins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

