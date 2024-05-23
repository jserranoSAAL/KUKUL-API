module.exports = app => {
    const finanzasController = require("../controllers/ProveedoresFinanzas.controller");
    const { requireAuth } = require("../middlewares/auth");

    const finanzasRouter = require("express").Router();

    // Rutas para Información Financiera de Proveedores
    finanzasRouter.post("/", requireAuth, finanzasController.upsertFinanzas); // Crear o actualizar la información financiera de un proveedor
    finanzasRouter.get("/:proveedorId", requireAuth, finanzasController.findFinanzasByProveedorId); // Obtener información financiera de un proveedor por ID

    app.use("/api/proveedores/finanzas", finanzasRouter);
};
