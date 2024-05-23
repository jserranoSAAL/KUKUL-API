module.exports = app => {
    const centrosDeOperacionController = require("../controllers/centrosDeOperacion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, centrosDeOperacionController.create);
    router.get("/", requireAuth, centrosDeOperacionController.findAll);
    router.get("/:id", requireAuth, centrosDeOperacionController.findOne);
    router.put("/:id", requireAuth, centrosDeOperacionController.update);
    router.delete("/:id", requireAuth, centrosDeOperacionController.delete);
    router.get("/buscar/:nombre", requireAuth, centrosDeOperacionController.findByName); // Nueva ruta para buscar por nombre

    app.use("/api/centrosDeOperacion", router);
};
