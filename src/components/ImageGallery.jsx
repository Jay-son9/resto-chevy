// src/components/ImageGallery.jsx
import React, { useState } from 'react';
import Modal from './Modal';

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [

    // OUTSIDE IMAGES
    { src: '/img/main-1.webp', alt: 'Image 1-truck', description: 'All cleaned up!!' },
    { src: '/img/outside-1.webp', alt: 'Image 2-truck', description: 'Testing the new sidemarkers.' },
    { src: 'img/main-3.webp', alt: 'Image 3- front grill of truck', description: "Can't beat the 69 and 70 grills!" },
    { src: '/img/main-6.webp', alt: 'Image 4 side view of truck', description: 'American Outlaw Wheels!!' },
    { src: '/img/5-min.JPG', alt: 'Image 5 side view of truck', description: 'Out for a drive..' },


    // INSIDE IMAGES
    { src: '/img/inside-15.webp', alt: 'Image 6 interior of truck', description: 'Custom LED and removable diamond plate covers..' },
    { src: '/img/inside4.webp', alt: 'Image 7', description: 'Interior before custom LED lights for the guages..' },
    { src: '/img/inside-16.webp', alt: 'Image 8', description: 'New speakers and custom rocker covers..' },
    { src: '/img/inside12.JPG', alt: 'Image 9', description: 'New tilt steering column and tachometer..' },
    { src: '/img/inside11.JPG', alt: 'Image 10', description: 'Custom stereo delete plate and new ignition switch and added set of guages' },


    // ENGINE 305 7 383 IMAGES
    { src: '/img/b-3.webp', alt: 'Image 11', description: 'Fully dressed 305..' },
    { src: '/img/oe-20.jpg', alt: 'Image 12', description: 'Inside the engine bay with 305..' },
    { src: '/img/oe-21.png', alt: 'Image 13', description: 'Another look ...' },
    { src: '/img/new-engine-3.webp', alt: 'Image 14', description: 'New heart 383 stroker!!' },
    { src: '/img/new-engine-9.webp', alt: 'Image 15', description: 'New waterpump and brackets for power steering on the 383' },

  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div  className="px-8 py-14 bg-gray-900">
      <div className="mb-14">
        <h2 id="gallery" className="text-gray-400 text-4xl font-semibold">Main<span className="text-sky-400"> Gallery</span></h2>
      </div>
      <div id="" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {isModalOpen && <Modal image={currentImage} closeModal={closeModal} />}
    </div>
  );
};

export default ImageGallery;
