import './Header.css';
import { LuSearch, LuMenu, LuUser, LuPhone } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
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
