import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FeatureDetail from './components/FeatureDetail';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import GalleryDetail from './components/GalleryDetail';
import Contact from './components/Contact';

function App() {
  const [galleryImages, setGalleryImages] = useState([
    require('./assets/1.jpg'),
    require('./assets/2 (2).jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg'),
    require('./assets/5.jpg'),
  ]);

  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showGalleryDetail, setShowGalleryDetail] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Set to true to enable admin mode

  const handleImageUpload = (newImage) => {
    setGalleryImages([...galleryImages, newImage]);
  };

  // Scroll to top when feature detail page or gallery detail page opens
  useEffect(() => {
    if (selectedFeature || showGalleryDetail) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedFeature, showGalleryDetail]);

  // Feature data shared between Features and FeatureDetail
  const features = [
    {
      id: 'personal',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 6.5C6.5 5.67 7.17 5 8 5H16C16.83 5 17.5 5.67 17.5 6.5V17.5C17.5 18.33 16.83 19 16 19H8C7.17 19 6.5 18.33 6.5 17.5V6.5Z" />
          <path d="M9 9H15M9 15H15" />
        </svg>
      ),
      title: 'Personal',
      description: 'One-on-one personal training sessions tailored to your fitness goals.'
    },
    {
      id: 'exclusive',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      ),
      title: 'Exclusive',
      description: 'Exclusive membership benefits and premium facilities access.'
    },
    {
      id: 'zumba',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="3" />
          <path d="M12 11V21" />
          <path d="M8 15L12 11L16 15" />
          <circle cx="9" cy="18" r="1" />
          <circle cx="15" cy="18" r="1" />
        </svg>
      ),
      title: 'Zumba',
      description: 'High-energy dance fitness classes that make working out fun.'
    },
    {
      id: 'yoga',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2V22" />
          <path d="M8 6L12 2L16 6" />
          <path d="M8 18L12 22L16 18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Yoga',
      description: 'Mindful yoga sessions for flexibility, strength, and inner peace.'
    },
    {
      id: 'sauna',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 9H15M9 12H15M9 15H15" />
          <path d="M6 6V3M18 6V3M6 18V21M18 18V21" />
        </svg>
      ),
      title: 'Sauna',
      description: 'Relax and recover in our premium sauna facilities.'
    },
    {
      id: 'open247',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
          <path d="M8 9H10M14 9H16M8 12H10M14 12H16M8 15H10M14 15H16" />
        </svg>
      ),
      title: 'Open 24/7',
      description: 'Access our facilities anytime, day or night, 24 hours a day.'
    }
  ];

  // If gallery detail is shown, show only the GalleryDetail page
  if (showGalleryDetail) {
    return (
      <div className="App">
        <Header />
        <GalleryDetail
          images={galleryImages}
          onBack={() => {
            setShowGalleryDetail(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onImageUpload={handleImageUpload}
          isAdmin={isAdmin}
        />
      </div>
    );
  }

  // If a feature is selected, show only the FeatureDetail page
  if (selectedFeature) {
    const feature = features.find(f => f.id === selectedFeature);
    return (
      <div className="App">
        <Header />
        <FeatureDetail
          feature={feature}
          onBack={() => {
            setSelectedFeature(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>
    );
  }

  // Normal page layout
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features features={features} onFeatureClick={setSelectedFeature} />
      <Testimonials />
      <Gallery 
        images={galleryImages} 
        onImageUpload={handleImageUpload}
        onSeeMore={() => setShowGalleryDetail(true)}
        isAdmin={isAdmin}
      />
      <Contact />
    </div>
  );
}

export default App;
