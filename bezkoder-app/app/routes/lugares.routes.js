// lugares.routes.js

module.exports = app => {
    const lugaresController = require("../controllers/Lugares.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear un nuevo lugar
    router.post("/", requireAuth, lugaresController.create);

    // Obtener todos los lugares
    router.get("/", requireAuth, lugaresController.findAll);

    // Obtener un lugar por ID
    router.get("/:id", requireAuth, lugaresController.findOne);

    // Actualizar un lugar por ID
    router.put("/:id", requireAuth, lugaresController.update);

    // Eliminar un lugar por ID
    router.delete("/:id", requireAuth, lugaresController.delete);

    app.use("/api/lugares", router);
};
