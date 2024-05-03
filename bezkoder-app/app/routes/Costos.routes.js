// routes/costosRoutes.js
module.exports = app => {
    const costos = require('../controllers/Costos.controller.js');
    const requireAuth = require('../middlewares/auth').requireAuth;

    var router = require('express').Router();

    // Rutas protegidas por autenticación
    router.post('/', requireAuth, costos.create);
    router.get('/', requireAuth, costos.findAll);
    router.get('/:id', requireAuth, costos.findOne);
    router.put('/:id', requireAuth, costos.update);
    router.delete('/:id', requireAuth, costos.delete);

    app.use('/api/costos', router);
};
