import './Header.css';
import { LuSearch, LuMenu, LuUser, LuPhone } from 'react-icons/lu';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  isHomePage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isHomePage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  const handleUserIconClick = () => {
    navigate('/login');
  };

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
      <div className="header-right">
        <span className="phone-number"><LuPhone size={16} /> +44 207 426 9888</span>
        <a href="#" className="user-icon" onClick={handleUserIconClick}><LuUser size={20} /></a>
        <button className="enquire-button">CONSULTAR AHORA</button>
      </div>
    </header>
  );
};
