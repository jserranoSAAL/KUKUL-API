module.exports = app => {
    const slogansController = require("../controllers/Slogans.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const slogansRouter = require("express").Router();

    // Rutas para Slogans con Middleware de Autenticación
    slogansRouter.post("/", requireAuth, slogansController.create); // Crear un nuevo Slogan
    slogansRouter.get("/", requireAuth, slogansController.findAll); // Obtener todos los Slogans
    slogansRouter.get("/:id", requireAuth, slogansController.findOne); // Obtener un Slogan por id
    slogansRouter.put("/:id", requireAuth, slogansController.update); // Actualizar un Slogan por id
    slogansRouter.delete("/:id", requireAuth, slogansController.delete); // Eliminar un Slogan por id
    slogansRouter.post("/upsert", requireAuth, slogansController.upsert); // Upsert un Slogan
    slogansRouter.get("/latest/one", requireAuth, slogansController.findLatest); // Obtener el último Slogan

    app.use("/api/slogans", slogansRouter);
};
