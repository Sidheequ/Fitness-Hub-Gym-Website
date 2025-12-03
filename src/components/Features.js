import React from 'react';
import './Features.css';
import featureImage from '../assets/features.jpg';

const Features = ({ features, onFeatureClick }) => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-background">
          <img src={featureImage} alt="Fitness" className="features-bg-image" />
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-square"
              onClick={() => onFeatureClick(feature.id)}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <span className="feature-label">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
