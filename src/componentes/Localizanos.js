import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Localizanos.css';

import hospital from '../images/hospital.png';
import iniciosesion from '../images/iniciosesion.png';
import youtube from '../images/yout.png';
import facebook from '../images/face.png';
import instagram from '../images/insta.webp';
import twitter from '../images/twit.png';
import ubicacion from '../images/iconoubi.jpg';

const Localizanos = () => {
  return (
  <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TuDoctorOnline.com</title>
  <link rel="stylesheet" to="localizanos.css" />
  <header>
    <nav className="navbar">
      <div className="navbar-left">
      <img src={hospital} alt="Logo Hospital" className="logo" />
        <span className="brand-name">TuDoctorOnline</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Inicio</Link>
        <Link to="/Servicios">Servicios</Link>
        <Link to="/Localizanos">Localízanos</Link>
        <Link to="/Contacto">Contacto</Link>
        <Link to="/Login" className="login-button">
        <img src={iniciosesion} alt="Logo sesion" className="logo_sesion" />Iniciar Sesión
        </Link>
      </div>
    </nav>
  </header>
 
{/* Menu Start */}
<div className="container-fluid pt-5">
  <div className="container-fluid">
    <div className="section-title">
      <h4 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>Estamos cerca de ti</h4>
      <h1 className="display-4">Nuestros puntos son</h1>
    </div>

    <div className="location-container">
      {/* Organizado en 2 columnas */}
      <div className="location-item">
        <div className="location-icon">
          <img src={ubicacion} alt="Logo ubicacion" className="icon-img" />
        </div>
        <div className="location-info">
          <h4>Centro Médico TuDoctorOnline</h4>
          <p className="m-0">Carrera 7 #85-10, Bogotá L-S 7:00am a 7:00pm</p>
        </div>
      </div>

      <div className="location-item">
        <div className="location-icon">
          <img src={ubicacion} alt="Logo ubicacion" className="icon-img" />
        </div>
        <div className="location-info">
          <h4>Clínica TDO</h4>
          <p className="m-0">Avenida El Dorado #68C-80, Bogotá L-V 8:00am a 6:00pm</p>
        </div>
      </div>

      <div className="location-item">
        <div className="location-icon">
          <img src={ubicacion} alt="Logo ubicacion" className="icon-img" />
        </div>
        <div className="location-info">
          <h4>Droguería TDO</h4>
          <p className="m-0">Calle 72 #11-45, Bogotá L-D 24 horas</p>
        </div>
      </div>

      <div className="location-item">
        <div className="location-icon">
          <img src={ubicacion} alt="Logo ubicacion" className="icon-img" />
        </div>
        <div className="location-info">
          <h4>Droguería TuDoctorOnline</h4>
          <p className="m-0">Calle 134 #7B-83, Bogotá L-S 6:00am a 9:00pm</p>
        </div>
      </div>

      <div className="location-item">
        <div className="location-icon">
          <img src={ubicacion} alt="Logo ubicacion" className="icon-img" />
        </div>
        <div className="location-info">
          <h4>Centro Médico TuDoctorOnline</h4>
          <p className="m-0">Carrera 11 #81-60, Bogotá L-S 7:00am a 5:00pm</p>
        </div>
      </div>

      <div className="location-item">
        <div className="location-icon">
          <img src={ubicacion} alt="Logo ubicacion" className="icon-img" />
        </div>
        <div className="location-info">
          <h4>Hospital TDO</h4>
          <p className="m-0">Calle 10 #18-75, Bogotá L-D 24 horas</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Menu End */}

{/* Footer Start */}
<div className="footer">
  <div className="footer-section">
    <h4 className="text-white text-uppercase mb-4">Contáctanos</h4>
    <p><i className="fa fa-map-marker-alt mr-2" />calle 52 #11-54 Chapinero</p>
    <p><i className="fa fa-phone-alt mr-2" />+57 312 324 4556</p>
    <p className="m-0"><i className="fa fa-envelope mr-2" />TuDoctorOnline@gmail.com</p>
  </div>
  <div className="footer-section">
    <h4 className="text-white text-uppercase mb-4">Síguenos</h4>
    <p>Ponte al tanto de nuestros servicios a través de nuestras redes.</p>
    <div className="social-icons">
      <img src={youtube} alt="youtube" className="btn-lg-square" />
      <img src={facebook} alt="facebook" className="btn-lg-square" />
      <img src={instagram} alt="instagram" className="btn-lg-square" />
      <img src={twitter} alt="twitter" className="btn-lg-square" />
    </div>
  </div>
  <div className="footer-section">
    <h4 className="text-white text-uppercase mb-4">Horario de atención</h4>
    <div>
      <h6 className="text-white text-uppercase">Lunes - Sábado</h6>
      <p>6.00 AM - 8.00 PM</p>
      <h6 className="text-white text-uppercase">Domingos - Festivos</h6>
      <p>6.00 PM - 6.00 PM</p>
    </div>
  </div>
  <div className="footer-section">
    <h4 className="text-white text-uppercase mb-4">Sugerencias</h4>
    <p>Danos tu opinión</p>
    <div className="w-100">
      <div className="input-group">
        <input type="text" className="form-control border-light" placeholder="mensaje" />
        <div className="input-group-append">
          <button className="btn btn-primary font-weight-bold px-3">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="footer text-center text-white border-top">
  <p className="mb-2 text-white">Todos los derechos reservados © TuDoctorOnline 2024 © <Link className="font-weight-bold" to="#">TuDoctorOnline</Link></p>
</div>
{/* Footer End */}
</div>
  )
}

export default Localizanos;
