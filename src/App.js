import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Inicio from './componentes/Inicio';
import Login from './componentes/Login';
import Servicios from './componentes/Servicios';
import Localizanos from './componentes/Localizanos';
import Contacto from './componentes/Contacto';
import Conocemas from './componentes/Conocemas';
import Registro from './componentes/Registro';
import Persona from './componentes/Persona';
import Agendar from './componentes/Agendar';
import Medico from './componentes/Medico';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Localizanos" element={<Localizanos />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Conocemas" element={<Conocemas />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Persona" element={<Persona />} />
          <Route path="/Agendar" element={<Agendar />} />
          <Route path="/Medico" element={<Medico />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
