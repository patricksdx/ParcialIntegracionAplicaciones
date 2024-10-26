const express = require('express');
const path = require('path');
const app = express();

// Configurar el motor de vistas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar las rutas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).render('layout', { title: '404 Not Found', body: '404' });
});

// Middleware para manejar otros errores (opcional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Error', message: 'Ocurrió un error interno.' });
});

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});