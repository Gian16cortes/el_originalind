import React from 'react'
import { Link } from 'react-router-dom'



import hospital from '../images/hospital.png';
import iniciosesion from '../images/iniciosesion.png';
import youtube from '../images/yout.png';
import facebook from '../images/face.png';
import instagram from '../images/insta.webp';
import twitter from '../images/twit.png';


const Contacto = () => {
  return (
  <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TuDoctorOnline.com</title>
  <link rel="stylesheet" to="contacto.css" />
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
    <div className="container-fluid pt-5">
      <div className="container contact-container">
        <div className="section-title text-center mb-4">
          <h4 className="text-primary text-uppercase">Contáctenos</h4>
          <h1 className="display-4">No dudes en contactarnos</h1>
        </div>
        <div className="row mb-4">
          {/* Información de Contacto */}
          <div className="col-md-6 mb-4">
            <div className="contact-column">
              <i className="fa fa-map-marker-alt fa-2x" />
              <div>
                <h4 className="font-weight-bold">Dirección</h4>
                <p className="mb-0">Calle 52 #11-54 Chapinero</p>
              </div>
            </div>
            <div className="contact-column mt-3">
              <i className="fa fa-phone-alt fa-2x" />
              <div>
                <h4 className="font-weight-bold">Número de celular</h4>
                <p className="mb-0">+57 312 324 4556</p>
              </div>
            </div>
            <div className="contact-column mt-3">
              <i className="far fa-envelope fa-2x" />
              <div>
                <h4 className="font-weight-bold">Correo electrónico</h4>
                <p className="mb-0">TuDoctorOnline@gmail.com</p>
              </div>
            </div>
          </div>
          {/* Formulario de Contacto */}
          <div className="col-md-6 mb-4">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="font-weight-bold">Nombre</label>
                <input type="text" id="name" className="form-control form-control-lg" placeholder="Tu Nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold">Correo electrónico</label>
                <input type="email" id="email" className="form-control form-control-lg" placeholder="Tu Correo" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="font-weight-bold">Mensaje</label>
                <textarea id="message" className="form-control form-control-lg" rows={5} placeholder="Tu Mensaje" defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
        {/* Mapa de Google */}
        <div className="map-container mt-4">
          <Link src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0379524157175!2d-74.06223548574613!3d4.651411642434018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a0e43edbcd7%3A0x28efac8e860b15f!2sCalle%2052%20%2311-54%2C%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1672541873526!5m2!1ses!2sco" width="100%" height={150} style={{border: 0}} allowFullScreen loading="lazy" />
        </div>
      </div>
    </div>
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
  </header>
</div>

    
  )
}

export default Contacto