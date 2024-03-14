module.exports = app => {
    const reservasController = require("../controllers/Reservas.controller");

    const reservasRouter = require("express").Router();

    // Rutas para Reservas
    reservasRouter.post("/", reservasController.create);
    reservasRouter.get("/", reservasController.findAll);
    reservasRouter.get("/:id", reservasController.findOne);
    reservasRouter.put("/:id", reservasController.update);
    reservasRouter.delete("/:id", reservasController.delete);

    app.use("/api/reservas", reservasRouter);
};
