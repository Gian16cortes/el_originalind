import { Link } from 'react-router-dom';
import '../styles/Persona.css';
import React from 'react'

import hospital from '../images/hospital.png';
import salirse from '../images/salirse.png';
import vacuna from '../images/vacuna.jpg';
import nuevo from '../images/nuevo.jpg';
import conferencia from '../images/conferencia.jpg';
import facebook from '../images/face.png';
import instagram from '../images/insta.webp';
import twitter from '../images/twit.png';
import youtube from '../images/yout.png';


const Persona = () => {
  return (
   <div>
 
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
        <Link to="/" className="logout-button">
  <img src={salirse} alt="Logo sesión" className="logo_sesion" />
</Link>

      </div>
    </nav>

   {/* Sección de bienvenida */}
   <section className="welcome-container" />
    <h1>Bienvenido a TuDoctorOnline</h1>
    <p class="center-text">Hola, ¿en qué te podemos colaborar?</p>

    <div className="button-container">
    <a href="/contacto" className="btn">Contactar Soporte</a>
    <a href="/Agendar" className="btn">Agendar cita</a>
   
</div>

<section id="anuncios" className="announcements">
  <h2>Anuncios Importantes</h2>
  <div className="announcement-list">
    <div className="announcement-item">
      <div className="announcement-icon">💉</div>
      <div className="announcement-content">
        <h3>Nueva campaña de vacunación</h3>
        <p>Disponible a partir del próximo mes. No olvides consultar con tu médico para más detalles.</p>
      </div>
    </div>
    <div className="announcement-item">
      <div className="announcement-icon">📅</div>
      <div className="announcement-content">
        <h3>Actualización en las políticas</h3>
        <p>Se han modificado las políticas de cancelación de citas. Revisa nuestra página para conocer las nuevas directrices.</p>
      </div>
    </div>
    <div className="announcement-item">
      <div className="announcement-icon">⏰</div>
      <div className="announcement-content">
        <h3>Horario extendido de atención</h3>
        <p>A partir de este fin de semana, nuestro servicio de atención telefónica estará disponible durante todo el día.</p>
      </div>
    </div>
  </div>
</section>

 
<section className="news-section">
  <h2>Últimas Noticias</h2>
  <div className="news-container">
    <article className="news-card">
      <img src={vacuna} alt="Noticia 1" />
      <h3>Avance en la Investigación de Vacunas</h3>
      <p>Acaban de llegar los últimos informes sobre la actualización de la vacuna para frenar la viruela del mono. En popayán ya la están poniendo a prueba.</p>
      
    </article>
    <article className="news-card">
    <img src={nuevo} alt="Noticia 2" />
      <h3>Nuevo Centro Medico de Atención Abierto</h3>
      <p>Nos complace anunciar la apertura de un nuevo centro de atención en Kennedy para brindarte un mejor servicio.</p>
      
    </article>
    <article className="news-card">
    <img src={conferencia} alt="Noticia 3" />
      <h3>Conferencia sobre Salud Preventiva</h3>
      <p>Participa en nuestra próxima conferencia sobre la importancia de la salud preventiva y cómo puede mejorar tu bienestar del 16 de octubre al 23 de noviembre."Para más información dirigete al centro medico mas cercano".</p>
      
    </article>
  </div>
</section>



 
 
<section class="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div class="faq-container">
            <div class="faq-item">
                <button class="faq-question">¿Cómo agendar una cita?</button>
                <div class="faq-answer">
                    <p>Para agendar una cita, puede hacerlo a través de nuestro portal en línea o llamando a nuestro centro de atención al cliente.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">¿Qué servicios ofrece la IPS?</button>
                <div class="faq-answer">
                    <p>Ofrecemos una amplia gama de servicios médicos, incluyendo consultas generales, especialidades, exámenes de diagnóstico y atención de urgencias.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">¿Cómo puedo solicitar una historia clínica?</button>
                <div class="faq-answer">
                    <p>Para solicitar una historia clínica, debe presentar una solicitud formal en nuestra oficina de atención al paciente con una identificación válida.</p>
                </div>
            </div>
            <div class="faq-item">
                <button class="faq-question">¿Qué hacer en caso de una emergencia médica?</button>
                <div class="faq-answer">
                    <p>En caso de una emergencia médica, dirígete al servicio de urgencias más cercano o llama a nuestro número de emergencias para recibir asistencia inmediata.</p>
                </div>
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

export default Persona



