
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Servicios.css';


import hospital from '../images/hospital.png';
import inicio from '../images/iniciosesion.png';
import servicio from '../images/img4.png';
import pediatria from '../images/pediatria.png';
import mgeneral from '../images/mgeneral.png';
import ginecologia from '../images/ginecologia.png';
import cardiologia from '../images/cardiologia.png';
import facebook from '../images/face.png';
import instagram from '../images/insta.webp';
import twitter from '../images/twit.png';
import youtube from '../images/yout.png';

const servicios = () => {
  return (
   <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TuDoctorOnline.com</title>
  <link rel="stylesheet" to="servicios.css" />
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
        <img src={inicio} alt="Logo sesion" className="logo_sesion" />Iniciar Sesión
        </Link>
      </div>
    </nav>
  </header>
  <main>
    <div className="service-container">
      <div className="image-section">
      <img src={servicio} alt="servicio" className="service-image" />
      </div>
      <div className="service-section">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase">Algunos de Nuestros Servicios</h4>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="service-item">
              <img src={pediatria} alt="pediatria" className="icon" />
                <div>
                  <h2>Pediatría</h2>
                  <p>Cuidado especializado para la salud y desarrollo de los niños.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="service-item">
              <img src={mgeneral} alt="mgeneral" className="icon" />
                <div>
                  <h2>Medicina General</h2>
                  <p>Atención médica integral para el cuidado de tu salud.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="service-item">
              <img src={ginecologia} alt="ginecologia" className="icon" />
                <div>
                  <h2>Ginecología</h2>
                  <p>Atención integral para la salud de la mujer.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="service-item">
              <img src={cardiologia} alt="cardiologia" className="icon" />
                <div>
                  <h2>Cardiología</h2>
                  <p>Diagnóstico y tratamiento de enfermedades cardiovasculares.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
        <h6 className="text-white text-uppercase">Lunes - Sabado</h6>
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
    <p className="mb-2 text-white">Todos los derechos reservados © TuDoctorOnline 2024 © <Link className="font-weight-bold" to="#" /></p>
  </div>
  {/* Footer End */}
</div>

    
  )
}

export default servicios