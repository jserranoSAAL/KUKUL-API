module.exports = app => {
    const productoCupo = require("../controllers/productoCupo.controller.js");

    var router = require("express").Router();

    // Crear o actualizar Cupo de Producto (Upsert)
    router.post("/upsert", productoCupo.upsert);

    // Buscar Cupo de Producto por productoId
    router.get("/producto/:productoId", productoCupo.findByProductoId);

    app.use('/api/productoCupo', router);
};
