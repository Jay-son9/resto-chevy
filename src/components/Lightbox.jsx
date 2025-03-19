import React, { useState } from 'react';

const Lightbox = () => {
  const [currentImage, setCurrentImage] = useState('/images/image1.jpg'); // Default large image

  // Local image paths
  const images = [
    '/img/2-min3.jpg',
    '/img/3-min.jpg',
    '/img/5-min.JPG',
    '/images/image4.jpg'
  ];

  const handleThumbnailClick = (image) => {
    setCurrentImage(image); // Update large image to the clicked thumbnail
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Large Image */}
      <div className="mb-4">
        <img
          src={currentImage}
          alt="Large display"
          className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4 overflow-x-auto p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-16 object-cover rounded-lg transition-all ${
                currentImage === image ? 'border-4 border-blue-500' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lightbox;
