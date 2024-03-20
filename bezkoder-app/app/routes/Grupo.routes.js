module.exports = app => {
    const grupoController = require("../controllers/Grupo.controller.js");

    const grupoRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    grupoRouter.post("/", grupoController.create);

    // Ruta para recuperar todos los Gastos
    grupoRouter.get("/", grupoController.findAll);

    // Ruta para recuperar un único Gasto con id
    grupoRouter.get("/:id", grupoController.findOne);

    // Ruta para actualizar un Gasto con id
    grupoRouter.put("/:id", grupoController.update);

    // Ruta para eliminar un Gasto con id
    grupoRouter.delete("/:id", grupoController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/grupos", grupoRouter);
};
