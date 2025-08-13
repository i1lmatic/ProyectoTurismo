import React from 'react';
import './Locations.css';

export const Locations = () => {
  return (
    <section className="locations-section">
      <div className="locations-content">
        <div className="locations-text">
          <h2>NUESTRAS UBICACIONES</h2>
          <div className="locations-list">
            <h3>MADRE DE DIOS</h3>
            <ul>
              <li>Inkaterra Reserva Amazónica</li>
              <li>Inkaterra Hacienda Concepción</li>
              <li>Amazon Field Station byInkaterra</li>
            </ul>
          </div>
        </div>
        <div className="locations-map">
          {/* Aquí irá la imagen del mapa. Por ahora, es un marcador de posición. */}
          <div className="map-placeholder">
            <p>Mapa de Perú</p>
          </div>
        </div>
      </div>
    </section>
  );
};
