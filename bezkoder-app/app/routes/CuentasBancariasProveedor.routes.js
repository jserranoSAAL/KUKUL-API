module.exports = app => {
    const cuentasController = require("../controllers/CuentasBancariasProveedor.controller");
    const { requireAuth } = require("../middlewares/auth");

    const cuentasRouter = require("express").Router();

    // Rutas para cuentas bancarias de proveedores
    cuentasRouter.post("/", requireAuth, cuentasController.upsertCuentaBancaria); // Crear o actualizar cuenta bancaria
    cuentasRouter.get("/:proveedorId", requireAuth, cuentasController.findCuentasByProveedorId); // Obtener cuentas bancarias por proveedorId

    app.use("/api/proveedores/cuentas", cuentasRouter);
};
