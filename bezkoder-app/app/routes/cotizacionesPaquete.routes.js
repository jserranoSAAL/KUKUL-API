module.exports = app => {
    const cotizacionesPaquete = require("../controllers/cotizacionesPaquete.controller.js");
    const requireAuth = require('../middlewares/auth').requireAuth;

    const router = require("express").Router();

    // Crear una nueva cotización de paquete
    router.post("/", requireAuth, cotizacionesPaquete.create);

    // Obtener todas las cotizaciones de paquete
    router.get("/", requireAuth, cotizacionesPaquete.findAll);

    // Obtener una cotización de paquete por ID
    router.get("/:id", requireAuth, cotizacionesPaquete.findOne);

    // Actualizar una cotización de paquete por ID
    router.put("/:id", requireAuth, cotizacionesPaquete.update);

    // Eliminar una cotización de paquete por ID
    router.delete("/:id", requireAuth, cotizacionesPaquete.delete);

    // Buscar cotizaciones de paquete por agenciaDeViajeId
    router.get("/buscar/:agenciaDeViajeId", requireAuth, cotizacionesPaquete.findByAgenciaId);

    app.use('/api/cotizacionesPaquete', router);
};
