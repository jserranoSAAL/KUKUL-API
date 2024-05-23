module.exports = app => {
    const proveedoresContactosController = require("../controllers/ProveedoresContactos.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para Contactos de Proveedores
    router.get("/:proveedorId", requireAuth, proveedoresContactosController.findByProveedorId); // Obtener contactos por proveedorId
    router.post("/", requireAuth, proveedoresContactosController.upsert); // Crear o actualizar un contacto de proveedor
    router.delete("/:id", requireAuth, proveedoresContactosController.delete); // Eliminar un contacto de proveedor

    app.use("/api/proveedores-contactos", router);
};
