import './Header.css';
import { LuSearch, LuMenu, LuUser, LuPhone } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UserCard from '../../ui/UserCard/UserCard';

interface HeaderProps {
  isHomePage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isHomePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const isLoginPage = location.pathname === '/login';

  // Estado para mostrar/ocultar la tarjeta flotante
  const [showCard, setShowCard] = useState(false);
  // Estado para el usuario logueado
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      fetch('http://localhost:8000/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data) setUser(data);
          else setUser(null);
        })
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, []);

  // const handleUserIconClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   if (user) {
  //     setShowCard(!showCard);
  //   } else {
  //     navigate('/login');
  //   }
  // };

  const handleLogoClick = () => {
    navigate('/');
  };

  const headerStyle = {
    backgroundColor: isHomePage ? 'transparent' : 'var(--color-deep-blue)',
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="header-left">
        <div className="logo" onClick={handleLogoClick} style={{cursor: 'pointer'}}>
          <span className="logo-text">KANDAMO</span>
          <span className="logo-icon"></span> {/* Icono rosa */}
        </div>
      </div>
      <nav className="header-nav">
        <a href="#" className="nav-link"><LuSearch size={20} /></a>
        <a href="#" className="nav-link">DESTINOS</a>
        <a href="#" className="nav-link">EXPERIENCIAS</a>
        <a href="#" className="nav-link">ACERCA DE</a>
        <a href="#" className="nav-link"><LuMenu size={20} /></a>
      </nav>
      <div className="header-right" style={{ position: 'relative' }}>
        <span className="phone-number"><LuPhone size={16} /> +44 207 426 9888</span>
        {/* Si el usuario está autenticado, muestra solo el avatar flotante, si no, muestra el icono de login */}
        {user ? (
          <div
            className="user-avatar-header"
            style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
            onClick={() => setShowCard((prev) => !prev)}
          >
            <img
              src={user.avatar_url || `https://ui-avatars.com/api/?name=${user.nombre || user.email}`}
              alt="avatar"
              style={{ width: 40, height: 40, borderRadius: "50%", background: "#e1e4e8" }}
            />
            {/* Panel flotante */}
            {showCard && (
              <div
                id="usercard-panel-header"
                style={{ position: "absolute", top: 0, right: 0, zIndex: 2000 }}
              >
                <UserCard
                  name={user.nombre ? `${user.nombre} ${user.apellido || ''}` : user.email || ''}
                  email={user.email || ''}
                  avatarUrl={user.avatar_url}
                  esOperador={user.es_operador}
                  esVerificado={user.es_verificado}
                  telefono={user.telefono}
                  pais={user.pais}
                  ciudad={user.ciudad}
                  onLogout={() => {
                    localStorage.removeItem('access_token');
                    setShowCard(false);
                    window.location.reload();
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div
            className="header__user-info"
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: 10 }}
            onClick={() => navigate('/login')}
          >
            <LuUser size={36} />
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Iniciar sesión</span>
          </div>
        )}
      </div>
    </header>
  );
}
