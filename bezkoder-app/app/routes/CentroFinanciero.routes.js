module.exports = app => {
    const centroFinancieroController = require("../controllers/CentroFinanciero.controller.js");

    const centroFinancieroRouter = require("express").Router();

    // Ruta para crear un nuevo Centro Financiero
    centroFinancieroRouter.post("/", centroFinancieroController.create);

    // Ruta para recuperar todos los Centros Financieros
    centroFinancieroRouter.get("/", centroFinancieroController.findAll);

    // Ruta para recuperar un único Centro Financiero con id
    centroFinancieroRouter.get("/:id", centroFinancieroController.findOne);

    // Ruta para actualizar un Centro Financiero con id
    centroFinancieroRouter.put("/:id", centroFinancieroController.update);

    // Ruta para eliminar un Centro Financiero con id
    centroFinancieroRouter.delete("/:id", centroFinancieroController.delete);

    // Montar el enrutador bajo la ruta /api/centroFinanciero
    app.use("/api/centroFinanciero", centroFinancieroRouter);
};
