import './feature.css';

import React from 'react';
import './feature.css';

export interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface FeaturesProps {
  mainTitle?: string;
  items: FeatureItem[];
}

export const Features: React.FC<FeaturesProps> = ({ mainTitle, items }) => {
  return (
    <section className="features-section">
      {mainTitle && <h2 className="features-main-title">{mainTitle}</h2>}
      <div className="features-grid">
        {items.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <i className={item.icon}></i>
            </div>
            <h3 className="feature-title">{item.title}</h3>
            {item.subtitle && <p className="feature-subtitle">{item.subtitle}</p>}
            <p className="feature-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
