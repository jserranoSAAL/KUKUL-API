module.exports = app => {
    const viajeProductoAdicionalController = require("../controllers/viajeProductoAdicional.controller");

    const viajeProductoAdicionalRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Rutas para ViajeProductoAdicional
    viajeProductoAdicionalRouter.post("/", requireAuth, viajeProductoAdicionalController.addAdicional);
    viajeProductoAdicionalRouter.get("/", requireAuth, viajeProductoAdicionalController.findAll);
    viajeProductoAdicionalRouter.get("/:id", requireAuth, viajeProductoAdicionalController.findOne);
    viajeProductoAdicionalRouter.delete("/:id", requireAuth, viajeProductoAdicionalController.delete);
    viajeProductoAdicionalRouter.get("/buscar/:productoCostoAdicionalId/:viajeProductoId", requireAuth, viajeProductoAdicionalController.findByCostoAdicionalAndViajeProducto);
    viajeProductoAdicionalRouter.get("/viaje/:viajeProductoId", requireAuth, viajeProductoAdicionalController.findByViajeProductoId);

    app.use("/api/viajeProductoAdicional", viajeProductoAdicionalRouter);
};
