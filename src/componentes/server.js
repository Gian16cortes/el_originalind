const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let usuarios = []; // Aquí almacenaríamos los usuarios por ahora en memoria

// Ruta para registrar un nuevo usuario
app.post('/api/register', (req, res) => {
  const { nombre, correo, contraseña, tipodocumento, numerodocumento } = req.body;

  const usuarioExistente = usuarios.find(user => user.correo === correo);

  if (usuarioExistente) {
    return res.status(400).json({ error: 'El correo ya está registrado' });
  }

  const nuevoUsuario = {
    nombre,
    correo,
    contraseña,
    tipodocumento,
    numerodocumento
  };

  usuarios.push(nuevoUsuario);
  res.status(200).json({ message: 'Usuario registrado exitosamente' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
