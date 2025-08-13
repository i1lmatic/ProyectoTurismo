import React from 'react';
import './MadreDeDiosSection.css';

const MadreDeDiosSection = () => {
  return (
    <section className="madre-de-dios-section">
      <h2>Descubre Madre de Dios</h2>
      <div className="destinations-container">
        <div className="destination">
          <img src="https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg?w=700&h=-1&s=1" alt="Lago Sandoval" />
          <h3>Lago Sandoval</h3>
        </div>
        <div className="destination">
          <img src="https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg?w=700&h=-1&s=1" alt="Reserva Tambopata" />
          <h3>Reserva Tambopata</h3>
        </div>
        <div className="destination">
          <img src="https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg?w=700&h=-1&s=1" alt="Parque Nacional del Manu" />
          <h3>Parque Nacional del Manu</h3>
        </div>
        <div className="destination">
          <img src="https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg?k=dc4c6114849984338d39c7a44991b19ffcb9f99f298597e992909c73936617c3&o=" alt="Collpa Chuncho" />
          <h3>Collpa Chuncho</h3>
        </div>
      </div>
      <button>Ver más</button>
    </section>
  );
};

export default MadreDeDiosSection;


