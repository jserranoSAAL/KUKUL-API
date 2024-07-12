module.exports = app => {
    const cotizacionController = require("../controllers/CotizacionFinal.controller.js");
    const { requireAuth } = require("../middlewares/auth.js");

    const router = require("express").Router();

    // Crear una nueva CotizacionFinal
    router.post("/:code", requireAuth, cotizacionController.create);

    // Recuperar todas las CotizacionesFinales
    router.get("/", requireAuth, cotizacionController.findAll);

    // Recuperar una única CotizacionFinal con id
    router.get("/:id", cotizacionController.findOne);

    // Actualizar una CotizacionFinal con id
    router.put("/:id", requireAuth, cotizacionController.update);

    // Eliminar una CotizacionFinal con id
    router.delete("/:id", requireAuth, cotizacionController.delete);

    // Buscar CotizacionFinal por paquete_id
    router.get("/paquete/:paquete_id", requireAuth, cotizacionController.findByPaqueteId);

    // Montar el enrutador bajo la ruta /api/cotizaciones
    app.use("/api/cotizacionesFinales", router);
};
