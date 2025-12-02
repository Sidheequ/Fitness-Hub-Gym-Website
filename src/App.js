import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [galleryImages, setGalleryImages] = useState([
    require('./assets/1.jpg'),
    require('./assets/2 (2).jpg'),
    require('./assets/3.jpg'),
    require('./assets/4.jpg'),
    require('./assets/5.jpg'),
  ]);

  const handleImageUpload = (newImage) => {
    setGalleryImages([...galleryImages, newImage]);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Gallery images={galleryImages} onImageUpload={handleImageUpload} />
      <Contact />
    </div>
  );
}

export default App;
