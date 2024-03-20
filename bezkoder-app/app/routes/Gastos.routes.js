module.exports = app => {
    const gastosController = require("../controllers/Gastos.controller.js");

    const gastosRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    gastosRouter.post("/", gastosController.create);

    // Ruta para recuperar todos los Gastos
    gastosRouter.get("/", gastosController.findAll);

    // Ruta para recuperar un único Gasto con id
    gastosRouter.get("/:id", gastosController.findOne);

    // Ruta para actualizar un Gasto con id
    gastosRouter.put("/:id", gastosController.update);

    // Ruta para eliminar un Gasto con id
    gastosRouter.delete("/:id", gastosController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/gastos", gastosRouter);
};
