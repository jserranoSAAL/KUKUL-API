module.exports = app => {
    const addressesController = require("../controllers/Addresses.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const addressesRouter = require("express").Router();

    // Rutas para Addresses con Middleware de Autenticación
    addressesRouter.post("/", requireAuth, addressesController.create); // Crear un nuevo Address
    addressesRouter.get("/", requireAuth, addressesController.findAll); // Obtener todos los Addresses
    addressesRouter.get("/:id", requireAuth, addressesController.findOne); // Obtener un Address por id
    addressesRouter.put("/:id", requireAuth, addressesController.update); // Actualizar un Address por id
    addressesRouter.delete("/:id", requireAuth, addressesController.delete); // Eliminar un Address por id
    addressesRouter.post("/upsert", requireAuth, addressesController.upsert); // Upsert un Address
    addressesRouter.get("/latest", requireAuth, addressesController.findLatest); // Obtener el último Address

    app.use("/api/addresses", addressesRouter);
};
