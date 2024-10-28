module.exports = app => {
    const agenciaViajeContactoController = require("../controllers/AgenciaViajeContacto.controller");
    const { requireAuth } = require("../middlewares/auth");

    const agenciaViajeContactoRouter = require("express").Router();

    // Obtener contactos por ID de agencia
    agenciaViajeContactoRouter.get("/agencia/:agenciaId", requireAuth, agenciaViajeContactoController.findAllByAgencia);

    // Crear un nuevo contacto
    agenciaViajeContactoRouter.post("/", requireAuth, agenciaViajeContactoController.create);

    // Actualizar un contacto por ID
    agenciaViajeContactoRouter.put("/:id", requireAuth, agenciaViajeContactoController.update);

    // Eliminar un contacto por ID
    agenciaViajeContactoRouter.delete("/:id", requireAuth, agenciaViajeContactoController.delete);

    app.use("/api/agenciaViajeContacto", agenciaViajeContactoRouter);
};
