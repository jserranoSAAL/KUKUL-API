module.exports = app => {
    const personasController = require("../controllers/Persona.controller.js");

    const personaRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    personaRouter.post("/", personasController.create);

    // Ruta para recuperar todos los Gastos
    /*
    personaRouter.get("/", personasController.findAll);

    // Ruta para recuperar un único Gasto con id
    personaRouter.get("/:id", personasController.findOne);

    // Ruta para actualizar un Gasto con id
    personaRouter.put("/:id", personasController.update);

    // Ruta para eliminar un Gasto con id
    personaRouter.delete("/:id", personasController.delete);
    */

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/personas", personaRouter);
};
