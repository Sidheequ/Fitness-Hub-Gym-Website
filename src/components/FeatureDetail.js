import React from 'react';
import './FeatureDetail.css';

const FeatureDetail = ({ feature, onBack }) => {
  if (!feature) return null;

  const featureDetails = {
    personal: {
      title: 'Personal Training',
      description: 'Experience the ultimate in personalized fitness with our one-on-one personal training sessions. Our certified trainers work closely with you to create a customized workout plan that aligns with your specific goals, whether you want to lose weight, build muscle, improve athletic performance, or enhance overall health.',
      benefits: [
        'Customized workout plans tailored to your fitness level and goals',
        'One-on-one attention from certified personal trainers',
        'Form correction and injury prevention guidance',
        'Nutritional advice and meal planning support',
        'Progress tracking and goal setting',
        'Flexible scheduling to fit your busy lifestyle'
      ],
      pricing: 'Starting at $75 per session',
      duration: '60-minute sessions',
      image: '💪'
    },
    exclusive: {
      title: 'Exclusive Membership',
      description: 'Unlock premium access to our exclusive facilities and services. Our exclusive membership tier provides you with priority booking, access to VIP areas, complimentary services, and special member-only events. Experience fitness at its finest with our most comprehensive membership package.',
      benefits: [
        'Priority access to all facilities and equipment',
        'VIP locker rooms and lounge areas',
        'Complimentary guest passes monthly',
        'Access to exclusive member-only classes',
        'Free personal training session monthly',
        'Special discounts on merchandise and supplements',
        'Invitations to exclusive fitness events and workshops'
      ],
      pricing: 'Premium membership: $199/month',
      duration: 'Unlimited access',
      image: '⭐'
    },
    zumba: {
      title: 'Zumba Fitness Classes',
      description: 'Join the party! Zumba combines Latin and international music with dance moves to create a fun, calorie-burning fitness program. Our high-energy Zumba classes are perfect for all fitness levels and will have you dancing your way to a healthier, happier you.',
      benefits: [
        'High-energy dance fitness that feels like a party',
        'Burns up to 600-1000 calories per class',
        'Improves cardiovascular health and endurance',
        'No dance experience required - all levels welcome',
        'Great stress relief and mood booster',
        'Builds coordination and rhythm',
        'Fun, social atmosphere with music you love'
      ],
      pricing: 'Included in membership or $20 drop-in',
      duration: '60-minute classes',
      image: '💃'
    },
    yoga: {
      title: 'Yoga Classes',
      description: 'Find your balance, strength, and inner peace with our diverse yoga program. From gentle Hatha to challenging Vinyasa, our experienced instructors guide you through poses that improve flexibility, build core strength, reduce stress, and enhance mindfulness.',
      benefits: [
        'Improves flexibility, balance, and posture',
        'Builds core strength and muscle tone',
        'Reduces stress and promotes relaxation',
        'Enhances mental clarity and focus',
        'Helps with injury prevention and recovery',
        'Suitable for all fitness levels',
        'Multiple class styles: Hatha, Vinyasa, Yin, Hot Yoga'
      ],
      pricing: 'Included in membership or $18 drop-in',
      duration: '60-75 minute classes',
      image: '🧘'
    },
    sauna: {
      title: 'Sauna & Recovery',
      description: 'Relax, recover, and rejuvenate in our premium sauna facilities. After an intense workout, our infrared and traditional saunas help reduce muscle soreness, improve circulation, detoxify your body, and promote deep relaxation. Perfect for post-workout recovery.',
      benefits: [
        'Reduces muscle soreness and speeds recovery',
        'Improves circulation and cardiovascular health',
        'Detoxifies the body through sweating',
        'Relieves stress and promotes relaxation',
        'Enhances skin health and appearance',
        'Boosts immune system function',
        'Helps with better sleep quality'
      ],
      pricing: 'Included in membership',
      duration: 'Unlimited access during gym hours',
      image: '🔥'
    },
    open247: {
      title: '24/7 Access',
      description: 'Work out on your schedule, not ours. With 24/7 access, you can hit the gym whenever it fits your lifestyle - early morning, late night, or anytime in between. Our secure facility is always open, giving you the ultimate flexibility to achieve your fitness goals.',
      benefits: [
        'Access the gym 24 hours a day, 7 days a week',
        'Secure keycard entry system',
        'No time restrictions - work out when you want',
        'Perfect for early birds and night owls',
        'Less crowded during off-peak hours',
        'Full facility access at all times',
        'Emergency assistance available 24/7'
      ],
      pricing: 'Included in all membership tiers',
      duration: '24/7 unlimited access',
      image: '⏰'
    }
  };

  const details = featureDetails[feature.id] || {};

  return (
    <section className="feature-detail">
      <div className="feature-detail-container">
        <button className="back-button" onClick={onBack}>
          ← Back to Features
        </button>
        
        <div className="feature-detail-content">
          <div className="feature-detail-header">
            <div className="feature-detail-icon-large">
              {feature.icon}
            </div>
            <h1 className="feature-detail-title">{details.title || feature.title}</h1>
          </div>

          <div className="feature-detail-body">
            <p className="feature-detail-description">{details.description}</p>

            <div className="feature-detail-info">
              <div className="info-card">
                <h3>Benefits</h3>
                <ul className="benefits-list">
                  {details.benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="info-cards-row">
                <div className="info-card-small">
                  <h4>Pricing</h4>
                  <p>{details.pricing}</p>
                </div>
                <div className="info-card-small">
                  <h4>Duration</h4>
                  <p>{details.duration}</p>
                </div>
              </div>
            </div>

            <button className="cta-button" onClick={onBack}>
              Explore More Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetail;

