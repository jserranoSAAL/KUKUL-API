module.exports = app => {
    const descripcionImagenesController = require("../controllers/ProveedoresDescripcionImagenes.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para descripción e imágenes de proveedores
    router.post("/upsert", requireAuth, descripcionImagenesController.upsert); // Crear o actualizar
    router.get("/:proveedorId", requireAuth, descripcionImagenesController.findByProveedorId); // Obtener por ID

    app.use("/api/proveedores/descripcion-imagenes", router);
};
