import React, { useState, useEffect } from 'react';

// Simulamos la obtención de datos del API
const apiData = {
  "Usuarios": [
    {
      "Nombre": "Dr. jefer",
      "Rol": "Medico",
      "Correo": "jefer51@gmail.com",
      "Contraseña": "indigo51",
      "Id": "6",
      "Tipodocumento": "CC",
      "Numerodocumento": "1034567890",
      "Especialidad": "Ginecologo"
    },
    // ... otros usuarios
  ],
  "Citas": [
    {
      "Id": "1",
      "Fecha": "2024-09-01",
      "Hora": "09:00",
      "Estado": "Confirmada",
      "PacienteId": "1",
      "MedicoId": "6"
    },
    // ... otras citas
  ]
};

const Medico = ({ medicoId }) => {
  const [medico, setMedico] = useState(null);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Simula la carga de datos del API
    const medicoData = apiData.Usuarios.find(user => user.Id === medicoId && user.Rol === "Medico");
    setMedico(medicoData);

    const citasMedico = apiData.Citas.filter(cita => cita.MedicoId === medicoId);
    setCitas(citasMedico);
  }, [medicoId]);

  const handleAppointment = (id, newStatus) => {
    setCitas(citas.map(cita => 
      cita.Id === id ? { ...cita, Estado: newStatus } : cita
    ));
    // Aquí iría la lógica para actualizar el estado en el backend
  };

  if (!medico) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{medico.Nombre}</h1>
      <p style={{ marginBottom: '1rem' }}>Especialidad: {medico.Especialidad}</p>
      
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>Citas Agendadas</h2>
      {citas.map(cita => {
        const paciente = apiData.Usuarios.find(user => user.Id === cita.PacienteId);
        return (
          <div key={cita.Id} style={{ border: '1px solid #ccc', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {paciente ? paciente.Nombre : 'Paciente'}
            </h3>
            <div style={{ marginBottom: '0.5rem' }}>
              <span>Fecha: {cita.Fecha}</span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <span>Hora: {cita.Hora}</span>
            </div>
            {cita.Estado === 'Pendiente' ? (
              <div>
                <button 
                  onClick={() => handleAppointment(cita.Id, 'Confirmada')}
                  style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem', marginRight: '0.5rem', border: 'none', borderRadius: '0.25rem' }}
                >
                  Confirmar
                </button>
                <button 
                  onClick={() => handleAppointment(cita.Id, 'Cancelada')}
                  style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '0.25rem' }}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div style={{ backgroundColor: '#f0f0f0', padding: '0.5rem', borderRadius: '0.25rem' }}>
                <p>Esta cita está {cita.Estado.toLowerCase()}.</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Medico;