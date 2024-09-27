import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const usuarios = [
    {
      "Nombre": "Gian",
      "Rol": "Paciente",
      "Correo": "gigiluicort@gmail.com",
      "Contraseña": "160703",
      // Resto de datos...
    },
    // Aquí se agregan los médicos y asesores
    {
      "Nombre": "Dr. Pedro",
      "Rol": "Medico",
      "Correo": "pedro.medico@gmail.com",
      "Contraseña": "med456",
      // Resto de datos...
    },
    {
      "Nombre": "Asesor 1",
      "Rol": "Asesor",
      "Correo": "asesor1@gmail.com",
      "Contraseña": "asesorpass",
      // Resto de datos...
    },
    // Otros usuarios...
  ];

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }),
      });

      const data = await response.json();

      if (response.ok) {
        setError(null);
        if (data.rol === 'Medico') {
          navigate('/medico', { state: { nombre: data.nombre } });
        } else if (data.rol === 'Asesor') {
          navigate('/asesor', { state: { nombre: data.nombre } });
        } else {
          navigate('/persona', { state: { nombre: data.nombre } });
        }
      } else {
        const usuario = usuarios.find(user => user.Correo === correo && user.Contraseña === contraseña);
        
        if (usuario) {
          setError(null);
          if (usuario.Rol === 'Medico') {
            navigate('/medico', { state: { nombre: usuario.Nombre } });
          } else if (usuario.Rol === 'Asesor') {
            navigate('/asesor', { state: { nombre: usuario.Nombre } });
          } else {
            navigate('/persona', { state: { nombre: usuario.Nombre } });
          }
        } else {
          setError('Correo o contraseña incorrectos');
        }
      }
    } catch (err) {
      setError('Error en la conexión con el servidor.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="textbox">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <label htmlFor="contraseña">Contraseña</label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">Iniciar Sesión</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
