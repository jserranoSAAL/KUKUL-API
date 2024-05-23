module.exports = app => {
    const logisticaController = require("../controllers/ProveedoresLogistica.controller");
    const { requireAuth } = require("../middlewares/auth");

    const logisticaRouter = require("express").Router();

    // Rutas para información de logística de proveedores
    logisticaRouter.post("/", requireAuth, logisticaController.upsertLogistica); // Crear o actualizar información de logística
    logisticaRouter.get("/:proveedorId", requireAuth, logisticaController.findLogisticaByProveedorId); // Obtener información de logística por proveedorId

    app.use("/api/proveedores/logistica", logisticaRouter);
};
