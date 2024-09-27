import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Conocemas.css';



import hospital from '../images/hospital.png';
import iniciosesion from '../images/iniciosesion.png';
import youtube from '../images/yout.png';
import facebook from '../images/face.png';
import instagram from '../images/insta.webp';
import twitter from '../images/twit.png';
import hospital2 from '../images/hospital2.jpg';
import medico1 from '../images/medico1.jpg';
import medico2 from '../images/medico2.webp';
import medico3 from '../images/medico3.jpg';


const conocemas = () => {
  return (
 <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>TuDoctorOnline.com</title>
  <link rel="stylesheet" to="conocemas.css" />
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
  {/* Sección de presentación */}
  <section id="about" className="hero-section">
    <div className="hero-content">
      <h1>Sobre nosotros...</h1>
      <p>Fundada en 1998, nuestra IPS de salud ha sido un pilar en la comunidad, brindando atención médica integral y de alta calidad. Desde nuestros inicios, nos hemos comprometido a ofrecer servicios de salud con un enfoque humano y personalizado, adaptándonos a las necesidades cambiantes de nuestros pacientes. Con más de dos décadas de experiencia, hemos crecido para incluir una amplia gama de especialidades médicas y contamos con un equipo de profesionales altamente capacitados y dedicados a mejorar la calidad de vida de nuestros pacientes. Nuestra historia es un reflejo de nuestro compromiso continuo con la excelencia en la atención médica, siempre buscando innovar y expandir nuestros servicios para asegurar que cada persona que confía en nosotros reciba el mejor cuidado posible.</p>
    </div>
    <div className="hero-image">
    <img src={hospital2} alt="Logo Hospital2" className="hero-image" />
    </div>
  </section>
  {/* Sección de servicios */}
  <section id="services" className="services-section">
    <h2>¿En que nos enfocamos?</h2>
    <div className="services-container">
      <div className="service-card">
        <div className="service-icon">🏥</div>
        <h3>Atención Primaria</h3>
        <p>Brindamos atención primaria con un enfoque en la prevención y el bienestar general de nuestros pacientes.</p>
      </div>
      <div className="service-card">
        <div className="service-icon">🔬</div>
        <h3>Laboratorio Clínico</h3>
        <p>Contamos con un laboratorio clínico equipado con la última tecnología para realizar análisis precisos.</p>
      </div>
      <div className="service-card">
        <div className="service-icon">💉</div>
        <h3>Vacunación</h3>
        <p>Ofrecemos servicios de vacunación para todas las edades, asegurando la protección de tu salud.</p>
      </div>
    </div>
  </section>
  {/* Sección de médicos destacados */}
  <section id="doctors" className="doctors-section">
    <h2>Médicos Destacados</h2>
    <div className="doctors-container">
      <div className="doctor-card">
      <img src={medico1} alt="Logo medico" className="doctor-card" />
        <h3>Dr. Juan Pérez</h3>
        <p>Especialista en cardiología con más de 20 años de experiencia.</p>
      </div>
      <div className="doctor-card">
      <img src={medico2} alt="Logo medico2" className="doctor-card" />
        <h3>Dra. María Gómez</h3>
        <p>Ginecóloga y obstetra con un enfoque en la salud integral de la mujer.</p>
      </div>
      <div className="doctor-card">
      <img src={medico3} alt="Logo medico3" className="doctor-card" />
        <h3>Dr. Carlos López</h3>
        <p>Ortopedista especializado en lesiones deportivas y rehabilitación.</p>
      </div>
    </div>
  </section>
  {/* Sección de testimonios */}
  <section id="testimonials" className="testimonials-section">
    <h2>Testimonios de Pacientes</h2>
    <div className="testimonials-container">
      <div className="testimonial-card">
        <p>"Excelente atención, me sentí muy bien cuidado durante todo mi tratamiento."</p>
        <h4>- Ana Martínez</h4>
      </div>
      <div className="testimonial-card">
        <p>"Los médicos son muy profesionales y el servicio es de primera clase."</p>
        <h4>- Luis Rodríguez</h4>
      </div>
      <div className="testimonial-card">
        <p>"Gracias a TuDoctorOnline, mi recuperación fue rápida y eficiente."</p>
        <h4>- Claudia Fernández</h4>
      </div>
    </div>
  </section>
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

export default conocemas