import React, { useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { featuredActivitiesData } from '../../../../components/layout/FeaturedActivities/FeaturedActivities';
import { Button } from '../../../../components/ui/Button/Button';
import { Header } from '../../../../components/layout/Header/Header';
import { Footer } from '../../../../components/layout/Footer/footer';
import './ReviewPage.css';


const ratingLabels = ['Terrible', 'Pobre', 'Promedio', 'Bueno', 'Excelente'] as const;
const companions = ['Negocios', 'Parejas', 'Familia', 'Amigos', 'Solo'] as const;

const ReviewPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const activity = featuredActivitiesData.find((a) => a.id === id);

  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);
  const [month, setMonth] = useState('');
  const [companion, setCompanion] = useState<string>('');
  const [review, setReview] = useState('');
  const [title, setTitle] = useState('');
  const [certified, setCertified] = useState(false);

  const reviewMin = 100;
  const titleMax = 120;

  const monthOptions = useMemo(() => {
    const now = new Date();
    const list: string[] = [];
    for (let i = 0; i < 12; i++) {
      const m = now.toLocaleString('es-ES', { month: 'long' });
      const y = now.getFullYear();
      list.push(`${m.charAt(0).toUpperCase() + m.slice(1)} de ${y}`);
      now.setMonth(now.getMonth() - 1);
    }
    return list;
  }, []);

  if (!activity) return <div>Actividad no encontrada</div>;

  const activeValue = hovered || rating;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !month || !companion || review.length < reviewMin || !title || !certified) return;
    // TODO: enviar al backend
    navigate(`/activity/${activity.id}`);
  };

  return (
    <div>
    
    <div className="review-page">
      
       <Header isHomePage={false} />
      {/* Lado izquierdo fijo */}
      <aside className="review-sidebar">
        <h1 className="review-title">Cuéntanos ¿cómo estuvo tu visita?</h1>
        
        {/* Tarjeta estilo TripAdvisor */}
        <div className="activity-card">
          <div className="activity-card__imgwrap">
            <img
              src={activity.imagenes[0]}
              alt={activity.titulo}
              className="activity-card__img"
            />
          </div>

          <div className="activity-card__body">
            <h3 className="activity-card__title">{activity.titulo}</h3>

            {activity?.anfitrion?.nombre && (
              <p className="activity-card__by">
                Por{' '}
                {activity?.anfitrion?.nombre ? (
                  <a href="#">
                    {activity.anfitrion.nombre}
                  </a>
                ) : (
                  <a href="#">{activity.anfitrion.nombre}</a>
                )}
              </p>
            )}
          </div>
        </div>

        <p className="activity-change-line">
          ¿No es el correcto? <button type="button" className="linklike">Cambiar actividad</button>
        </p>

        <div className="draft-pill">
          <span className="draft-pill__icon">✓</span>
          Borrador guardado
        </div>
      </aside>

      {/* Form con scroll */}
      <main className="review-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            {/* Rating */}
            <section className="form-section">
              <h2 className="form-section-title">¿Cómo calificarías tu experiencia?</h2>
              <div className="rating-selector" role="radiogroup" aria-label="Calificación">
                <div className="rating-circles">
                  {[1,2,3,4,5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      className={`rating-circle ${n <= activeValue ? 'active' : ''}`}
                      aria-label={`${n} - ${ratingLabels[n-1]}`}
                      onMouseEnter={() => setHovered(n)}
                      onMouseLeave={() => setHovered(0)}
                      onClick={() => setRating(n)}
                    />
                  ))}
                </div>
                <span className="rating-label">{activeValue ? ratingLabels[activeValue-1] : ''}</span>
              </div>
            </section>

            {/* Mes */}
            <section className="form-section">
              <h2 className="form-section-title">¿Cuándo fuiste?</h2>
              <select className="date-select" value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">Seleccione uno</option>
                {monthOptions.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </section>

            {/* Compañía */}
            <section className="form-section">
              <h2 className="form-section-title">¿Con quién fuiste?</h2>
              <div className="companion-options">
                {companions.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCompanion(c)}
                    className={`companion-button ${companion === c ? 'active' : ''}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </section>

            {/* Reseña */}
            <section className="form-section">
              <h2 className="form-section-title">Escribe tu reseña</h2>
              <textarea
                placeholder="Comparte tu experiencia…"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={5}
              />
              <p className={`char-count ${review.length < reviewMin ? 'warn' : ''}`}>
                {review.length}/{reviewMin} caracteres mínimos
              </p>
            </section>

            {/* Título */}
            <section className="form-section">
              <h2 className="form-section-title">Titula tu reseña</h2>
              <input
                type="text"
                placeholder="Cuéntanos la esencia de tu experiencia"
                value={title}
                onChange={(e) => setTitle(e.target.value.slice(0, titleMax))}
              />
              <p className="char-count">{title.length}/{titleMax} caracteres máximos</p>
            </section>

            {/* Fotos (placeholder) */}
            <section className="form-section">
              <h2 className="form-section-title">Añade algunas fotos</h2>
              <p className="optional-text">Opcional</p>
              <div className="photo-upload-box" role="button" tabIndex={0}>
                <span className="upload-icon">📷</span>
                <p>Haga clic para agregar fotos<br/>o arrastrar y soltar</p>
              </div>
            </section>

            {/* Certificación */}
            <section className="form-section">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={certified}
                  onChange={(e) => setCertified(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                Certifico que esta reseña se basa en mi propia experiencia…
              </label>
            </section>

            <div className="form-footer">
              <Button variant="primary" type="submit" fullWidth>
                Continuar
              </Button>
            </div>
          </div>
        </form>
      </main>
      
    </div>
    <Footer 
        companyName="Turismoo verde"
        year={2025}
      />
    </div>
  );
};

export default ReviewPage;
