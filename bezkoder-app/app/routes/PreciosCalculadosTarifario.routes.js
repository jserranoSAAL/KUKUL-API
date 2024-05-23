module.exports = app => {
    const preciosCalculadosTarifario = require("../controllers/PreciosCalculadosTarifario.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear un nuevo precio calculado
    router.post("/", requireAuth, preciosCalculadosTarifario.create);
    // Obtener todos los precios calculados
    router.get("/", requireAuth, preciosCalculadosTarifario.findAll);
    // Obtener un precio calculado por ID
    router.get("/:id", requireAuth, preciosCalculadosTarifario.findOne);
    // Actualizar un precio calculado por ID
    router.put("/:id", requireAuth, preciosCalculadosTarifario.update);
    // Eliminar un precio calculado por ID
    router.delete("/:id", requireAuth, preciosCalculadosTarifario.delete);

    app.use("/api/precios-calculados-tarifario", router);
};
