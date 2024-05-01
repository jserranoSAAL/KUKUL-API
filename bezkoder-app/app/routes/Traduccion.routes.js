// traduccion.routes.js

module.exports = app => {
    const traduccionController = require("../controllers/Traduccion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva traducción
    router.post("/", requireAuth, traduccionController.create);

    // Obtener todas las traducciones
    router.get("/", requireAuth, traduccionController.findAll);

    // Obtener una traducción por ID
    router.get("/:id", requireAuth, traduccionController.findOne);

    // Actualizar una traducción por ID
    router.put("/:id", requireAuth, traduccionController.update);

    // Eliminar una traducción por ID
    router.delete("/:id", requireAuth, traduccionController.delete);

    app.use("/api/traducciones", router);
};
