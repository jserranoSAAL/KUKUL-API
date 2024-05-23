module.exports = app => {
    const productoLogistica = require("../controllers/productoLogistica.controller.js");

    var router = require("express").Router();

    // Crear o actualizar Logística de Producto (Upsert)
    router.post("/upsert", productoLogistica.upsert);

    // Buscar Logística de Producto por productoId
    router.get("/producto/:productoId", productoLogistica.findByProductoId);

    app.use('/api/productoLogistica', router);
};
