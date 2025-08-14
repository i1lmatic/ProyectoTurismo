import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ConvertToOperatorPageProps {
  user: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
    pais?: string;
    ciudad?: string;
  };
}

const ConvertToOperatorPage: React.FC<ConvertToOperatorPageProps> = ({ user }) => {
  const navigate = useNavigate();
  const [telefono, setTelefono] = useState(user.telefono || '');
  const [pais, setPais] = useState(user.pais || '');
  const [ciudad, setCiudad] = useState(user.ciudad || '');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const token = localStorage.getItem('access_token');
      const response = await fetch('http://localhost:8000/usuarios/me/convert-to-operator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ telefono, pais, ciudad })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(data.message || 'Solicitud enviada. Tu cuenta será revisada.');
      } else {
        setStatus(data.detail || 'No se pudo procesar la solicitud.');
      }
    } catch {
      setStatus('Error de conexión.');
    }
    setLoading(false);
  };

  return (
    <div className="convert-operator-page" style={{maxWidth: 400, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)', padding: 32}}>
      <h2 style={{textAlign: 'center', marginBottom: 24}}>Convertirse en Operador</h2>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <input type="text" value={user.nombre || ''} disabled style={{padding: 8, borderRadius: 6, border: '1px solid #ccc'}} placeholder="Nombre" />
        <input type="text" value={user.apellido || ''} disabled style={{padding: 8, borderRadius: 6, border: '1px solid #ccc'}} placeholder="Apellido" />
        <input type="email" value={user.email || ''} disabled style={{padding: 8, borderRadius: 6, border: '1px solid #ccc'}} placeholder="Email" />
        <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} style={{padding: 8, borderRadius: 6, border: '1px solid #ccc'}} placeholder="Teléfono" required />
        <input type="text" value={pais} onChange={e => setPais(e.target.value)} style={{padding: 8, borderRadius: 6, border: '1px solid #ccc'}} placeholder="País" required />
        <input type="text" value={ciudad} onChange={e => setCiudad(e.target.value)} style={{padding: 8, borderRadius: 6, border: '1px solid #ccc'}} placeholder="Ciudad" required />
        <button type="submit" style={{background: '#2980b9', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 0', fontWeight: 600, fontSize: '1rem', cursor: 'pointer'}} disabled={loading}>
          {loading ? 'Procesando...' : 'Solicitar conversión'}
        </button>
        {status && <div style={{color: status.includes('correctamente') ? '#27ae60' : '#c0392b', fontSize: '0.95rem', textAlign: 'center'}}>{status}</div>}
      </form>
      <button onClick={() => navigate('/')} style={{marginTop: 18, background: '#ccc', color: '#333', border: 'none', borderRadius: 6, padding: '8px 0', fontWeight: 500, fontSize: '1rem', cursor: 'pointer', width: '100%'}}>Volver</button>
    </div>
  );
};

export default ConvertToOperatorPage;
