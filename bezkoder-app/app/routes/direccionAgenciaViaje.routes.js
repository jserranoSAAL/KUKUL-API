// routes/direccionAgenciaViaje.routes.js
module.exports = app => {
    const direccionAgenciaViaje = require("../controllers/direccionAgenciaViaje.controller");
    const { requireAuth } = require("../middlewares/auth");

    var router = require("express").Router();

    // Crear una nueva dirección
    router.post("/", requireAuth, direccionAgenciaViaje.create);

    // Obtener todas las direcciones
    router.get("/", requireAuth, direccionAgenciaViaje.findAll);

    // Obtener una dirección por ID
    router.get("/:id", requireAuth, direccionAgenciaViaje.findOne);

    // Actualizar una dirección por ID
    router.put("/:id", requireAuth, direccionAgenciaViaje.update);

    // Eliminar una dirección por ID
    router.delete("/:id", requireAuth, direccionAgenciaViaje.delete);

    // Buscar dirección por agenciaDeViajeId
    router.get("/agencia/:agenciaDeViajeId", requireAuth, direccionAgenciaViaje.findByAgenciaDeViajeId);

    app.use('/api/direccionAgenciaViaje', router);
};
