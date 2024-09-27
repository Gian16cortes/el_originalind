import React, { useState, useEffect } from 'react';
import '../styles/Agendar.css';


const AgendarCitas = () => {
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    autorizacion: '',
    medico: '',
    motivo: '',
    tipoConsulta: '',
    contacto: '',
    metodoPago: '',
  });
  
  const [citas, setCitas] = useState([]);
  const [historialCitas, setHistorialCitas] = useState([]); // New state for appointment history

  // Load existing appointments from localStorage on component mount
  useEffect(() => {
    const citasPrevias = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(citasPrevias);
    const historialPrevio = JSON.parse(localStorage.getItem('historialCitas')) || []; // Load history
    setHistorialCitas(historialPrevio);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new appointment to the existing ones
    const nuevasCitas = [...citas, { ...formData, estado: 'pendiente', id: citas.length }];

    // Save the updated appointments to localStorage
    localStorage.setItem('citas', JSON.stringify(nuevasCitas));
    setCitas(nuevasCitas); // Update the state to reflect the new appointment

    // Add the new appointment to the history
    const nuevasHistorialCitas = [...historialCitas, { ...formData, estado: 'pendiente', id: historialCitas.length }];
    localStorage.setItem('historialCitas', JSON.stringify(nuevasHistorialCitas)); // Save history to localStorage
    setHistorialCitas(nuevasHistorialCitas); // Update the history state

    // Reset form data
    setFormData({
      fecha: '',
      hora: '',
      autorizacion: '',
      medico: '',
      motivo: '',
      tipoConsulta: '',
      contacto: '',
      metodoPago: '',
    });
  };

  const confirmarCita = (id) => {
    setCitas(citas.map(cita => 
      cita.id === id ? { ...cita, estado: 'confirmada' } : cita
    ));
  };

  const cancelarCita = (id) => {
    setCitas(citas.map(cita => 
      cita.id === id ? { ...cita, estado: 'cancelada' } : cita
    ));
  };

  return (
    <div>
      <header>
        <h1>IPS Salud</h1>
        <p>Tu bienestar es nuestra prioridad</p>
      </header>
      <div className="container">
        <h1>Agendar Cita Médica</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fecha">Fecha*</label>
          <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required />
          
          <label htmlFor="hora">Hora*</label>
          <input type="time" id="hora" name="hora" value={formData.hora} onChange={handleChange} required />
          
          <label htmlFor="autorizacion">Número de Autorización del Servicio Médico*</label>
          <input type="text" id="autorizacion" name="autorizacion" value={formData.autorizacion} onChange={handleChange} required />
          
          <label htmlFor="medico">Selecciona un Médico*</label>
          <select id="medico" name="medico" value={formData.medico} onChange={handleChange} required>
            <option value="">Selecciona un Médico</option>
            <option value="medico1">Dr. Juan Pérez</option>
            <option value="medico2">Dra. María López</option>
            <option value="medico3">Dr. Carlos Gómez</option>
          </select>
          
          <label htmlFor="motivo">Motivo de la Cita*</label>
          <textarea id="motivo" name="motivo" value={formData.motivo} onChange={handleChange} required />

          <label htmlFor="tipo-consulta">Tipo de Consulta*</label>
          <select id="tipo-consulta" name="tipoConsulta" value={formData.tipoConsulta} onChange={handleChange} required>
            <option value="">Selecciona el Tipo de Consulta</option>
            <option value="general">Medicina general</option>
            <option value="dermatologia">Dermatología</option>
            <option value="cardiologia">Cardiología</option>
            <option value="otolaringologia">Otolaringología</option>
            <option value="neurologia">Neurología</option>
            <option value="pediatria">Pediatría</option>
            <option value="urologia">Urología</option>
            <option value="fisioterapia">Fisioterapia</option>
            <option value="psiquiatria">Psiquiatría</option>
          </select>
          
          <label htmlFor="contacto">Datos de Contacto (Teléfono o Correo Electrónico)*</label>
          <input type="text" id="contacto" name="contacto" value={formData.contacto} onChange={handleChange} required />
          
          <label htmlFor="metodo-pago">Método de Pago*</label>
          <select id="metodo-pago" name="metodoPago" value={formData.metodoPago} onChange={handleChange} required>
            <option value="">Selecciona un Método de Pago</option>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="efectivo">Efectivo</option>
            <option value="seguro">Seguro Médico</option>
          </select>

          <button type="submit">Agendar Cita</button>
        </form>

        <section id="citas">
          <h2>Citas Agendadas</h2>
          {citas.length > 0 ? (
            citas.map((cita, index) => (
              <div key={index} className={`cita ${cita.estado}`}>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Médico:</strong> {cita.medico}</p>
                <p><strong>Tipo de Consulta:</strong> {cita.tipoConsulta}</p>
                <p><strong>Motivo:</strong> {cita.motivo}</p>
                
                {/* Conditionally render the buttons based on the appointment status */}
                {cita.estado === 'pendiente' && (
                  <>
                    <button className="confirmar" onClick={() => confirmarCita(cita.id)}>Confirmar</button>
                    <button className="cancelar" onClick={() => cancelarCita(cita.id)}>Cancelar</button>
                  </>
                )}
                {cita.estado === 'confirmada' && (
                  <p>Cita confirmada.</p>
                )}
                {cita.estado === 'cancelada' && (
                  <p>Cita cancelada.</p>
                )}
              </div>
            ))
          ) : (
            <p>No hay citas agendadas.</p>
          )}
        </section>

        <section id="historial-citas">
          <h2>Historial de Citas</h2>
          {historialCitas.length > 0 ? (
            historialCitas.map((cita, index) => (
              <div key={index} className={`cita ${cita.estado}`}>
                <p><strong>Fecha:</strong> {cita.fecha}</p>
                <p><strong>Médico:</strong> {cita.medico}</p>
                <p><strong>Tipo de Consulta:</strong> {cita.tipoConsulta}</p>
                <p><strong>Motivo:</strong> {cita.motivo}</p>
                <p><strong>Estado:</strong> {cita.estado}</p>
              </div>
            ))
          ) : (
            <p>No hay citas en el historial.</p>
          )}
        </section>
      </div>

      <footer className="footer-main">
        {/* Aquí el contenido del footer */}
      </footer>
    </div>
  );
};

export default AgendarCitas;