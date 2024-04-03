module.exports = app => {
    const personasController = require("../controllers/Persona.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const personaRouter = require("express").Router();

    // Crear un nuevo registro de Persona
    personaRouter.post("/", requireAuth, personasController.create);

    // Recuperar todos los registros de Personas
    personaRouter.get("/", requireAuth, personasController.findAll);

    // Recuperar un único registro de Persona con id
    personaRouter.get("/:id", requireAuth, personasController.findOne);

    // Actualizar un registro de Persona con id
    personaRouter.put("/:id", requireAuth, personasController.update);

    // Eliminar un registro de Persona con id
    personaRouter.delete("/:id", requireAuth, personasController.delete);

    // Ruta para buscar personas por nombre con LIKE
    personaRouter.get("/buscar/nombre/:nombre", requireAuth, personasController.findByName);


    // Montar el enrutador bajo la ruta /api/personas
    app.use("/api/personas", personaRouter);
};
