import React, { useState, useRef } from 'react';
import './GalleryDetail.css';

const GalleryDetail = ({ images, onBack, onImageUpload, isAdmin = false }) => {
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

  // Function to organize images into masonry layout groups
  const organizeImages = (imageArray) => {
    const groups = [];
    for (let i = 0; i < imageArray.length; i += 6) {
      groups.push(imageArray.slice(i, i + 6));
    }
    return groups;
  };

  const imageGroups = organizeImages(images);

  return (
    <section className="gallery-detail">
      <div className="gallery-detail-container">
        <button className="back-button" onClick={onBack}>
          ← Back to Gallery
        </button>

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

        <div className="gallery-detail-header">
          <h1 className="gallery-detail-title">Full Gallery</h1>
          <p className="gallery-detail-description">
            Explore our complete collection of fitness facilities, equipment, and community moments.
          </p>
        </div>

        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="gallery-grid">
            <div className="gallery-column gallery-column-left">
              <div className="gallery-row">
                {group[0] && (
                  <div className="gallery-item" onClick={() => handleImageClick(group[0])}>
                    <img alt="gallery" src={group[0]} />
                  </div>
                )}
                {group[1] && (
                  <div className="gallery-item" onClick={() => handleImageClick(group[1])}>
                    <img alt="gallery" src={group[1]} />
                  </div>
                )}
              </div>
              {group[2] && (
                <div className="gallery-item gallery-item-full" onClick={() => handleImageClick(group[2])}>
                  <img alt="gallery" src={group[2]} />
                </div>
              )}
            </div>

            <div className="gallery-column gallery-column-right">
              {group[3] && (
                <div className="gallery-item gallery-item-full" onClick={() => handleImageClick(group[3])}>
                  <img alt="gallery" src={group[3]} />
                </div>
              )}
              <div className="gallery-row">
                {group[4] && (
                  <div className="gallery-item" onClick={() => handleImageClick(group[4])}>
                    <img alt="gallery" src={group[4]} />
                  </div>
                )}
                {group[5] && (
                  <div className="gallery-item" onClick={() => handleImageClick(group[5])}>
                    <img alt="gallery" src={group[5]} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

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

export default GalleryDetail;

