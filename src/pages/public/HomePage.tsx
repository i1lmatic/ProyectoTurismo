import { Footer, Features, HeroSection, Header, Locations, FeaturedActivities, MadreDeDiosSection } from '../../components/layout';
import { useEffect, useState } from 'react';

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
}
import axios from 'axios';


function HomePage() {
  const [user, setUser] = useState<{ nombre: string; apellido: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log('Token guardado en localStorage:', token);
    if (token) {
      const headers = { Authorization: `Bearer ${token}` };
      console.log('Header enviado:', headers);
      axios.get('http://127.0.0.1:8000/auth/me', {
        headers,
      })
      .then(res => setUser({ nombre: res.data.nombre, apellido: res.data.apellido }))
      .catch((err) => {
        console.error('Error al obtener usuario:', err);
        setUser(null);
      });
    } else {
      setUser(null);
    }
  }, []);
  // ...existing code...
  // Datos para las features que coinciden con la imagen
  const featuresData = {
    mainTitle: "", // No se muestra título principal en la imagen
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

  return (
    <div className="app-container">
      {/* Mostrar el nombre del usuario en la parte superior si está logueado */}
      {user && (
        <div style={{width: '100%', background: '#f3f3f3', padding: '8px 0', textAlign: 'center', fontWeight: 'bold'}}>
          Bienvenido, {user.nombre} {user.apellido}
        </div>
      )}
      <Header isHomePage={true} />
      {/* Mostrar datos del usuario si está logueado */}
  {/* ...existing code... */}
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
}

export default HomePage;
