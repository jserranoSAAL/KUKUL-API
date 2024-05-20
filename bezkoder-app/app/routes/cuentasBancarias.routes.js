module.exports = app => {
  const cuentasBancariasController = require("../controllers/cuentasBancarias.controller.js");
  const { requireAuth } = require("../middlewares/auth");

  const cuentasBancariasRouter = require("express").Router();

  // Crear una nueva entrada de CuentasBancarias
  cuentasBancariasRouter.post("/", requireAuth, cuentasBancariasController.create);

  // Obtener todas las entradas de CuentasBancarias
  cuentasBancariasRouter.get("/", requireAuth, cuentasBancariasController.findAll);

  // Obtener una entrada de CuentasBancarias por ID de Agencia de Viaje
  cuentasBancariasRouter.get("/:id", requireAuth, cuentasBancariasController.findOne);

  // Actualizar una entrada de CuentasBancarias por ID de Agencia de Viaje
  cuentasBancariasRouter.put("/:id", requireAuth, cuentasBancariasController.update);

  // Eliminar una entrada de CuentasBancarias por ID de Agencia de Viaje
  cuentasBancariasRouter.delete("/:id", requireAuth, cuentasBancariasController.delete);

  // Montar el enrutador bajo la ruta /api/cuentasBancarias
  app.use("/api/cuentasBancarias", cuentasBancariasRouter);
};
