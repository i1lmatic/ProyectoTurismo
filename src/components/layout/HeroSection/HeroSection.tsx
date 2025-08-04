import React from 'react';
import { SearchBar } from '../Search/SearchBar';

import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Comienza a explorar</h1>
        <p>Planifica mejor gracias a las más de 300 000 experiencias de viaje disponibles.</p>
        <SearchBar 
          locationPlaceholder="Buscar un sitio o una actividad" 
          durationPlaceholder="Seleccionar fechas" 
        />
      </div>
      <div className="hero-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="do-more-button">
        Do more with Viator
      </div>
    </section>
  );
};

export default HeroSection;
