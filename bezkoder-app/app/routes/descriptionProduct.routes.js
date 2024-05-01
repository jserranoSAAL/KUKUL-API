module.exports = app => {
    const descriptionProductController = require("../controllers/descriptionProduct.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva descripción de producto
    router.post("/", requireAuth, descriptionProductController.create);

    // Obtener todas las descripciones de productos
    router.get("/", requireAuth, descriptionProductController.findAll);

    // Obtener una descripción de producto por ID
    router.get("/:id", requireAuth, descriptionProductController.findOne);

    // Actualizar una descripción de producto por ID
    router.put("/:id", requireAuth, descriptionProductController.update);

    // Eliminar una descripción de producto por ID
    router.delete("/:id", requireAuth, descriptionProductController.delete);

    app.use("/api/description_products", router);
};
