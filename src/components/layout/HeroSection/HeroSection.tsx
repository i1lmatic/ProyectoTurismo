import React, { useState, useEffect } from 'react';
import { SearchBar } from '../Search/SearchBar';

import './HeroSection.css';

interface HeroSectionProps {
  images: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const sectionStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <section className="hero-section" style={sectionStyle}>
      <div className="hero-content">
        <h1>Comienza a explorar</h1>
        <p>Planifica mejor gracias a las más de 300 000 experiencias de viaje disponibles.</p>
        <SearchBar 
          locationPlaceholder="Buscar un sitio o una actividad" 
          durationPlaceholder="Seleccionar fechas" 
        />
      </div>
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <div className="do-more-button">
        Do more with Viator
      </div>
    </section>
  );
};

export default HeroSection;
