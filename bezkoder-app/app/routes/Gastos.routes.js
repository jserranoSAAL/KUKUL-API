module.exports = app => {
    const gastosController = require("../controllers/Gastos.controller.js");

    const gastosRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");


    // Ruta para crear un nuevo Gasto
    gastosRouter.post("/", requireAuth, gastosController.create);

    // Ruta para recuperar todos los Gastos
    gastosRouter.get("/", requireAuth, gastosController.findAll);

    // Ruta para recuperar un único Gasto con id
    gastosRouter.get("/:id", requireAuth, gastosController.findOne);

    // Ruta para actualizar un Gasto con id
    gastosRouter.put("/:id", requireAuth, gastosController.update);

    // Ruta para eliminar un Gasto con id
    gastosRouter.delete("/:id", requireAuth, gastosController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/gastos", gastosRouter);
};
