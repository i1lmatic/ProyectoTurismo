// src/anfitrion/HostSection/HostSection.tsx
import React from 'react';
import { FaUser } from 'react-icons/fa'; // Importa el icono de usuario de Font Awesome
import './HostSection.css'; // Importa el CSS específico para HostSection
import { Button } from '../../../../components/ui/Button/Button'; // Importar el componente Button

interface HostSectionProps {
  anfitrion: {
    nombre: string;
    fechaUnion: string;
    reseñas: number;
    verificado: boolean;
    superAnfitrion: boolean;
    indiceRespuestas: number;
    tiempoRespuesta: string;
  };
}

const HostSection: React.FC<HostSectionProps> = ({ anfitrion }) => {
  return (
    <div className="host-section">
      <h2>Conoce al anfitrión</h2>
      <div className="anfitrion-contenido">
        <div className="anfitrion-card">
          <div className="anfitrion-user">
            <FaUser size={64} style={{ color: '#333' }} /> {/* Usa el icono de Font Awesome */}
            <div>
              <h3>{anfitrion.nombre}</h3>
              <p>Se unió en {anfitrion.fechaUnion}</p>
            </div>
          </div>
          <Button variant="outline" onClick={() => alert('Ver información del anfitrión')}>
            Información del anfitrión
          </Button>
        </div>
        <div className="anfitrion-info">
          <h4>{anfitrion.nombre} es un anfitrión</h4>
          <p>
            Los anfitriones tienen mucha experiencia.
          </p>
          <h4>Información sobre el anfitrión</h4>
          <p><strong>Índice de respuestas:</strong> {anfitrion.indiceRespuestas}%</p>
          <p><strong>Tiempo de respuesta:</strong> {anfitrion.tiempoRespuesta}</p>
        </div>
      </div>
    </div>
  );
};

export default HostSection;
