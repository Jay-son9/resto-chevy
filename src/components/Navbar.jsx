// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setVisible(false); // Hide logo when scroll position > 50px
    } else {
      setVisible(true); // Show logo when scroll position is at top
    }
  };

  // Attach scroll event listener on mount and remove on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-950/60 md:bg-transparent text-white p-4 z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div
          className={`relative inline-block group transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href="/">
            <img src="/img/5451.png" alt="" className="w-[80px]" />        
          </a>

          <span className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded">
        Home
      </span>
        </div>

        {/* Desktop Navigation Links */}

        <div
          className={`transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="hidden md:flex space-x-10">
            {location.pathname === "/" && (
              <>
                <Link
                  to="project"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-sm hover:text-gray-400 border-l-1 border-sky-400 ps-3 hover:border-gray-400 cursor-pointer"
                >
                  Project
                </Link>

                <Link
                  to="gallery"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-sm hover:text-gray-400 border-l-1 border-sky-400 ps-3 hover:border-gray-400 cursor-pointer"
                >
                  Gallery
                </Link>
                <Link
                  to="videos"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-sm hover:text-gray-400 border-l-1 border-sky-400 ps-3 hover:border-gray-400 cursor-pointer"
                >
                  Videos
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-sm hover:text-gray-400 border-l-1 border-sky-400 ps-3 hover:border-gray-400 cursor-pointer"
                >
                  Contact
                </Link>
              </>
            )}

            <RouterLink  className="text-sm hover:text-gray-400 border-l-1 border-sky-400 ps-3 hover:border-gray-400 cursor-pointer" to="/page1">Build Gallery</RouterLink>
            <RouterLink  className="text-sm hover:text-gray-400 border-l-1 border-sky-400 ps-3 hover:border-gray-400 cursor-pointer" to="/page2">Parts list</RouterLink>
          </div>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? (
              <span>&#x2715;</span> // Close icon (×)
            ) : (
              <span>&#9776;</span> // Hamburger icon (≡)
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 mb-6 ">
          <div className="flex flex-col space-y-4 text-left">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/#project" className="hover:text-gray-400">
              Project
            </a>
            <a href="/#gallery" className="hover:text-gray-400">
              Gallery
            </a>
            <a href="/#videos" className="hover:text-gray-400">
              Videos
            </a>
            <a href="/home#contact" className="hover:text-gray-400">
              Contact
            </a>
            <a href="/page1" className="hover:text-gray-400">
              Build Gallery
            </a>
            <a href="/page2" className="hover:text-gray-400">
              Parts List
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
