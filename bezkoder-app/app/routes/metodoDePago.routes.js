// routes/metodoDePago.routes.js
module.exports = app => {
    const metodoDePagoController = require("../controllers/metodoDePago.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const metodoDePagoRouter = require("express").Router();
  
    // Crear una nueva entrada de MetodoDePago
    metodoDePagoRouter.post("/", requireAuth, metodoDePagoController.create);
  
    // Obtener todas las entradas de MetodoDePago
    metodoDePagoRouter.get("/", requireAuth, metodoDePagoController.findAll);
  
    // Obtener una entrada de MetodoDePago por ID
    metodoDePagoRouter.get("/:id", requireAuth, metodoDePagoController.findOne);
  
    // Actualizar una entrada de MetodoDePago por ID
    metodoDePagoRouter.put("/:id", requireAuth, metodoDePagoController.update);
  
    // Eliminar una entrada de MetodoDePago por ID
    metodoDePagoRouter.delete("/:id", requireAuth, metodoDePagoController.delete);
  
    // Montar el enrutador bajo la ruta /api/metodoDePago
    app.use("/api/metodoDePago", metodoDePagoRouter);
  };
  