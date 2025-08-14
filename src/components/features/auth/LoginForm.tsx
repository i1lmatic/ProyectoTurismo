import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../ui/Input/Input';
import { Button } from '../../ui/Button/Button';
import './LoginForm.css';

export interface LoginFormProps {
  onSubmit?: (credentials: { email: string; password: string }) => void;
  loading?: boolean;
  error?: string;
  title?: string;
  subtitle?: string;
  showForgotPassword?: boolean;
  showRegisterLink?: boolean;
  onForgotPassword?: () => void;
  onRegisterClick?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading = false,
  error,
  title = 'Iniciar Sesión',
  subtitle = 'Ingresa a tu cuenta de UBIKHA',
  showForgotPassword = true,
  showRegisterLink = true,
  onForgotPassword,
  onRegisterClick,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validación de email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('El correo electrónico es requerido');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Ingresa un correo electrónico válido');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!password) {
      setPasswordError('La contraseña es requerida');
      return false;
    }
    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const [backendError, setBackendError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBackendError(null);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    if (isEmailValid && isPasswordValid) {
      try {
        const response = await fetch('http://localhost:8000/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
          // Guardar token y email en localStorage
          if (data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('user_email', email);
          }
          if (onSubmit) onSubmit({ email, password });
          navigate('/'); // Redirige al HomePage
        } else {
          setBackendError(data.detail || 'Error de autenticación');
        }
      } catch (err) {
        setBackendError('No se pudo conectar al servidor');
      }
    }
  };


  return (
    <div className="ubikha-login-form">
      <div className="ubikha-login-form__header">
        <h2 className="ubikha-login-form__title">{title}</h2>
        <p className="ubikha-login-form__subtitle">{subtitle}</p>
      </div>

      {error && (
        <div className="ubikha-login-form__error">
          {error}
        </div>
      )}
      {backendError && (
        <div className="ubikha-login-form__error">
          {backendError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="ubikha-login-form__form">
        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailError}
          errorMessage={emailError}
          required
          name="email"

        />

        <Input
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          errorMessage={passwordError}
          required
          name="password"
          autoComplete="current-password"
        />

        {showForgotPassword && (
          <div className="ubikha-login-form__forgot">
            <button
              type="button"
              className="ubikha-login-form__forgot-link"
              onClick={onForgotPassword}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
        >
          Iniciar Sesión
        </Button>
      </form>

      {showRegisterLink && (
        <div className="ubikha-login-form__register">
          <span>¿No tienes cuenta? </span>
          <button
            type="button"
            className="ubikha-login-form__register-link"
            onClick={() => navigate('/register')}
          >
            Regístrate aquí
          </button>
        </div>
      )}
    </div>
  );
};
