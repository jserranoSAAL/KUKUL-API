module.exports = app => {
    const prospectosVentaController = require("../controllers/ProspectosVenta.controller.js");

    const prospectosVentaRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo Gasto
    prospectosVentaRouter.post("/", requireAuth, prospectosVentaController.create);

    // Ruta para recuperar todos los Gastos
    /*
    prospectosVentaRouter.get("/", requireAuth, prospectosVentaController.findAll);

    // Ruta para recuperar un único Gasto con id
    prospectosVentaRouter.get("/:id", requireAuth, prospectosVentaController.findOne);

    // Ruta para actualizar un Gasto con id
    prospectosVentaRouter.put("/:id", requireAuth, prospectosVentaController.update);

    // Ruta para eliminar un Gasto con id
    prospectosVentaRouter.delete("/:id", requireAuth, prospectosVentaController.delete);
    */

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/prospectosVenta", prospectosVentaRouter);
};
