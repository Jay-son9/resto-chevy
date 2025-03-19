import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button after scrolling 300px
    } else {
      setIsVisible(false); // Hide button when at the top
    }
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    // Add event listener to handle scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-2 px-3 bg-gray-600 rounded-md text-gray-300 shadow-lg transition-all transform cursor-pointer ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ transition: 'opacity 0.3s ease-in-out' }}
    >
      <i className="fas fa-arrow-up text-sky-400"></i> {/* Optional Font Awesome Icon */}
    </button>
  );
};

export default BackToTopButton;
