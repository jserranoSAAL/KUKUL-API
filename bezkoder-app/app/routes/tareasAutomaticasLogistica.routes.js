module.exports = app => {
    const tareasAutomaticasLogisticaController = require("../controllers/tareasAutomaticasLogistica.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, tareasAutomaticasLogisticaController.create);
    router.get("/", requireAuth, tareasAutomaticasLogisticaController.findAll);
    router.get("/:id", requireAuth, tareasAutomaticasLogisticaController.findOne);
    router.put("/:id", requireAuth, tareasAutomaticasLogisticaController.update);
    router.delete("/:id", requireAuth, tareasAutomaticasLogisticaController.delete);
    router.get("/buscar/:nombre", requireAuth, tareasAutomaticasLogisticaController.findByName); // Nueva ruta para buscar por nombre

    app.use("/api/tareasAutomaticasLogistica", router);
};
