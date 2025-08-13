import React from 'react';
import { ActivityCard } from '../../features/tourist/ActivityCard/ActivityCard';
import type { Activity } from '../../../types';
import './FeaturedActivities.css';

const featuredActivitiesData: Activity[] = [
  {
    id: '1',
    titulo: 'Tour a las Islas Ballestas',
    tipo: 'tour',
    precio: 80,
    imageUrl: 'https://live.staticflickr.com/65535/51336459432_3a3ce555d6_b.jpg',
    ubicacion: 'Paracas, Ica',
    caracteristicas: [
      { nombre: 'Paseo en bote', icono: 'fa-solid fa-ship' },
      { nombre: 'Avistamiento de aves', icono: 'fa-solid fa-crow' },
      { nombre: 'Fauna marina', icono: 'fa-solid fa-fish' },
    ],
    calificacion: 4.8,
    fechaDisponible: '2025-09-15',
  },
  {
    id: '2',
    titulo: 'Trekking a la Laguna 69',
    tipo: 'experiencia',
    precio: 120,
    imageUrl: 'https://live.staticflickr.com/788/271658752_62b356033d_b.jpg',
    ubicacion: 'Huaraz, Ancash',
    caracteristicas: [
      { nombre: 'Caminata', icono: 'fa-solid fa-person-hiking' },
      { nombre: 'Montañismo', icono: 'fa-solid fa-mountain' },
      { nombre: 'Paisajes', icono: 'fa-solid fa-image' },
    ],
    calificacion: 4.9,
    fechaDisponible: '2025-10-20',
  },
  {
    id: '3',
    titulo: 'City Tour en Cusco',
    tipo: 'tour',
    precio: 60,
    imageUrl: 'https://live.staticflickr.com/4564/38249702651_58934a234c_b.jpg',
    ubicacion: 'Cusco, Cusco',
    caracteristicas: [
      { nombre: 'Cultural', icono: 'fa-solid fa-landmark' },
      { nombre: 'Historia', icono: 'fa-solid fa-book-open' },
      { nombre: 'Arquitectura', icono: 'fa-solid fa-archway' },
    ],
    calificacion: 4.7,
    fechaDisponible: '2025-09-10',
  },
];

export const FeaturedActivities: React.FC = () => {
  const handleViewDetails = (id: string) => {
    console.log(`Ver detalles de la actividad ${id}`);
    // Aquí se podría navegar a la página de detalles de la actividad
  };

  return (
    <section className="featured-activities">
      <h2 className="featured-activities__title">Actividades y tours recomendados</h2>
      <div className="featured-activities__grid">
        {featuredActivitiesData.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </section>
  );
};
