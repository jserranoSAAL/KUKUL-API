module.exports = app => {
    const agenciasDeViajeController = require("../controllers/AgenciasDeViaje.controller");
    const { requireAuth } = require("../middlewares/auth");

    const agenciasDeViajeRouter = require("express").Router();

    // Crear una nueva Agencia de Viaje
    agenciasDeViajeRouter.post("/", requireAuth, agenciasDeViajeController.create);

    // Recuperar todas las Agencias de Viaje
    agenciasDeViajeRouter.get("/", requireAuth, agenciasDeViajeController.findAll);

    // Recuperar una única Agencia de Viaje por ID
    agenciasDeViajeRouter.get("/:id", requireAuth, agenciasDeViajeController.findOne);

    // Actualizar una Agencia de Viaje por ID
    agenciasDeViajeRouter.put("/:id", requireAuth, agenciasDeViajeController.update);

    // Eliminar una Agencia de Viaje por ID
    agenciasDeViajeRouter.delete("/:id", requireAuth, agenciasDeViajeController.delete);

    app.use("/api/agenciasDeViaje", agenciasDeViajeRouter);
};
