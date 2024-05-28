module.exports = app => {
    const parametrosCotizacionPaquete = require("../controllers/parametrosCotizacionPaquete.controller.js");
    const requireAuth = require('../middlewares/auth').requireAuth;

    const router = require("express").Router();

    // Crear un nuevo parámetro de cotización de paquete
    router.post("/", requireAuth, parametrosCotizacionPaquete.create);

    // Obtener todos los parámetros de cotización de paquete
    router.get("/", requireAuth, parametrosCotizacionPaquete.findAll);

    // Obtener un parámetro de cotización de paquete por ID
    router.get("/:id", requireAuth, parametrosCotizacionPaquete.findOne);

    // Actualizar un parámetro de cotización de paquete por ID
    router.put("/:id", requireAuth, parametrosCotizacionPaquete.update);

    // Eliminar un parámetro de cotización de paquete por ID
    router.delete("/:id", requireAuth, parametrosCotizacionPaquete.delete);

    app.use('/api/parametrosCotizacionPaquete', router);
};
