module.exports = app => {
    const cotizacionController = require("../controllers/CotizaciónFinal.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva CotizaciónFinal
    router.post("/", requireAuth, cotizacionController.create);

    // Recuperar todas las CotizacionesFinales
    router.get("/", requireAuth, cotizacionController.findAll);

    // Recuperar una única CotizaciónFinal con id
    router.get("/:id", cotizacionController.findOne);

    // Actualizar una CotizaciónFinal con id
    router.put("/:id", requireAuth, cotizacionController.update);

    // Eliminar una CotizaciónFinal con id
    router.delete("/:id", requireAuth, cotizacionController.delete);

    // Montar el enrutador bajo la ruta /api/cotizaciones
    app.use("/api/cotizaciones", router);
};
