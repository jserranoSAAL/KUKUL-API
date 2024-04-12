module.exports = app => {
    const termsAndConditionsController = require("../controllers/TermsAndConditions.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const termsAndConditionsRouter = require("express").Router();

    // Rutas para TermsAndConditions con Middleware de Autenticación
    termsAndConditionsRouter.post("/", requireAuth, termsAndConditionsController.create); // Crear nuevos Términos y Condiciones
    termsAndConditionsRouter.get("/", requireAuth, termsAndConditionsController.findAll); // Obtener todos los Términos y Condiciones
    termsAndConditionsRouter.get("/:id", requireAuth, termsAndConditionsController.findOne); // Obtener Términos y Condiciones por id
    termsAndConditionsRouter.put("/:id", requireAuth, termsAndConditionsController.update); // Actualizar Términos y Condiciones por id
    termsAndConditionsRouter.delete("/:id", requireAuth, termsAndConditionsController.delete); // Eliminar Términos y Condiciones por id
    termsAndConditionsRouter.post("/upsert", requireAuth, termsAndConditionsController.upsert); // Upsert Términos y Condiciones
    termsAndConditionsRouter.get("/latest/one", requireAuth, termsAndConditionsController.findLatest); // Obtener el último registro de Términos y Condiciones

    app.use("/api/termsAndConditions", termsAndConditionsRouter);
};
