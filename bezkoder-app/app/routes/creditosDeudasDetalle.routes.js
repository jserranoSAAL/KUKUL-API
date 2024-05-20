module.exports = app => {
  const creditosDeudasController = require("../controllers/creditosDeudasDetalle.controller.js");
  const { requireAuth } = require("../middlewares/auth");

  const creditosDeudasRouter = require("express").Router();

  // Crear una nueva entrada de CreditosDeudasDetalle
  creditosDeudasRouter.post("/", requireAuth, creditosDeudasController.create);

  // Obtener todas las entradas de CreditosDeudasDetalle
  creditosDeudasRouter.get("/", requireAuth, creditosDeudasController.findAll);

  // Obtener una entrada de CreditosDeudasDetalle por ID de Agencia de Viaje
  creditosDeudasRouter.get("/:id", requireAuth, creditosDeudasController.findOne);

  // Actualizar una entrada de CreditosDeudasDetalle por ID de Agencia de Viaje
  creditosDeudasRouter.put("/:id", requireAuth, creditosDeudasController.update);

  // Eliminar una entrada de CreditosDeudasDetalle por ID de Agencia de Viaje
  creditosDeudasRouter.delete("/:id", requireAuth, creditosDeudasController.delete);

  // Montar el enrutador bajo la ruta /api/creditosDeudasDetalle
  app.use("/api/creditosDeudasDetalle", creditosDeudasRouter);
};
