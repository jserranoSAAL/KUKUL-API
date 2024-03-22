module.exports = app => {
    const paquetesController = require("../controllers/Paquetes.controller");

    const paquetesRouter = require("express").Router();
        // Rutas para Paquetes    
    const { requireAuth } = require("../middlewares/auth");
    

    // Rutas para Paquetes con Middleware de Autenticación
    paquetesRouter.post("/", requireAuth, paquetesController.create);
    paquetesRouter.get("/", requireAuth, paquetesController.findAll);
    paquetesRouter.get("/:id", requireAuth, paquetesController.findOne);
    paquetesRouter.put("/:id", requireAuth, paquetesController.update);
    paquetesRouter.delete("/:id", requireAuth, paquetesController.delete);
    // Ruta para buscar paquetes por nombre
    paquetesRouter.get("/nombre/:nombre", requireAuth, paquetesController.findByName);

    

    app.use("/api/paquetes", paquetesRouter);
};
