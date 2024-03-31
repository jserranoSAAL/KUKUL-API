module.exports = app => {
    const prospectosVentaController = require("../controllers/ProspectosVenta.controller.js");
    const prospectosVentaRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Crear un nuevo Prospecto de Venta
    prospectosVentaRouter.post("/", requireAuth, prospectosVentaController.create);

    // Recuperar todos los Prospectos de Venta
    prospectosVentaRouter.get("/", requireAuth, prospectosVentaController.findAll);

    // Recuperar un único Prospecto de Venta con id
    prospectosVentaRouter.get("/:id", requireAuth, prospectosVentaController.findOne);

    // Actualizar un Prospecto de Venta con id
    prospectosVentaRouter.put("/:id", requireAuth, prospectosVentaController.update);

    // Eliminar un Prospecto de Venta con id
    prospectosVentaRouter.delete("/:id", requireAuth, prospectosVentaController.delete);

    // Montar el enrutador bajo la ruta /api/prospectosVenta
    app.use("/api/prospectosVenta", prospectosVentaRouter);
};
