import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images, onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result);
        setIsUploading(false);
        event.target.value = ''; // Reset input
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">See our facilities and community in action</p>
        
        <div className="upload-section">
          <label htmlFor="image-upload" className="upload-btn">
            {isUploading ? 'Uploading...' : '📤 Upload New Image'}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`Gym facility ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-modal" onClick={closeModal}>&times;</span>
              <img src={selectedImage} alt="Full size" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

