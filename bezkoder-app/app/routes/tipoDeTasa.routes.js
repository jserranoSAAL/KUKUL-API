// routes/tipoDeTasa.routes.js
module.exports = app => {
    const tipoDeTasaController = require("../controllers/tipoDeTasa.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const tipoDeTasaRouter = require("express").Router();
  
    // Crear una nueva entrada de TipoDeTasa
    tipoDeTasaRouter.post("/", requireAuth, tipoDeTasaController.create);
  
    // Obtener todas las entradas de TipoDeTasa
    tipoDeTasaRouter.get("/", requireAuth, tipoDeTasaController.findAll);
  
    // Obtener una entrada de TipoDeTasa por ID
    tipoDeTasaRouter.get("/:id", requireAuth, tipoDeTasaController.findOne);
  
    // Actualizar una entrada de TipoDeTasa por ID
    tipoDeTasaRouter.put("/:id", requireAuth, tipoDeTasaController.update);
  
    // Eliminar una entrada de TipoDeTasa por ID
    tipoDeTasaRouter.delete("/:id", requireAuth, tipoDeTasaController.delete);
  
    // Montar el enrutador bajo la ruta /api/tipoDeTasa
    app.use("/api/tipoDeTasa", tipoDeTasaRouter);
  };
  