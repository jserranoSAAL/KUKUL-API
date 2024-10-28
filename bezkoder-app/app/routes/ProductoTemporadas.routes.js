module.exports = app => {
    const productoTemporadas = require("../controllers/ProductoTemporadas.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    var router = require("express").Router();

    // Crear una nueva Temporada de Producto
    router.post("/", requireAuth, productoTemporadas.create);

    // Crear o actualizar una Temporada de Producto (Upsert)
    router.post("/upsert", requireAuth, productoTemporadas.upsert);

    // Buscar Temporada de Producto por productoCostoId
    router.get("/productoCosto/:productoCostoId", requireAuth, productoTemporadas.findByProductoCostoId);

    // Obtener todas las Temporadas de Producto
    router.get("/", requireAuth, productoTemporadas.findAll);

    // Obtener una Temporada de Producto por ID
    router.get("/:id", requireAuth, productoTemporadas.findOne);

    // Actualizar una Temporada de Producto por ID
    router.put("/:id", requireAuth, productoTemporadas.update);

    // Eliminar una Temporada de Producto por ID
    router.delete("/:id", requireAuth, productoTemporadas.delete);

    // Eliminar todas las Temporadas de Producto
    router.delete("/", requireAuth, productoTemporadas.deleteAll);

    router.post("/productoTemporadas/checkAvailability", requireAuth, productoTemporadas.getActiveSeasonForProductAndDate);


    app.use('/api/productoTemporadas', router);
};
