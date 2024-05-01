module.exports = app => {
    const translationNameProductController = require("../controllers/translationNameProduct.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva traducción del nombre del producto
    router.post("/", requireAuth, translationNameProductController.create);

    // Obtener todas las traducciones de nombres de productos
    router.get("/", requireAuth, translationNameProductController.findAll);

    // Obtener una traducción de nombre de producto por ID
    router.get("/:id", requireAuth, translationNameProductController.findOne);

    // Actualizar una traducción de nombre de producto por ID
    router.put("/:id", requireAuth, translationNameProductController.update);

    // Eliminar una traducción de nombre de producto por ID
    router.delete("/:id", requireAuth, translationNameProductController.delete);

    app.use("/api/translationNameProduct", router);
};
