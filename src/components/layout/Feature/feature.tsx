import './feature.css';

// Define la estructura de una sola característica
interface Feature {
  title: string;
  description: string;
  icon: string; // La clase del ícono, ej: 'fa-solid fa-phone'
}

// Define las props que el componente principal va a recibir
export interface FeaturesProps {
  mainTitle: string;
  items: Feature[]; // Un array (lista) de características
}

export const Features = ({ mainTitle, items }: FeaturesProps) => {
  return (
    <section className="features-section">
      <h2 className="section-title">{mainTitle}</h2>
      <div className="features-grid">
        {/*
        Usamos el método .map() para recorrer la lista de 'items'
        y crear una tarjeta para cada uno, evitando repetir código.
        */}
        {items.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};