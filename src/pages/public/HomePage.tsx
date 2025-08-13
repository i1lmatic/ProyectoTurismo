import React, { useEffect, useState } from 'react';
import { Footer, Features, HeroSection, Header, Locations, FeaturedActivities, MadreDeDiosSection } from '../../components/layout';
import UserCard from '../../components/ui/UserCard/UserCard';

const HomePage: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetch('http://localhost:8000/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            setUserName(data.nombre || null);
            setUserEmail(data.email || null);
            setAvatarUrl(data.avatar_url || null);
          }
        })
        .catch(() => {});
    }
  }, []);

  const featuresData = {
    mainTitle: "",
    items: [
      {
        title: "Atención al cliente",
        subtitle: "Ininterrumpida",
        description: "Sin importar la zona horaria, estamos aquí para ayudarte.",
        icon: "fa-solid fa-headset"
      },
      {
        title: "Gana recompensas",
        subtitle: "",
        description: "Explora, gana, canjea y repite con nuestro programa de fidelidad.",
        icon: "fa-solid fa-gift"
      },
      {
        title: "Millones de opiniones",
        subtitle: "",
        description: "Planifica y reserva con confianza gracias a las opiniones de otros viajeros.",
        icon: "fa-solid fa-comments"
      },
      {
        title: "Planifica a tu manera",
        subtitle: "",
        description: "Mantén la flexibilidad con la cancelación gratuita y la opción de reservar ahora y pagar después sin coste adicional.",
        icon: "fa-solid fa-calendar-check"
      }
    ]
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_email');
    setShowCard(false);
    window.location.reload();
  };

  // Cierra el panel al hacer clic fuera
  React.useEffect(() => {
    if (!showCard) return;
    const handleClick = (e: MouseEvent) => {
      const card = document.getElementById('usercard-panel');
      const avatar = document.getElementById('usercard-avatar');
      if (card && !card.contains(e.target as Node) && avatar && !avatar.contains(e.target as Node)) {
        setShowCard(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showCard]);

  return (
    <div className="app-container">
      <Header isHomePage={true} />
      {userName && userEmail && (
        <>
          {/* Avatar flotante */}
          <div
            id="usercard-avatar"
            style={{
              position: 'fixed',
              top: 20,
              right: 20,
              zIndex: 1100,
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#e1e4e8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.3rem',
              color: '#555',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
              cursor: 'pointer',
            }}
            onClick={() => setShowCard((v) => !v)}
          >
            {userName.trim()[0].toUpperCase()}
          </div>
          {/* Panel desplegable */}
          {showCard && (
            <div id="usercard-panel" style={{position: 'fixed', top: 70, right: 20, zIndex: 1200}}>
              <UserCard name={userName} email={userEmail} avatarUrl={avatarUrl || undefined} onLogout={handleLogout} />
            </div>
          )}
        </>
      )}
      <HeroSection
        images={[
          "https://live.staticflickr.com/8266/8746178810_7cf99099c1_h.jpg",
          "https://live.staticflickr.com/3751/8973127846_c09e43054b_k.jpg",
          "https://live.staticflickr.com/5489/9387084053_983025f3d6_h.jpg"
        ]}
      />
      <Features
        mainTitle={featuresData.mainTitle}
        items={featuresData.items}
      />
      <Locations />
      <MadreDeDiosSection />
      <FeaturedActivities />
      <Footer
        companyName="Turismoo verde"
        year={2025}
      />
    </div>
  );
};

export default HomePage;
