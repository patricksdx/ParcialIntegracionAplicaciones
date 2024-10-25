const express = require('express');
const path = require('path');
const app = express();

// Configurar el motor de vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Cambiado a 'ejs'

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar las rutas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes); // Usar las rutas importadas

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});