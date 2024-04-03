module.exports = app => {
    const reservasController = require("../controllers/Reservas.controller");
    const { requireAuth } = require("../middlewares/auth");

    const reservasRouter = require("express").Router();

    // Rutas para Reservas con autenticación requerida
    reservasRouter.post("/", requireAuth, reservasController.create);
    reservasRouter.get("/", requireAuth, reservasController.findAll);
    reservasRouter.get("/:id", requireAuth, reservasController.findOne);
    reservasRouter.put("/:id", requireAuth, reservasController.update);
    reservasRouter.delete("/:id", requireAuth, reservasController.delete);

    app.use("/api/reservas", reservasRouter);
};
