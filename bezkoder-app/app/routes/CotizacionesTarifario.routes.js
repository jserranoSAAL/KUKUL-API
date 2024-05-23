module.exports = app => {
    const cotizacionesTarifario = require("../controllers/CotizacionesTarifario.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva cotización
    router.post("/", requireAuth, cotizacionesTarifario.create);
    // Obtener todas las cotizaciones
    router.get("/", requireAuth, cotizacionesTarifario.findAll);
    // Obtener una cotización por ID
    router.get("/:id", requireAuth, cotizacionesTarifario.findOne);
    // Actualizar una cotización por ID
    router.put("/:id", requireAuth, cotizacionesTarifario.update);
    // Eliminar una cotización por ID
    router.delete("/:id", requireAuth, cotizacionesTarifario.delete);

    app.use("/api/cotizaciones-tarifario", router);
};
