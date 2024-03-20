module.exports = app => {
    const tarifarioController = require("../controllers/Tarifario.controller.js");

    const tarifarioRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    tarifarioRouter.post("/", tarifarioController.create);

    // Ruta para recuperar todos los Gastos
    tarifarioRouter.get("/", tarifarioController.findAll);

    // Ruta para recuperar un único Gasto con id
    tarifarioRouter.get("/:id", tarifarioController.findOne);

    // Ruta para actualizar un Gasto con id
    tarifarioRouter.put("/:id", tarifarioController.update);

    // Ruta para eliminar un Gasto con id
    tarifarioRouter.delete("/:id", tarifarioController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/tarifario", tarifarioRouter);
};
