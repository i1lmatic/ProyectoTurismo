import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuPencilLine, LuHeart } from 'react-icons/lu'; // Importa los íconos
import { Button } from '../../../../components/ui/Button/Button';
// IMPORTACIÓN DE OTROS MODALES
import ReportModal from '../ReportModal/ReportModal';
import ReportDescriptionModal from '../ReportDescriptionModal/ReportDescriptionModal';
import ReportConfirmationModal from '../ReportConfirmationModal/ReportConfirmationModal'; // Importar el nuevo modal
import GallerySection from '../GallerySection/GallerySection';
import ReservationCard from '../ReservationCard/ReservationCard';
import HostSection from '../HostSection/HostSection';
import ActivityFeatures from '../ActivityFeatures/ActivityFeatures';
import ReportAdLink from '../ReportAdLink/ReportAdLink';
import PropertyMap from './PropertyMap/PropertyMap';
import './ActivityDetail.css';
import type { Activity } from './../../../../types'; // Importa la interfaz Activity

interface ActivityDetailProps {
  activity: Activity;
}

const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity }) => {
  const navigate = useNavigate();
  const [showStickyNav, setShowStickyNav] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Estados para los modales de reporte (el modal de revisión ya no existe)
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const topPosition = sidebarRef.current.getBoundingClientRect().top;
        if (topPosition <= 0) {
          setShowStickyNav(true);
        } else {
          setShowStickyNav(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activityData = {
    ...activity,
    imagenes: activity.imagenes || [],
    descripcion: activity.descripcion || 'No hay descripción disponible para esta actividad.',
    anfitrion: activity.anfitrion || {
      nombre: "Anfitrión Desconocido",
      fechaUnion: "Fecha Desconocida",
      reseñas: 0,
      verificado: false,
      superAnfitrion: false,
      indiceRespuestas: 0,
      tiempoRespuesta: "Desconocido"
    }
  };

  // FUNCIÓN PARA ABRIR LA PÁGINA DE REVISIÓN
  const handleOpenReviewPage = () => {
    navigate(`/activity/${activityData.id}/review`);
  };

  // FUNCIÓN PARA ABRIR EL PRIMER MODAL
  const openReportModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowReasonModal(true);
  };

  // FUNCIÓN PARA CERRAR EL PRIMER MODAL Y ABRIR EL SEGUNDO
  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
    setShowReasonModal(false);
    setShowDescriptionModal(true);
  };

  // FUNCIÓN PARA VOLVER DEL SEGUNDO MODAL AL PRIMERO
  const handleBack = () => {
    setShowDescriptionModal(false);
    setShowReasonModal(true);
  };

  // FUNCIÓN PARA ENVIAR EL REPORTE FINAL Y CERRAR TODO
  const handleReportSubmit = (description: string) => {
    console.log(`Reporte enviado. Razón: ${selectedReason}, Descripción: ${description}`);
    // Aquí iría la lógica para enviar el reporte al backend
    // Por ahora, solo muestra el modal de confirmación.
    setShowDescriptionModal(false);
    setShowConfirmationModal(true); // Mostrar el modal de confirmación
    setSelectedReason('');
  };

  return (
    <div className="activity-detail">
      <div className="sticky-nav-container">
        <nav className={`sticky-nav ${showStickyNav ? 'visible' : ''}`}>
          <div className="sticky-nav__links">
            <a href="#fotos">Fotos</a>
            <a href="#servicios">Servicios</a>
            <a href="#anfitrion">Reseñas</a>
            <a href="#ubicacion">Ubicación</a>
          </div>
          <div className="sticky-nav__actions">
            <div className="sticky-nav__price-info">
              <span className="sticky-nav__price">
                S/ {activityData.precio}
              </span>
              <div className="sticky-nav__rating">
                <span className="sticky-nav__star">⭐</span>
                <span className="sticky-nav__rating-num">{activityData.calificacion?.toFixed(1)}</span>
                ·
                <a href="#anfitrion">
                  <span className="sticky-nav__reviews">7 reseñas</span>
                </a>
              </div>
            </div>
            <Button variant="primary" size="sm">Reserva</Button>
          </div>
        </nav>
      </div>
      <div className="activity-detail__header">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
        >
          Volver
        </Button>
      </div>
      <div className="activity-detail__info">
        <div className="activity-detail__title-row">
          <h1>{activityData.titulo}</h1>
          <div className="activity-detail__actions">
            <Button variant="outline" size="sm">
              Compartir
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="button-revisar"
              onClick={handleOpenReviewPage}
            >
              <LuPencilLine size={16} />Revisar
            </Button>
            <Button variant="outline" size="sm">
              <LuHeart size={16} />Guardar
            </Button>
          </div>
        </div>
        <div className="activity-detail__meta">
          <span>🏞️ {activityData.tipo}</span>
          <span>📍 {activityData.ubicacion}</span>
          {activityData.calificacion && (
            <span>⭐ {activityData.calificacion.toFixed(1)}</span>
          )}
        </div>
      </div>
      <div id="fotos">
        <GallerySection imagenes={activityData.imagenes} />
      </div>
      <div className="activity-detail__content">
        <div className="activity-detail__info">
          <div className="activity-detail__section">
            <h2>Acerca de esta actividad</h2>
            <p>{activityData.descripcion}</p>
          </div>
          <div id="servicios">
            <ActivityFeatures caracteristicas={activityData.caracteristicas} />
          </div>
          {activityData.anfitrion && (
            <div id="anfitrion">
              <HostSection anfitrion={activityData.anfitrion} />
            </div>
          )}
          <div className="activity-detail__section" id="ubicacion">
            <h2>Ubicación</h2>
            <div className="activity-map-container">
               <PropertyMap
                latitude={-12.59}
                longitude={-69.19}
                locationGroups={[{ title: "Ubicación de la Actividad", locations: [activityData.ubicacion] }]}
                zoom={14}
                apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'}
              />
            </div>
          </div>
        </div>
        <div className="activity-detail__sidebar" ref={sidebarRef}>
          <div className="sidebar-sticky-container">
            <ReservationCard
              precio={activityData.precio}
              calificacion={activityData.calificacion}
              fechaDisponible={activityData.fechaDisponible}
            />
            <ReportAdLink openReportModal={openReportModal} />
          </div>
        </div>
      </div>
      
      {/* 1. Modal para seleccionar la razón */}
      <ReportModal
        isOpen={showReasonModal}
        onClose={() => setShowReasonModal(false)}
        onSelectReason={handleReasonSelect}
      />
      
      {/* 2. Modal para la descripción, se muestra solo después de seleccionar una razón */}
      <ReportDescriptionModal
        isOpen={showDescriptionModal}
        onClose={() => setShowDescriptionModal(false)}
        onBack={handleBack}
        onSubmit={handleReportSubmit}
        reason={selectedReason}
      />

      {/* 3. Modal de confirmación, se muestra después de enviar el reporte */}
      <ReportConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
      />
    </div>
  );
};

export default ActivityDetail;