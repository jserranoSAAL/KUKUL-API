module.exports = app => {
    const creditosDeudasDetalleController = require("../controllers/creditosDeudasDetalle.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const creditosDeudasDetalleRouter = require("express").Router();
  
    // Crear un nuevo registro de CreditosDeudasDetalle
    creditosDeudasDetalleRouter.post("/", requireAuth, creditosDeudasDetalleController.create);
  
    // Recuperar todos los registros de CreditosDeudasDetalle
    creditosDeudasDetalleRouter.get("/", requireAuth, creditosDeudasDetalleController.findAll);
  
    // Recuperar un único registro de CreditosDeudasDetalle con AgenciasDeViajeID
    creditosDeudasDetalleRouter.get("/:AgenciasDeViajeID", requireAuth, creditosDeudasDetalleController.findOne);
  
    // Actualizar un registro de CreditosDeudasDetalle con AgenciasDeViajeID
    creditosDeudasDetalleRouter.put("/:AgenciasDeViajeID", requireAuth, creditosDeudasDetalleController.update);
  
    // Eliminar un registro de CreditosDeudasDetalle con AgenciasDeViajeID
    creditosDeudasDetalleRouter.delete("/:AgenciasDeViajeID", requireAuth, creditosDeudasDetalleController.delete);
  
    // Montar el enrutador bajo la ruta /api/creditosDeudasDetalle
    app.use("/api/creditosDeudasDetalle", creditosDeudasDetalleRouter);
  };
  