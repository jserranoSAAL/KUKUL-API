// routes/detalleVentaRoutes.js
module.exports = app => {
    const detallesVenta = require('../controllers/DetalleVenta.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth;

    var router = require('express').Router();

    // Create a new DetalleVenta
    router.post('/', requireAuth, detallesVenta.create);

    // Retrieve all DetallesVenta
    router.get('/', requireAuth, detallesVenta.findAll);

    // Retrieve a single DetalleVenta with VentaID and ProductoID
    router.get('/:VentaID/:ProductoID', requireAuth, detallesVenta.findOne);

    // Delete a DetalleVenta with VentaID and ProductoID
    router.delete('/:VentaID/:ProductoID', requireAuth, detallesVenta.delete);

    app.use('/api/detalleVenta', router);
};
