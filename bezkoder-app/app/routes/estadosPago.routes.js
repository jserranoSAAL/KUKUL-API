module.exports = app => {
    const estadosPagoController = require("../controllers/estadosPago.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, estadosPagoController.create);
    router.get("/", requireAuth, estadosPagoController.findAll);
    router.get("/:id", requireAuth, estadosPagoController.findOne);
    router.put("/:id", requireAuth, estadosPagoController.update);
    router.delete("/:id", requireAuth, estadosPagoController.delete);

    app.use("/api/estadosPago", router);
};
