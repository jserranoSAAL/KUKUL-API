module.exports = app => {
    const tarifarioGeneralController = require("../controllers/TarifarioGeneral.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para TarifarioGeneral
    router.post("/upsert", requireAuth, tarifarioGeneralController.upsert); // Crear o actualizar un detalle general de tarifario
    router.get("/:tarifarioId", requireAuth, tarifarioGeneralController.findByTarifarioId); // Obtener detalles generales de tarifario por tarifarioId

    app.use("/api/tarifarioGeneral", router);
};
