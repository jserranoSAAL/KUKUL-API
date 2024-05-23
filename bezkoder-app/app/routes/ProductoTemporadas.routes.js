module.exports = app => {
    const productoTemporadas = require("../controllers/ProductoTemporadas.controller.js");

    var router = require("express").Router();

    // Crear o actualizar una Temporada de Producto (Upsert)
    router.post("/upsert", productoTemporadas.upsert);

    // Buscar Temporada de Producto por productoCostoId
    router.get("/productoCosto/:productoCostoId", productoTemporadas.findByProductoCostoId);

    app.use('/api/productoTemporadas', router);
};
