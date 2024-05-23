module.exports = app => {
    const productoCostosAdicionales = require("../controllers/ProductoCostosAdicionales.controller.js");

    var router = require("express").Router();

    // Crear o actualizar un Costo Adicional de Producto (Upsert)
    router.post("/upsert", productoCostosAdicionales.upsert);

    // Buscar Costos Adicionales de Producto por productoCostoId
    router.get("/productoCosto/:productoCostoId", productoCostosAdicionales.findByProductoCostoId);

    app.use('/api/productoCostosAdicionales', router);
};
