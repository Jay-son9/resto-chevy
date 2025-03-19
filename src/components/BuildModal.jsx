import React from 'react';

const BuildModal = ({ image, closeModal }) => {
  return (
    <div
    className="fixed inset-0 bg-gray-950 bg-opacity-75 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div className="flex flex-col md:flex-row bg-gray-900 p-6 rounded-lg shadow-lg max-w-4xl w-full">
      <div className="flex-shrink-0">
        <img src={image.src} alt="modal" className="w-96 h-auto rounded-lg" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <h2 className="text-2xl text-gray-300 font-semibold mb-4">{image.title}</h2>
        <p className="text-gray-300">{image.description}</p>
        <button
          onClick={closeModal}
          className="mt-8 text-white bg-sky-700 p-2 rounded-lg hover:bg-sky-800"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  );
};

export default BuildModal;