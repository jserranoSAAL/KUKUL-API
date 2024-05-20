module.exports = app => {
    const finanzasController = require("../controllers/finanzas.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const finanzasRouter = require("express").Router();
  
    // Crear un nuevo registro de Finanzas
    finanzasRouter.post("/", requireAuth, finanzasController.create);
  
    // Recuperar todos los registros de Finanzas
    finanzasRouter.get("/", requireAuth, finanzasController.findAll);
  
    // Recuperar un único registro de Finanzas con AgenciasDeViajeID
    finanzasRouter.get("/:AgenciasDeViajeID", requireAuth, finanzasController.findOne);
  
    // Actualizar un registro de Finanzas con AgenciasDeViajeID
    finanzasRouter.put("/:AgenciasDeViajeID", requireAuth, finanzasController.update);
  
    // Eliminar un registro de Finanzas con AgenciasDeViajeID
    finanzasRouter.delete("/:AgenciasDeViajeID", requireAuth, finanzasController.delete);
  
    // Montar el enrutador bajo la ruta /api/finanzas
    app.use("/api/finanzas", finanzasRouter);
  };
  