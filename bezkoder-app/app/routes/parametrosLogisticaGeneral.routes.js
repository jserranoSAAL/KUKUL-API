module.exports = app => {
    const parametrosLogisticaGeneralController = require("../controllers/parametrosLogisticaGeneral.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, parametrosLogisticaGeneralController.create);
    router.get("/", requireAuth, parametrosLogisticaGeneralController.findAll);
    router.get("/:id", requireAuth, parametrosLogisticaGeneralController.findOne);
    router.put("/:id", requireAuth, parametrosLogisticaGeneralController.update);
    router.delete("/:id", requireAuth, parametrosLogisticaGeneralController.delete);
    router.post("/upsert", requireAuth, parametrosLogisticaGeneralController.upsert); // Nueva ruta para upsert

    app.use("/api/parametrosLogisticaGeneral", router);
};
