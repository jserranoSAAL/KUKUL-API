module.exports = app => {
    const logisticaController = require("../controllers/Logistica.controller.js");

    const logisticaRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    logisticaRouter.post("/", requireAuth, logisticaController.create);

    // Ruta para recuperar todos los Gastos
    logisticaRouter.get("/", requireAuth, logisticaController.findAll);

    // Ruta para recuperar un único Gasto con id
    logisticaRouter.get("/:id", requireAuth, logisticaController.findOne);

    // Ruta para actualizar un Gasto con id
    logisticaRouter.put("/:id", requireAuth, logisticaController.update);

    // Ruta para eliminar un Gasto con id
    logisticaRouter.delete("/:id", requireAuth, logisticaController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/logistica", logisticaRouter);
};
