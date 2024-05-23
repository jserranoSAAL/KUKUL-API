module.exports = app => {
    const estadoReservacionController = require("../controllers/estadoReservacion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, estadoReservacionController.create);
    router.get("/", requireAuth, estadoReservacionController.findAll);
    router.get("/:id", requireAuth, estadoReservacionController.findOne);
    router.put("/:id", requireAuth, estadoReservacionController.update);
    router.delete("/:id", requireAuth, estadoReservacionController.delete);

    app.use("/api/estadoReservacion", router);
};
