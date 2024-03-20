module.exports = app => {
    const proyectoVentaController = require("../controllers/ProyectoVenta.controller.js");

    const proyectoVentaRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    proyectoVentaRouter.post("/", proyectoVentaController.create);

    // Ruta para recuperar todos los Gastos
    proyectoVentaRouter.get("/", proyectoVentaController.findAll);

    // Ruta para recuperar un único Gasto con id
    proyectoVentaRouter.get("/:id", proyectoVentaController.findOne);

    // Ruta para actualizar un Gasto con id
    proyectoVentaRouter.put("/:id", proyectoVentaController.update);

    // Ruta para eliminar un Gasto con id
    proyectoVentaRouter.delete("/:id", proyectoVentaController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/proyectoVenta", proyectoVentaRouter);
};
