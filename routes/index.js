const express = require('express');
const router = express.Router();

// Ruta para la página principal (homepage)
router.get('/', (req, res) => {
    res.render('layout', { title: 'Home', body: 'index' }); // Renderiza el layout con 'index' como cuerpo
});

// Ruta para la página de productos
router.get('/products', (req, res) => {
    res.render('layout', { title: 'Products', body: 'products' }); // Renderiza el layout con 'products' como cuerpo
});

// Ruta para la página de Blog
router.get('/blog', (req, res) => {
    res.render('layout', { title: 'Blog', body: 'blog' }); // Renderiza el layout con 'blog' como cuerpo
});

// Ruta para la página About
router.get('/about', (req, res) => {
    res.render('layout', { title: 'About', body: 'about' }); // Renderiza el layout con 'about' como cuerpo
});

// Ruta para la página de Usuario
router.get('/user', (req, res) => {
    res.render('layout', { title: 'User', body: 'user' }); // Renderiza el layout con 'user' como cuerpo
});

module.exports = router;