module.exports = app => {
    const imagenesLugarController = require("../controllers/ImagenesLugar.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva imagen de lugar
    router.post("/", requireAuth, imagenesLugarController.create);

    // Obtener todas las imágenes de lugar
    router.get("/", requireAuth, imagenesLugarController.findAll);

    // Obtener una imagen de lugar por ID
    router.get("/:id", requireAuth, imagenesLugarController.findOne);

    // Eliminar una imagen de lugar por ID
    router.delete("/:id", requireAuth, imagenesLugarController.delete);

    app.use("/api/imagenes-lugar", router);
};
