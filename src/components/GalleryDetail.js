import React, { useState, useRef } from 'react';
import './GalleryDetail.css';

const GalleryDetail = ({ images, onBack, onImageUpload, isAdmin }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
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

    return (
        <div className="gallery-detail">
            <div className="gallery-detail-container">
                <div className="gallery-detail-header">
                    <button className="back-button" onClick={onBack}>
                        ← Back to Home
                    </button>
                    <h1>Full Gallery</h1>
                    {isAdmin && (
                        <div className="upload-section">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileSelect}
                                style={{ display: 'none' }}
                            />
                            <button
                                className="upload-btn"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                            >
                                {isUploading ? 'Uploading...' : 'Upload New Images'}
                            </button>
                        </div>
                    )}
                </div>

                <div className="gallery-detail-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-detail-item" onClick={() => handleImageClick(image)}>
                            <img src={image} alt={`Gallery item ${index + 1}`} loading="lazy" />
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
        </div>
    );
};

export default GalleryDetail;
