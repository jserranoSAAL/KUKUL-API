module.exports = app => {
    const productoAdmin = require("../controllers/productoAdmin.controller.js");

    var router = require("express").Router();

    // Crear o actualizar Admin de Producto (Upsert)
    router.post("/upsert", productoAdmin.upsert);

    // Buscar Admin de Producto por productoId
    router.get("/producto/:productoId", productoAdmin.findByProductoId);

    app.use('/api/productoAdmin', router);
};
