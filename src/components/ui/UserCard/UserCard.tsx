import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserCard.css';

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
  onLogout: () => void;
  esOperador?: boolean;
  esVerificado?: boolean;
  telefono?: string;
  pais?: string;
  ciudad?: string;
}

const getInitial = (name: string) => {
  if (!name) return '?';
  return name.trim()[0].toUpperCase();
};

export const UserCard: React.FC<UserCardProps> = ({ name, email, avatarUrl, onLogout, esOperador, esVerificado, telefono, pais, ciudad }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card">
      <div className="user-card__avatar">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
        ) : (
          getInitial(name)
        )}
      </div>
      <div className="user-card__name">{name}</div>
      <div className="user-card__email">{email}</div>
      {esOperador ? (
        <div className="user-card__role" style={{color: '#2980b9', fontWeight: 600, marginBottom: 8}}>
          Operador turístico {esVerificado ? '✔️' : '(pendiente)'}
        </div>
      ) : (
        <button
          className="user-card__operator"
          style={{background: '#2980b9', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', cursor: 'pointer', marginBottom: 8, fontWeight: 600}}
          onClick={() => navigate('/convert-to-operator')}
        >
          ¿Eres empresa? Conviértete en operador
        </button>
      )}
      <button
        className="user-card__logout"
        onClick={onLogout}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default UserCard;
