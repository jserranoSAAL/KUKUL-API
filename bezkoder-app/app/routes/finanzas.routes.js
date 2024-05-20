module.exports = app => {
  const finanzasController = require("../controllers/finanzas.controller.js");
  const { requireAuth } = require("../middlewares/auth");

  const finanzasRouter = require("express").Router();

  // Crear una nueva entrada de Finanzas
  finanzasRouter.post("/", requireAuth, finanzasController.create);

  // Obtener todas las entradas de Finanzas
  finanzasRouter.get("/", requireAuth, finanzasController.findAll);

  // Obtener una entrada de Finanzas por ID de Agencia de Viaje
  finanzasRouter.get("/:id", requireAuth, finanzasController.findOne);

  // Actualizar una entrada de Finanzas por ID de Agencia de Viaje
  finanzasRouter.put("/:id", requireAuth, finanzasController.update);

  // Eliminar una entrada de Finanzas por ID de Agencia de Viaje
  finanzasRouter.delete("/:id", requireAuth, finanzasController.delete);

  // Montar el enrutador bajo la ruta /api/finanzas
  app.use("/api/finanzas", finanzasRouter);
};
