// travelBookProduct.routes.js

module.exports = app => {
    const travelBookProductController = require("../controllers/travelBookProduct.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear un nuevo libro de viaje asociado a un producto
    router.post("/", requireAuth, travelBookProductController.create);

    // Obtener todos los libros de viaje asociados a productos
    router.get("/", requireAuth, travelBookProductController.findAll);

    // Obtener un libro de viaje asociado a un producto por ID
    router.get("/:id", requireAuth, travelBookProductController.findOne);

    // Actualizar un libro de viaje asociado a un producto por ID
    router.put("/:id", requireAuth, travelBookProductController.update);

    // Eliminar un libro de viaje asociado a un producto por ID
    router.delete("/:id", requireAuth, travelBookProductController.delete);

    app.use("/api/travel-book-products", router);
};
