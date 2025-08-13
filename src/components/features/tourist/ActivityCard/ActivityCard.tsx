import React from 'react';
import { LuMapPin, LuStar, LuHeart, LuHeartOff, LuCalendar, LuUsers, LuClock } from 'react-icons/lu';
import './ActivityCard.css';
import type { Activity, Feature } from '../../../../types';

interface ActivityCardProps {
  activity: Activity;
  onViewDetails: (id: string) => void;
  onSave?: (id: string) => void;
  isSaved?: boolean;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  onViewDetails,
  onSave,
  isSaved = false
}) => {
  const {
    id,
    titulo,
    tipo,
    precio,
    imageUrl,
    ubicacion,
    caracteristicas,
    calificacion,
    fechaDisponible
  } = activity;

  const tipoIcons = {
    'tour': <LuUsers size={16} />,
    'experiencia': <LuClock size={16} />,
    'evento': <LuCalendar size={16} />
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLElement && e.target.closest('.activity-card__save'))) {
      onViewDetails(id);
    }
  };

  return (
    <div
      className="activity-card"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${titulo}`}
    >
      <div className="activity-card__image-container">
        <img
          src={imageUrl}
          alt={titulo}
          className="activity-card__image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/placeholder-activity.jpg';
          }}
        />
        <div className="activity-card__type-floating">
            {tipoIcons[tipo]} {tipo}
        </div>
        {onSave && (
          <button
            className={`activity-card__save ${isSaved ? 'saved' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onSave(id);
            }}
            aria-label={isSaved ? 'Quitar de guardados' : 'Guardar actividad'}
          >
            {isSaved ? <LuHeart size={20} color="red" /> : <LuHeartOff size={20} />}
          </button>
        )}
        {calificacion && (
          <div className="activity-card__rating">
            <LuStar size={16} color="gold" /> {calificacion.toFixed(1)}
          </div>
        )}
      </div>

      <div className="activity-card__content">
        <div className="activity-card__header">
          <h3 className="activity-card__title">{titulo}</h3>
        </div>

        <p className="activity-card__location">
          <LuMapPin size={16} /> {ubicacion}
        </p>

        <div className="activity-card__price">
          <span className="activity-card__price-amount">
            S/ {precio.toLocaleString('es-PE')}
          </span>
          <span className="activity-card__price-period">/persona</span>
        </div>

        {fechaDisponible && (
          <p className="activity-card__availability">
            <LuCalendar size={16} /> Disponible el {new Date(fechaDisponible).toLocaleDateString('es-PE')}
          </p>
        )}

        <div className="activity-card__features">
          {caracteristicas.slice(0, 3).map((feature: Feature, index: number) => (
            <span key={index} className="activity-card__feature">
              {feature.nombre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
