import React, { useState } from "react";
import './../styles/Pets.css';
import Slideshow from "../components/Slideshow"; 

// Import images
const baibaiImages = ["/image/baibai1.jpg", "/image/baibai2.jpg", "/image/baibai3.jpg"];
const baobeiImages = ["/image/baobei1.jpg", "/image/baobei.jpg", "/image/baobei3.jpg"];
const kafeiImages = ["/image/kafei1.jpg", "/image/kafei2.jpg", "/image/kafei3.jpg"];

const Pets: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  return (
    <div className="pets-container">
      <h1 className="pets-title">🐶 Meet My Adorable Friends! 🐾</h1>
      <p className="pets-description">
        These are pictures of my three lovely friends — Baibai, Baobei, and Kafei.
      </p>

      <div className="pets-gallery">
        {/* Baibai */}
        <div
          className="pet-card cursor-pointer"
          onClick={() => setSelectedImages(baibaiImages)}
        >
          <img src="/image/baibai.jpg" alt="Baibai" className="pet-image" />
          <p className="pet-name">Baibai 🐾</p>
        </div>

        {/* Baobei */}
        <div
          className="pet-card cursor-pointer"
          onClick={() => setSelectedImages(baobeiImages)}
        >
          <img src="/image/baobei.jpg" alt="Baobei" className="pet-image" />
          <p className="pet-name">Baobei 🐾</p>
        </div>

        {/* Kafei */}
        <div
          className="pet-card cursor-pointer"
          onClick={() => setSelectedImages(kafeiImages)}
        >
          <img src="/image/kafei1.jpg" alt="Kafei" className="pet-image" />
          <p className="pet-name">Kafei 🐾</p>
        </div>
      </div>

      {/* Slideshow */}
      {selectedImages && (
        <Slideshow
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}
    </div>
  );
};

export default Pets;
