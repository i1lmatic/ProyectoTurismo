
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/features/auth/LoginForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    alert("Navegando a la página de registro (aún por crear)...");
    navigate('/registro');
  };

  return (
    <main className={styles.loginPageMain}>
      <LoginForm 
        title="Iniciar Sesión"
        subtitle="Accede a tu cuenta para continuar tu aventura"
        onRegisterClick={handleRegisterClick}
      />
    </main>
  );
}

export default LoginPage;
