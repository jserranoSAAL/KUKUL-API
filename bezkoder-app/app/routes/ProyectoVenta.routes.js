module.exports = app => {
    const proyectoVentaController = require("../controllers/ProyectoVenta.controller.js");

    const proyectoVentaRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo Gasto
    proyectoVentaRouter.post("/", requireAuth, proyectoVentaController.create);

    // Ruta para recuperar todos los Gastos
    proyectoVentaRouter.get("/", requireAuth, proyectoVentaController.findAll);

    // Ruta para recuperar un único Gasto con id
    proyectoVentaRouter.get("/:id", requireAuth, proyectoVentaController.findOne);

    // Ruta para actualizar un Gasto con id
    proyectoVentaRouter.put("/:id", requireAuth, proyectoVentaController.update);

    // Ruta para eliminar un Gasto con id
    proyectoVentaRouter.delete("/:id", requireAuth, proyectoVentaController.delete);

    // Buscar Proyectos de Venta por prospecto con LIKE
    proyectoVentaRouter.get("/buscar/prospect/:prospect", requireAuth, proyectoVentaController.findByProspect);


    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/proyectoVenta", proyectoVentaRouter);
};
