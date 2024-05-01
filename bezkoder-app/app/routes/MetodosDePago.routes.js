// routes/metodosDePago.routes.js

module.exports = app => {
    const metodosDePagoController = require("../controllers/MetodosDePago.controller");
    const { requireAuth } = require("../middlewares/auth"); // Middleware de autenticación

    const router = require("express").Router();

    // Rutas para Métodos de Pago con Middleware de Autenticación
    router.post("/", requireAuth, metodosDePagoController.create); // Crear un nuevo Método de Pago
    router.get("/", requireAuth, metodosDePagoController.findAll); // Obtener todos los Métodos de Pago
    router.get("/:id", requireAuth, metodosDePagoController.findOne); // Obtener un Método de Pago por id
    router.put("/:id", requireAuth, metodosDePagoController.update); // Actualizar un Método de Pago por id
    router.delete("/:id", requireAuth, metodosDePagoController.delete); // Eliminar un Método de Pago por id

    app.use("/api/metodos-de-pago", router);
};
