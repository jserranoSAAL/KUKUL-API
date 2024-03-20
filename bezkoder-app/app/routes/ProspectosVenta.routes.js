module.exports = app => {
    const prospectosVentaController = require("../controllers/ProspectosVenta.controller.js");

    const prospectosVentaRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    prospectosVentaRouter.post("/", prospectosVentaController.create);

    // Ruta para recuperar todos los Gastos
    /*
    prospectosVentaRouter.get("/", prospectosVentaController.findAll);

    // Ruta para recuperar un único Gasto con id
    prospectosVentaRouter.get("/:id", prospectosVentaController.findOne);

    // Ruta para actualizar un Gasto con id
    prospectosVentaRouter.put("/:id", prospectosVentaController.update);

    // Ruta para eliminar un Gasto con id
    prospectosVentaRouter.delete("/:id", prospectosVentaController.delete);
    */

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/prospectosVenta", prospectosVentaRouter);
};
