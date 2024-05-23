module.exports = app => {
    const parametrosCotizacionTarifario = require("../controllers/ParametrosCotizacionTarifario.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear un nuevo parámetro de cotización
    router.post("/", requireAuth, parametrosCotizacionTarifario.create);
    // Obtener todos los parámetros de cotización
    router.get("/", requireAuth, parametrosCotizacionTarifario.findAll);
    // Obtener un parámetro de cotización por ID
    router.get("/:id", requireAuth, parametrosCotizacionTarifario.findOne);
    // Actualizar un parámetro de cotización por ID
    router.put("/:id", requireAuth, parametrosCotizacionTarifario.update);
    // Eliminar un parámetro de cotización por ID
    router.delete("/:id", requireAuth, parametrosCotizacionTarifario.delete);

    app.use("/api/parametros-cotizacion-tarifario", router);
};
