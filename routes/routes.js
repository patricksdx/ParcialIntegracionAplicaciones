const express = require('express');
const router = express.Router();

// Ruta para la página principal 
router.get('/', (req, res) => {
    res.render('layout', { title: 'Home', body: 'index' });
});

// Ruta para la página de productos
router.get('/products', (req, res) => {
    res.render('layout', { title: 'Products', body: 'products' });
});

// Ruta para la página de Blog
router.get('/blog', (req, res) => {
    res.render('layout', { title: 'Blog', body: 'blog' });
});

// Ruta para la página About
router.get('/about', (req, res) => {
    res.render('layout', { title: 'About', body: 'about' });
});

// Ruta para la página de Usuario
router.get('/user', (req, res) => {
    res.render('layout', { title: 'User', body: 'user' });
});

module.exports = router;