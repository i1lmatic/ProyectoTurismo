import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/features/auth/LoginForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleRegisterClick = () => {
    alert("Navegando a la página de registro (aún por crear)...");
    navigate('/registro');
  };

  const handleLogin = async (credentials: { email: string; password: string }) => {
  console.log('Intentando login...');
  setLoading(true);
  setError(undefined);
    try {
      // Consumir el endpoint correcto
      const response = await axios.post('http://127.0.0.1:8000/auth/login', {
        email: credentials.email,
        password: credentials.password,
      });
      // Guardar el token en localStorage usando el campo correcto
      const token = response.data.access_token || response.data.token;
      if (token) {
        localStorage.setItem('access_token', token);
      } else {
        setError('No se recibió el token de acceso.');
        setLoading(false);
        return;
      }
  setLoading(false);
  // Depuración: mostrar log antes de redirigir
  console.log('Redirigiendo...');
  navigate('/');
    } catch (err: any) {
      console.error('Error en login:', err);
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else {
        setError('Credenciales incorrectas o error de conexión');
      }
      setLoading(false);
    }
  };

  return (
    <main className={styles.loginPageMain}>
      <LoginForm
        title="Iniciar Sesión"
        subtitle="Accede a tu cuenta para continuar tu aventura"
        onRegisterClick={handleRegisterClick}
        onSubmit={handleLogin}
        loading={loading}
        error={error}
      />
    </main>
  );
}

export default LoginPage;
