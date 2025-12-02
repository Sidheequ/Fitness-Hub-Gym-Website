import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '💪',
      title: 'Modern Equipment',
      description: 'State-of-the-art fitness equipment from leading brands to help you achieve your goals.'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Trainers',
      description: 'Certified personal trainers ready to guide you through your fitness journey.'
    },
    {
      icon: '🏋️',
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock access to our facilities.'
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Join a welcoming community of fitness enthusiasts who motivate and inspire.'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'Track your progress, book classes, and connect with trainers through our app.'
    },
    {
      icon: '🏆',
      title: 'Results Guaranteed',
      description: 'Proven programs and methods that deliver real, measurable results.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Fitness Hub?</h2>
        <p className="section-subtitle">Everything you need to achieve your fitness goals</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

