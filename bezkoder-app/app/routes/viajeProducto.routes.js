// routes/viajeProducto.routes.js
module.exports = app => {
    const viajeProducto = require("../controllers/viajeProducto.controller.js");
    const router = require("express").Router();

    // Crear una nueva relación Viaje-Producto
    router.post("/", viajeProducto.create);

    // Obtener todas las relaciones Viaje-Producto
    router.get("/", viajeProducto.findAll);

    // Obtener una relación Viaje-Producto por ID
    router.get("/:id", viajeProducto.findOne);

    // Actualizar una relación Viaje-Producto por ID
    router.put("/:id", viajeProducto.update);

    // Eliminar una relación Viaje-Producto por ID
    router.delete("/:id", viajeProducto.delete);

    // Obtener todas las relaciones Viaje-Producto por viajeId
    router.get("/viaje/:viajeId", viajeProducto.findByViajeId);


    app.use('/api/viajeProducto', router);
};
