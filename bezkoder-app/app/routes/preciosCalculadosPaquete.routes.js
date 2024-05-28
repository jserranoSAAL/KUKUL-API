module.exports = app => {
    const preciosCalculadosPaquete = require("../controllers/preciosCalculadosPaquete.controller.js");
    const requireAuth = require('../middlewares/auth').requireAuth;

    const router = require("express").Router();

    // Crear un nuevo precio calculado de paquete
    router.post("/", requireAuth, preciosCalculadosPaquete.create);

    // Obtener todos los precios calculados de paquete
    router.get("/", requireAuth, preciosCalculadosPaquete.findAll);

    // Obtener un precio calculado de paquete por ID
    router.get("/:id", requireAuth, preciosCalculadosPaquete.findOne);

    // Actualizar un precio calculado de paquete por ID
    router.put("/:id", requireAuth, preciosCalculadosPaquete.update);

    // Eliminar un precio calculado de paquete por ID
    router.delete("/:id", requireAuth, preciosCalculadosPaquete.delete);

    app.use('/api/preciosCalculadosPaquete', router);
};
