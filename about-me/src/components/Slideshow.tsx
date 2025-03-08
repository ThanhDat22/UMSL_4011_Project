import React, { useState } from 'react';

interface SlideshowProps {
  images: string[];
  onClose: () => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-black rounded-full p-4 shadow-lg transition-transform transform hover:scale-125 focus:outline-none"
      >
        ✕
      </button>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 bg-white bg-opacity-50 text-gray-800 hover:bg-opacity-80 p-3 rounded-full shadow-md transition-transform transform hover:scale-110"
      >
        ◀
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="max-w-[90%] max-h-[80%] object-contain rounded-lg shadow-lg"
      />

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 bg-white bg-opacity-50 text-gray-800 hover:bg-opacity-80 p-3 rounded-full shadow-md transition-transform transform hover:scale-110"
      >
        ▶
      </button>
    </div>
  );
};

export default Slideshow;
