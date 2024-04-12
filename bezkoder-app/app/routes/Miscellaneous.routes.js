module.exports = app => {
    const miscellaneousController = require("../controllers/Miscellaneous.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const miscellaneousRouter = require("express").Router();

    // Rutas para Miscellaneous con Middleware de Autenticación
    miscellaneousRouter.post("/", requireAuth, miscellaneousController.create); // Crear un nuevo Miscellaneous
    miscellaneousRouter.get("/", requireAuth, miscellaneousController.findAll); // Obtener todos los Miscellaneous
    miscellaneousRouter.get("/:id", requireAuth, miscellaneousController.findOne); // Obtener un Miscellaneous por id
    miscellaneousRouter.put("/:id", requireAuth, miscellaneousController.update); // Actualizar un Miscellaneous por id
    miscellaneousRouter.delete("/:id", requireAuth, miscellaneousController.delete); // Eliminar un Miscellaneous por id
    miscellaneousRouter.post("/upsert", requireAuth, miscellaneousController.upsert); // Upsert un Miscellaneous
    miscellaneousRouter.get("/latest", requireAuth, miscellaneousController.findLatest); // Obtener el último Miscellaneous

    app.use("/api/miscellaneous", miscellaneousRouter);
};
