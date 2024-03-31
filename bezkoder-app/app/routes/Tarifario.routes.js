module.exports = app => {
    const tarifarioController = require("../controllers/Tarifario.controller.js");

    const tarifarioRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo Gasto
    tarifarioRouter.post("/", requireAuth, tarifarioController.create);

    // Ruta para recuperar todos los Gastos
    tarifarioRouter.get("/", requireAuth, tarifarioController.findAll);

    // Ruta para recuperar un único Gasto con id
    tarifarioRouter.get("/:id", requireAuth, tarifarioController.findOne);

    // Ruta para actualizar un Gasto con id
    tarifarioRouter.put("/:id", requireAuth, tarifarioController.update);

    // Ruta para eliminar un Gasto con id
    tarifarioRouter.delete("/:id", requireAuth, tarifarioController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/tarifario", requireAuth, tarifarioRouter);
};
