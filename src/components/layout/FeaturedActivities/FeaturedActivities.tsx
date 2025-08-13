import React from 'react';
import { ActivityCard } from '../../features/tourist/ActivityCard/ActivityCard';
import type { Activity } from '../../../types';
import './FeaturedActivities.css';
import { useNavigate } from 'react-router-dom';

export const featuredActivitiesData: Activity[] = [
  {
    id: '1',
    titulo: 'Tour a las Islas Ballestas',
    tipo: 'tour',
    precio: 80,
    imagenes: [
      
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg"
    ],
    ubicacion: 'Paracas, Ica',
    caracteristicas: [
      { nombre: 'Paseo en bote', icono: 'fa-solid fa-ship' },
      { nombre: 'Avistamiento de aves', icono: 'fa-solid fa-crow' },
      { nombre: 'Fauna marina', icono: 'fa-solid fa-fish' },
    ],

    calificacion: 4.8,
    fechaDisponible: '2025-09-15',
    descripcion: 'Un increíble tour a las Islas Ballestas, donde podrás observar aves y fauna marina en su hábitat natural.',
    anfitrion: {
      nombre: 'Guía de Paracas',
      fechaUnion: '2020-01-01',
      reseñas: 120,
      verificado: true,
      superAnfitrion: true,
      indiceRespuestas: 95,
      tiempoRespuesta: '1 hora'
    }
  },
  {
    id: '2',
    titulo: 'Trekking a la Laguna 69',
    tipo: 'experiencia',
    precio: 120,
    imagenes: [
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg"
    ],
    ubicacion: 'Huaraz, Ancash',
    caracteristicas: [
      { nombre: 'Caminata', icono: 'fa-solid fa-person-hiking' },
      { nombre: 'Montañismo', icono: 'fa-solid fa-mountain' },
      { nombre: 'Paisajes', icono: 'fa-solid fa-image' },
    ],
    calificacion: 4.9,
    fechaDisponible: '2025-10-20',
    descripcion: 'Una desafiante caminata a la impresionante Laguna 69, una de las lagunas más hermosas del Perú.',
    anfitrion: {
      nombre: 'Andes Expert',
      fechaUnion: '2018-05-15',
      reseñas: 250,
      verificado: true,
      superAnfitrion: true,
      indiceRespuestas: 98,
      tiempoRespuesta: '30 minutos'
    }
  },
  {
    id: '3',
    titulo: 'City Tour en Cusco',
    tipo: 'tour',
    precio: 60,
    imagenes: [
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg",
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg"
    ],
    ubicacion: 'Cusco, Cusco',
    caracteristicas: [
      { nombre: 'Cultural', icono: 'fa-solid fa-landmark' },
      { nombre: 'Historia', icono: 'fa-solid fa-book-open' },
      { nombre: 'Arquitectura', icono: 'fa-solid fa-archway' },
    ],
    calificacion: 4.7,
    fechaDisponible: '2025-09-10',
    descripcion: 'Un recorrido por los principales atractivos de la ciudad de Cusco, la antigua capital del Imperio Inca.',
    anfitrion: {
      nombre: 'Cusco Adventures',
      fechaUnion: '2022-03-10',
      reseñas: 80,
      verificado: true,
      superAnfitrion: false,
      indiceRespuestas: 90,
      tiempoRespuesta: '2 horas'
    }
  },
];

export const FeaturedActivities: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    navigate(`/activity/${id}`);
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