import React from 'react';
import Contact from './Contact';

const Footer = () => {

  return (
    <footer id="contact" className="flex flex-col bg-slate-950 text-gray-300 py-20 px-8"> 
      <div className="container  mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900 rounded-lg">
          {/* Contact Information */}
          <div className="flex flex-col items-center justify-center py-8">
            <h2 className="text-3xl text-gray-400 font-semibold mb-8">Contact Details</h2>
            <p className="mb-4"> Miami Florida, United States</p>
            {/* <p className="mb-4"> +1 (123) 456-7890</p> */}
            <p className="mb-4"> MurrayDesigns.1@gmail.com</p>
          </div>
          {/* Contact Form */}       
         <Contact/>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-sky-400">
        <p>&copy; MurrayDesigns2023</p>
      </div>
    </footer>
  );
};

export default Footer;
