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

module.exports = router;
