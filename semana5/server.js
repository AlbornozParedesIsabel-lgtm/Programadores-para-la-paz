const express = require('express');
const app = express();

// Middleware para permitir que el servidor entienda formato JSON en el body
app.use(express.json());

// --- Rutas GET (Pregunta 6) ---

app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// --- Ruta POST (Pregunta 8) ---

app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Inicio del servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
