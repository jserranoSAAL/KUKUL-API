module.exports = app => {
    const agenciaDeViajeCotizacionController = require("../controllers/AgenciaDeViajeCotizacion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const agenciaDeViajeCotizacionRouter = require("express").Router();

    // Crear una nueva Cotización de Agencia de Viaje
    agenciaDeViajeCotizacionRouter.post("/", requireAuth, agenciaDeViajeCotizacionController.create);

    // Recuperar una Cotización de Agencia de Viaje por ID de Agencia de Viaje
    agenciaDeViajeCotizacionRouter.get("/:agenciaId", requireAuth, agenciaDeViajeCotizacionController.findOne);

    // Actualizar una Cotización de Agencia de Viaje por ID
    agenciaDeViajeCotizacionRouter.put("/:id", requireAuth, agenciaDeViajeCotizacionController.update);

    // Eliminar una Cotización de Agencia de Viaje con el ID especificado
    agenciaDeViajeCotizacionRouter.delete("/:id", requireAuth, agenciaDeViajeCotizacionController.delete);

    app.use("/api/agenciaDeViajeCotizacion", agenciaDeViajeCotizacionRouter);
};
