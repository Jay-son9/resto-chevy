import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL (e.g., #about)
    const sectionId = location.hash.slice(1); // Remove the '#' from the hash
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
