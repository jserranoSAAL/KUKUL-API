module.exports = app => {
    const politicasCancelacionController = require("../controllers/PoliticasCancelacion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas con Middleware de Autenticación
    router.post("/", requireAuth, politicasCancelacionController.create); // Crear una nueva política de cancelación
    router.get("/", requireAuth, politicasCancelacionController.findAll); // Obtener todas las políticas de cancelación
    router.get("/:id", requireAuth, politicasCancelacionController.findOne); // Obtener una política de cancelación por ID
    router.put("/:id", requireAuth, politicasCancelacionController.update); // Actualizar una política de cancelación por ID
    router.delete("/:id", requireAuth, politicasCancelacionController.delete); // Eliminar una política de cancelación por ID

    app.use("/api/politicas-cancelacion", router);
};
