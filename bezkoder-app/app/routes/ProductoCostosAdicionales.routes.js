module.exports = app => {
    const productoCostosAdicionales = require("../controllers/ProductoCostosAdicionales.controller.js");
    const requireAuth = require('../middlewares/auth').requireAuth;

    var router = require("express").Router();

    // Crear un nuevo Costo Adicional de Producto
    router.post("/", requireAuth, productoCostosAdicionales.create);

    // Crear o actualizar un Costo Adicional de Producto (Upsert)
    router.post("/upsert", requireAuth, productoCostosAdicionales.upsert);

    // Buscar Costos Adicionales de Producto por productoCostoId
    router.get("/productoCosto/:productoCostoId", requireAuth, productoCostosAdicionales.findByProductoCostoId);

    // Obtener todos los Costos Adicionales de Producto
    router.get("/", requireAuth, productoCostosAdicionales.findAll);

    // Obtener un Costo Adicional de Producto por ID
    router.get("/:id", requireAuth, productoCostosAdicionales.findOne);

    // Actualizar un Costo Adicional de Producto por ID
    router.put("/:id", requireAuth, productoCostosAdicionales.update);

    // Eliminar un Costo Adicional de Producto por ID
    router.delete("/:id", requireAuth, productoCostosAdicionales.delete);

    app.use('/api/productoCostosAdicionales', router);
};
