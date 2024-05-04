// routes/ventaRoutes.js
module.exports = app => {
    const ventas = require('../controllers/Venta.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth;

    var router = require('express').Router();

    // Create a new Venta
    router.post('/', requireAuth, ventas.create);

    // Retrieve all Ventas
    router.get('/', requireAuth, ventas.findAll);

    // Retrieve a single Venta with id
    router.get('/:id', requireAuth, ventas.findOne);

    // Update a Venta with id
    router.put('/:id', requireAuth, ventas.update);

    // Delete a Venta with id
    router.delete('/:id', requireAuth, ventas.delete);

    app.use('/api/ventas', router);
};
