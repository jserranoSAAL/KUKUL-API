module.exports = app => {
    const productoCostos = require("../controllers/ProductoCostos.controller.js");

    var router = require("express").Router();

    // Crear o actualizar un Costo de Producto (Upsert)
    router.post("/upsert", productoCostos.upsert);

    // Buscar Costo de Producto por productoId
    router.get("/producto/:productoId", productoCostos.findByProductoId);

    app.use('/api/productoCostos', router);
};
