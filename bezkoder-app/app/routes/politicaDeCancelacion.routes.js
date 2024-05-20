// routes/politicaDeCancelacion.routes.js
module.exports = app => {
    const politicaDeCancelacionController = require("../controllers/politicaDeCancelacion.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const politicaDeCancelacionRouter = require("express").Router();
  
    // Crear una nueva entrada de PoliticaDeCancelacion
    politicaDeCancelacionRouter.post("/", requireAuth, politicaDeCancelacionController.create);
  
    // Obtener todas las entradas de PoliticaDeCancelacion
    politicaDeCancelacionRouter.get("/", requireAuth, politicaDeCancelacionController.findAll);
  
    // Obtener una entrada de PoliticaDeCancelacion por ID
    politicaDeCancelacionRouter.get("/:id", requireAuth, politicaDeCancelacionController.findOne);
  
    // Actualizar una entrada de PoliticaDeCancelacion por ID
    politicaDeCancelacionRouter.put("/:id", requireAuth, politicaDeCancelacionController.update);
  
    // Eliminar una entrada de PoliticaDeCancelacion por ID
    politicaDeCancelacionRouter.delete("/:id", requireAuth, politicaDeCancelacionController.delete);
  
    // Montar el enrutador bajo la ruta /api/politicaDeCancelacion
    app.use("/api/politicaDeCancelacion", politicaDeCancelacionRouter);
  };
  