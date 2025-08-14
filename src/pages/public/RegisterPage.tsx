import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '../../components/ui/Button/Button';
import styles from './RegisterPage.module.css';

export const RegisterPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [pais, setPais] = React.useState('');
  const [ciudad, setCiudad] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !nombre || !apellido || !password) {
      setError('Email, nombre, apellido y contraseña son obligatorios');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          nombre,
          apellido,
          password,
          telefono: telefono || undefined,
          pais: pais || undefined,
          ciudad: ciudad || undefined
        })
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/login');
      } else {
        setError(data.detail || 'Error al registrar usuario');
      }
    } catch {
      setError('No se pudo conectar al servidor');
    }
  };

  return (
    <main className={styles.loginPageMain}>
  <div className={styles.registerCard + ' kandamo-login-form'}>
      <div className="kandamo-login-form__header">
        <h2 className="kandamo-login-form__title">Registrarse</h2>
        <p className="kandamo-login-form__subtitle">Crea tu cuenta en KANDAMO</p>
      </div>
      {error && <div className="kandamo-login-form__error">{error}</div>}
      <form onSubmit={handleRegister} className="kandamo-login-form__form">
        <Input
          type="email"
          label="Correo electrónico"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
        />
        <Input
          type="text"
          label="Nombre"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          name="nombre"
        />
        <Input
          type="text"
          label="Apellido"
          placeholder="Tu apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
          name="apellido"
        />
        <Input
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          name="password"
          autoComplete="new-password"
        />
        <Input
          type="text"
          label="Teléfono (opcional)"
          placeholder="Tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          name="telefono"
        />
        <Input
          type="text"
          label="País (opcional)"
          placeholder="Tu país"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          name="pais"
        />
        <Input
          type="text"
          label="Ciudad (opcional)"
          placeholder="Tu ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          name="ciudad"
        />
        <Button type="submit" variant="primary" size="lg" fullWidth>
          Registrarse
        </Button>
      </form>
      <div className="kandamo-login-form__register">
        <span>¿Ya tienes cuenta? </span>
        <button type="button" className="kandamo-login-form__register-link" onClick={() => navigate('/login')}>
          Inicia sesión aquí
        </button>
      </div>
      </div>
    </main>
  );
};

export default RegisterPage;
