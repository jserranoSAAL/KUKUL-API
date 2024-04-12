module.exports = app => {
    const contactInfoController = require("../controllers/ContactInfo.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const contactInfoRouter = require("express").Router();

    // Rutas para ContactInfo con Middleware de Autenticación
    contactInfoRouter.post("/", requireAuth, contactInfoController.create); // Crear un nuevo ContactInfo
    contactInfoRouter.get("/", requireAuth, contactInfoController.findAll); // Obtener todos los ContactInfo
    contactInfoRouter.get("/:id", requireAuth, contactInfoController.findOne); // Obtener un ContactInfo por id
    contactInfoRouter.put("/:id", requireAuth, contactInfoController.update); // Actualizar un ContactInfo por id
    contactInfoRouter.delete("/:id", requireAuth, contactInfoController.delete); // Eliminar un ContactInfo por id
    contactInfoRouter.post("/upsert", requireAuth, contactInfoController.upsert); // Upsert un ContactInfo
    contactInfoRouter.get("/latest", requireAuth, contactInfoController.findLatest); // Obtener el último ContactInfo

    app.use("/api/contactInfo", contactInfoRouter);
};
