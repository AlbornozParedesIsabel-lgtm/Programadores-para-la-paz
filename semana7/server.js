const express = require('express');
const app = express();

// Middleware necesario para entender datos en formato JSON
app.use(express.json());

// Array en memoria para simular nuestra base de datos temporal
let reportes = [];

// Ruta GET para listar todos los reportes comunitarios
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST para crear y guardar un nuevo reporte
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// Iniciar el servidor local en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
