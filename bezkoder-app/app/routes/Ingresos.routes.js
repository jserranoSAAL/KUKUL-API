module.exports = app => {
    const ingresosController = require("../controllers/Ingresos.controller.js");

    const ingresosRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    ingresosRouter.post("/", ingresosController.create);

    // Ruta para recuperar todos los Gastos
    ingresosRouter.get("/", ingresosController.findAll);

    // Ruta para recuperar un único Gasto con id
    ingresosRouter.get("/:id", ingresosController.findOne);

    // Ruta para actualizar un Gasto con id
    ingresosRouter.put("/:id", ingresosController.update);

    // Ruta para eliminar un Gasto con id
    ingresosRouter.delete("/:id", ingresosController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/ingresos", ingresosRouter);
};
