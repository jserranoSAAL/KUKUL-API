module.exports = app => {
    const cotizacionController = require("../controllers/CotizacionFinal.controller.js");
    const { requireAuth } = require("../middlewares/auth.js");

    const router = require("express").Router();

    // Crear una nueva CotizacionFinal
    router.post("/:code", requireAuth, cotizacionController.create);

    // Recuperar todas las CotizacionesFinales
    router.get("/", requireAuth, cotizacionController.findAll);

    // Recuperar una única CotizacionFinal con id
    router.get("/:code", cotizacionController.findOne);

    // Actualizar una CotizacionFinal con id
    router.put("/:id", requireAuth, cotizacionController.update);

    // Eliminar una CotizacionFinal con id
    router.delete("/:id", requireAuth, cotizacionController.delete);

    // Upsert una CotizacionFinal por code
    router.post("/upsert/:code", requireAuth, cotizacionController.upsert);

    // Upsert una CotizacionFinal por code
    router.post("/create/:code", requireAuth, cotizacionController.createQuotation);

    // Buscar CotizacionFinal por paquete_id
    router.get("/paquete/:paquete_id", requireAuth, cotizacionController.findByPaqueteId);

    // Recuperar cotizaciones ordenadas por fecha
    router.get("/ordered/:order", requireAuth, cotizacionController.findAllOrdered);

    // Recuperar una única CotizacionFinal por id
    router.get("/id/:id", requireAuth, cotizacionController.findById);


    // Montar el enrutador bajo la ruta /api/cotizaciones
    app.use("/api/cotizacionesFinales", router);
};
