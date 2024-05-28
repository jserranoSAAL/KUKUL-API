module.exports = app => {
    const productoLogistica = require("../controllers/productoLogistica.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    var router = require("express").Router();

    // Crear o actualizar Logística de Producto (Upsert)
    router.post("/upsert", requireAuth, productoLogistica.upsert);

    // Buscar Logística de Producto por productoId
    router.get("/producto/:productoId", requireAuth, productoLogistica.findByProductoId);

    // Buscar Logística de Producto por proveedorId
    router.get("/proveedor/:proveedorId", requireAuth, productoLogistica.findByProveedorId);

    app.use('/api/productoLogistica', router);
};
