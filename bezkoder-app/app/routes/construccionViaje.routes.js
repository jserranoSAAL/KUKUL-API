// routes/construccionViaje.routes.js
module.exports = app => {
    const construccionViaje = require("../controllers/construccionViaje.controller.js");
    const requireAuth = require('../middlewares/auth').requireAuth;

    const router = require("express").Router();

    // Crear una nueva construcción de viaje
    router.post("/", requireAuth, construccionViaje.create);

    // Obtener todas las construcciones de viaje
    router.get("/", requireAuth, construccionViaje.findAll);

    // Obtener una construcción de viaje por ID
    router.get("/:id", requireAuth, construccionViaje.findOne);

    // Actualizar una construcción de viaje por ID
    router.put("/:id", requireAuth, construccionViaje.update);

    // Eliminar una construcción de viaje por ID
    router.delete("/:id", requireAuth, construccionViaje.delete);

    // Buscar construcciones de viaje por agenciaDeViajeId
    router.get("/buscarPorAgencia/:agenciaDeViajeId", requireAuth, construccionViaje.findByAgenciaDeViajeId);

    app.use('/api/construccionViaje', router);
};
