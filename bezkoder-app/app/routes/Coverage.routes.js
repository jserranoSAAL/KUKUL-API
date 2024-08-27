// Coverage.routes.js

module.exports = app => {
    const coverageController = require("../controllers/Coverage.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const coverageRouter = require("express").Router();

    // Rutas para Coverage con Middleware de Autenticación
    coverageRouter.post("/", requireAuth, coverageController.create); // Subir una nueva portada
    coverageRouter.get("/", requireAuth, coverageController.findAll); // Obtener todas las portadas
    coverageRouter.get("/default", coverageController.findDefault); // Obtener la portada por defecto
    coverageRouter.delete("/:id", requireAuth, coverageController.delete); // Eliminar una portada por id
    coverageRouter.put("/default/:id", requireAuth, coverageController.setDefault); // Establecer una portada como predeterminada por id

    app.use("/api/coverages", coverageRouter);
};
