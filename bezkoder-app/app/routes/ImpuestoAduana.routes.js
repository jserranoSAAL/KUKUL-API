module.exports = app => {
    const impuestoAduanaController = require("../controllers/ImpuestoAduana.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas con autenticación requerida
    router.post("/", requireAuth, impuestoAduanaController.create); // Crear un nuevo impuesto de aduana
    router.get("/", requireAuth, impuestoAduanaController.findAll); // Obtener todos los impuestos de aduana
    router.get("/:id", requireAuth, impuestoAduanaController.findOne); // Obtener un impuesto de aduana por su ID
    router.put("/:id", requireAuth, impuestoAduanaController.update); // Actualizar un impuesto de aduana por su ID
    router.delete("/:id", requireAuth, impuestoAduanaController.delete); // Eliminar un impuesto de aduana por su ID

    app.use("/api/impuestosAduana", router);
};
