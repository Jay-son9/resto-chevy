// src/components/Modal.jsx
import React from 'react';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-950 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 px-10 py-20 rounded-lg max-w-lg w-full relative">
        <button
          className="absolute top-1 right-3 text-3xl text-gray-300 hover:text-gray-500 cursor-pointer"
          onClick={closeModal}
        >
          &times;
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-center text-lg text-gray-300">{image.description}</p>
      </div>
    </div>
  );
};

export default Modal;
