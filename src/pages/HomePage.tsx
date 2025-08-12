import { Footer, Features, HeroSection } from '../components/layout';

function HomePage() {
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
      <HeroSection />
      
      <Features 
        mainTitle={featuresData.mainTitle}
        items={featuresData.items}
      />

      <Footer 
        companyName="Turismoo verde"
        year={2025}
      />
    </div>
  );
}

export default HomePage;

