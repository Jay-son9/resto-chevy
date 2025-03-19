import "./App.css";

import Navbar from "./components/Navbar.jsx";
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import Footer from "./components/Footer.jsx";
import BackToTopButton from './components/BackToTopButton.jsx';
import AOS from 'aos';

// import { Link } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Page1 from "./components/Build.jsx";
import Page2 from "./components/Parts.jsx";
import { useEffect } from "react";
import SplashCursor from "./components/SplashCursor.jsx";
import ScrollToSection from "./hooks/ScrollToSection.jsx";
import VideoSection from "./components/VideoSection.jsx";



function ScrollToTop() {
  const location = useLocation();

  // Reset scroll position to top on route change

  useEffect(() => {
    window.scrollTo(0, 0);  
  }, [location]);

  return null;
}

AOS.init({
  disable: 'mobile'
});


function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToSection />
      <Navbar /><SplashCursor />
      <div className="bg-slate-500 min-h-screen w-full ">
     
          <Routes>
            <Route path="/" element={<><HeroSection /><AboutSection /><ImageGallery /><VideoSection/><BackToTopButton /></>} />
            <Route path="/page1" element={<><Page1 /><BackToTopButton /></>} />
            <Route path="/page2" element={<><Page2 /><BackToTopButton /></>} />
          </Routes>
      
        <Footer />     
      </div>
    </Router>
  );
}

export default App;

