module.exports = (app) => {
  const agenciasDeViajeInformacionController = require("../controllers/AgenciasDeViajeInformacion.controller");
  const { requireAuth } = require("../middlewares/auth");

  const agenciasDeViajeInformacionRouter = require("express").Router();

  // Crear una nueva Agencia de Viaje
  agenciasDeViajeInformacionRouter.post(
    "/",
    requireAuth,
    agenciasDeViajeInformacionController.create
  );

  // Recuperar todas las Agencias de Viaje
  agenciasDeViajeInformacionRouter.get(
    "/",
    requireAuth,
    agenciasDeViajeInformacionController.findAll
  );

  // Recuperar una única Agencia de Viaje por ID
  agenciasDeViajeInformacionRouter.get(
    "/:id",
    requireAuth,
    agenciasDeViajeInformacionController.findOne
  );

  // Ruta para actualizar una Agencia de Viaje por ID
  agenciasDeViajeInformacionRouter.put(
    "/:id",
    requireAuth,
    agenciasDeViajeInformacionController.update
  );

  // Eliminar una Agencia de Viaje por ID
  agenciasDeViajeInformacionRouter.delete(
    "/:id",
    requireAuth,
    agenciasDeViajeInformacionController.delete
  );

  app.use("/api/agenciasDeViajeInformacion", agenciasDeViajeInformacionRouter);
};
