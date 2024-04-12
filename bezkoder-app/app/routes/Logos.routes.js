module.exports = app => {
    const logosController = require("../controllers/Logos.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const logosRouter = require("express").Router();

    // Rutas para Logos con Middleware de Autenticación
    logosRouter.post("/", requireAuth, logosController.create); // Crear un nuevo Logo
    logosRouter.get("/", requireAuth, logosController.findAll); // Obtener todos los Logos
    logosRouter.get("/:id", requireAuth, logosController.findOne); // Obtener un Logo por id
    logosRouter.put("/:id", requireAuth, logosController.update); // Actualizar un Logo por id
    logosRouter.delete("/:id", requireAuth, logosController.delete); // Eliminar un Logo por id
    logosRouter.post("/upsert", requireAuth, logosController.upsert); // Upsert un Logo
    logosRouter.get("/latest/one", requireAuth, logosController.findLatest); // Obtener el último Logo

    app.use("/api/logos", logosRouter);
};
