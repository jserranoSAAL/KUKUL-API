// routes/ClienteViajeProducto.js
module.exports = app => {
    const clienteViajeProducto = require('../controllers/ClienteViajeProducto.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth;

    var router = require('express').Router();

    // Create a new Cliente
    router.post('/', requireAuth, clienteViajeProducto.create);

    // Retrieve all Clientes
    //router.get('/', requireAuth, clientes.findAll);

    // Retrieve a single Cliente with id
    //router.get('/:id', requireAuth, clientes.findOne);

    // Update a Cliente with id
    //router.put('/:id', requireAuth, clientes.update);

    // Delete a Cliente with id
    //router.delete('/:id', requireAuth, clientes.delete);

    app.use('/api/clienteViajeProducto', router);
};