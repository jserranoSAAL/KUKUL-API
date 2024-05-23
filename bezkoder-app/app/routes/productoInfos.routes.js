module.exports = app => {
    const productoInfos = require("../controllers/productoInfos.controller.js");

    var router = require("express").Router();

    // Crear o actualizar una Información de Producto (Upsert)
    router.post("/upsert", productoInfos.upsert);

    // Buscar Información de Producto por productoId
    router.get("/producto/:productoId", productoInfos.findByProductoId);

    // Otras rutas para manejar ProductoInfos...

    app.use('/api/productoInfos', router);
};
