module.exports = app => {
    const facturasController = require("../controllers/Facturas.controller.js");

    const facturasRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear una nueva Factura
    facturasRouter.post("/", requireAuth, facturasController.create);

    // Ruta para recuperar todas las Facturas
    facturasRouter.get("/", requireAuth, facturasController.findAll);

    // Ruta para recuperar una única Factura con id
    facturasRouter.get("/:id", requireAuth, facturasController.findOne);

    // Ruta para actualizar una Factura con id
    facturasRouter.put("/:id", requireAuth, facturasController.update);

    // Ruta para eliminar una Factura con id
    facturasRouter.delete("/:id", requireAuth, facturasController.delete);

    // Montar el enrutador bajo la ruta /api/facturas
    app.use("/api/facturas", facturasRouter);
};
