// routes/parametrosFinanzas.routes.js
module.exports = app => {
    const parametrosFinanzasController = require("../controllers/parametrosFinanzas.controller.js");
    const { requireAuth } = require("../middlewares/auth");
  
    const parametrosFinanzasRouter = require("express").Router();
  
    // Crear una nueva entrada de ParametrosFinanzas
    parametrosFinanzasRouter.post("/", requireAuth, parametrosFinanzasController.create);
  
    // Obtener todas las entradas de ParametrosFinanzas
    parametrosFinanzasRouter.get("/", requireAuth, parametrosFinanzasController.findAll);
  
    // Obtener una entrada de ParametrosFinanzas por ID
    parametrosFinanzasRouter.get("/:id", requireAuth, parametrosFinanzasController.findOne);
  
    // Actualizar una entrada de ParametrosFinanzas por ID
    parametrosFinanzasRouter.put("/:id", requireAuth, parametrosFinanzasController.update);
  
    // Eliminar una entrada de ParametrosFinanzas por ID
    parametrosFinanzasRouter.delete("/:id", requireAuth, parametrosFinanzasController.delete);
  
    // Montar el enrutador bajo la ruta /api/parametrosFinanzas
    app.use("/api/parametrosFinanzas", parametrosFinanzasRouter);
  };
  