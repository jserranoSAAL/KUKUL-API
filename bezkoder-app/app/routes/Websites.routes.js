module.exports = app => {
    const websitesController = require("../controllers/Websites.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const websitesRouter = require("express").Router();

    // Rutas para Websites con Middleware de Autenticación
    websitesRouter.post("/", requireAuth, websitesController.create); // Crear un nuevo Website
    websitesRouter.get("/", requireAuth, websitesController.findAll); // Obtener todos los Websites
    websitesRouter.get("/:id", requireAuth, websitesController.findOne); // Obtener un Website por id
    websitesRouter.put("/:id", requireAuth, websitesController.update); // Actualizar un Website por id
    websitesRouter.delete("/:id", requireAuth, websitesController.delete); // Eliminar un Website por id
    websitesRouter.post("/upsert", requireAuth, websitesController.upsert); // Upsert un Website
    websitesRouter.get("/latest/one", requireAuth, websitesController.findLatest); // Obtener el último Website

    app.use("/api/websites", websitesRouter);
};
