import React, { useState, useRef } from 'react';
import './Gallery.css';

const Gallery = ({ images, onImageUpload, onSeeMore, isAdmin = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    let processedCount = 0;

    files.forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          onImageUpload(reader.result);
          processedCount++;
          if (processedCount === files.length) {
            setIsUploading(false);
            setShowUploadPanel(false);
            if (fileInputRef.current) {
              fileInputRef.current.value = '';
            }
          }
        };
        reader.readAsDataURL(file);
      } else {
        processedCount++;
        if (processedCount === files.length) {
          setIsUploading(false);
          alert('Please select only image files');
        }
      }
    });
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Show only first 6 images
  const displayImages = images.slice(0, 6);
  const hasMoreImages = images.length > 6;

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        {isAdmin && (
          <div className="admin-upload-section">
            <button 
              className="admin-upload-button" 
              onClick={() => setShowUploadPanel(!showUploadPanel)}
            >
              {showUploadPanel ? '✕ Cancel Upload' : '📤 Admin: Upload Images'}
            </button>
            {showUploadPanel && (
              <div className="upload-panel">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                <button 
                  className="upload-button" 
                  onClick={handleUploadClick}
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Choose Images'}
                </button>
                <p className="upload-hint">Select one or multiple images to upload</p>
              </div>
            )}
          </div>
        )}

        <div className="gallery-header">
          <h1 className="gallery-title">Master Cleanse Reliac Heirloom</h1>
          <p className="gallery-description">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-column gallery-column-left">
            <div className="gallery-row">
              {displayImages[0] && (
                <div className="gallery-item" onClick={() => handleImageClick(displayImages[0])}>
                  <img alt="gallery" src={displayImages[0]} />
                </div>
              )}
              {displayImages[1] && (
                <div className="gallery-item" onClick={() => handleImageClick(displayImages[1])}>
                  <img alt="gallery" src={displayImages[1]} />
                </div>
              )}
            </div>
            {displayImages[2] && (
              <div className="gallery-item gallery-item-full" onClick={() => handleImageClick(displayImages[2])}>
                <img alt="gallery" src={displayImages[2]} />
              </div>
            )}
          </div>

          <div className="gallery-column gallery-column-right">
            {displayImages[3] && (
              <div className="gallery-item gallery-item-full" onClick={() => handleImageClick(displayImages[3])}>
                <img alt="gallery" src={displayImages[3]} />
              </div>
            )}
            <div className="gallery-row">
              {displayImages[4] && (
                <div className="gallery-item" onClick={() => handleImageClick(displayImages[4])}>
                  <img alt="gallery" src={displayImages[4]} />
                </div>
              )}
              {displayImages[5] && (
                <div className="gallery-item" onClick={() => handleImageClick(displayImages[5])}>
                  <img alt="gallery" src={displayImages[5]} />
                </div>
              )}
            </div>
          </div>
        </div>

        {hasMoreImages && (
          <div className="see-more-section">
            <button className="see-more-button" onClick={onSeeMore}>
              See More
            </button>
          </div>
        )}

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
