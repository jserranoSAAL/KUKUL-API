module.exports = app => {
    const parametrosCotizacionController = require("../controllers/parametrosCotizacion.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const parametrosCotizacionRouter = require("express").Router();

    // Crear un nuevo registro de ParametrosCotizacion
    parametrosCotizacionRouter.post("/", requireAuth, parametrosCotizacionController.create);

    // Recuperar todos los registros de ParametrosCotizacion
    parametrosCotizacionRouter.get("/", requireAuth, parametrosCotizacionController.findAll);

    // Recuperar un único registro de ParametrosCotizacion con id
    parametrosCotizacionRouter.get("/:id", requireAuth, parametrosCotizacionController.findOne);

    // Actualizar un registro de ParametrosCotizacion con id
    parametrosCotizacionRouter.put("/:id", requireAuth, parametrosCotizacionController.update);

    // Eliminar un registro de ParametrosCotizacion con id
    parametrosCotizacionRouter.delete("/:id", requireAuth, parametrosCotizacionController.delete);

    // Montar el enrutador bajo la ruta /api/parametrosCotizacion
    app.use("/api/parametrosCotizacion", parametrosCotizacionRouter);
};
