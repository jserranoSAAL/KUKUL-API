module.exports = app => {
    const proveedoresInfoController = require("../controllers/proveedoresInfo.controller");
    const { requireAuth } = require("../middlewares/auth");

    const proveedoresInfoRouter = require("express").Router();

    // Rutas para ProveedoresInfo
    proveedoresInfoRouter.post("/upsert", requireAuth, proveedoresInfoController.upsert); // Crear o actualizar Info de Proveedor (Upsert)
    proveedoresInfoRouter.get("/:proveedorId", requireAuth, proveedoresInfoController.findByProveedorId); // Buscar Info de Proveedor por proveedorId

    app.use("/api/proveedoresInfo", proveedoresInfoRouter);
};
