// src/turista/ActivityFeatures/ActivityFeatures.tsx
import React from 'react';
import { LuUsers, LuClock, LuCalendar, LuGlobe, LuCar, LuSun } from 'react-icons/lu';
import './ActivityFeatures.css'; // Importa el CSS específico para ActivityFeatures

interface ActivityFeaturesProps {
  caracteristicas: {
    nombre: string;
    icono: string;
  }[];
}

// Mapeo de los nombres de los iconos a los componentes de React-Icons/lu
const iconMap: { [key: string]: React.ElementType } = {
  "guia": LuUsers,
  "duracion": LuClock,
  "disponibilidad": LuCalendar,
  "idioma": LuGlobe,
  "transporte": LuCar,
  "aire-libre": LuSun,
};

const ActivityFeatures: React.FC<ActivityFeaturesProps> = ({ caracteristicas }) => {
  return (
    <div className="activity-features-section">
      <h2>Lo que esta actividad ofrece</h2>
      {caracteristicas && caracteristicas.length > 0 ? (
        <div className="activity-detail__features">
          {caracteristicas.map((feature, index) => {
            const IconComponent = iconMap[feature.icono];
            return (
              <div key={index} className="activity-detail__feature">
                {IconComponent && <IconComponent size={20} />}
                <span>{feature.nombre}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Sin características</p>
      )}
    </div>
  );
};

export default ActivityFeatures;
