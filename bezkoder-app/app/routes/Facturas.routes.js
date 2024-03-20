module.exports = app => {
    const facturasController = require("../controllers/Facturas.controller.js");

    const facturasRouter = require("express").Router();

    // Ruta para crear una nueva Factura
    facturasRouter.post("/", facturasController.create);

    // Ruta para recuperar todas las Facturas
    facturasRouter.get("/", facturasController.findAll);

    // Ruta para recuperar una única Factura con id
    facturasRouter.get("/:id", facturasController.findOne);

    // Ruta para actualizar una Factura con id
    facturasRouter.put("/:id", facturasController.update);

    // Ruta para eliminar una Factura con id
    facturasRouter.delete("/:id", facturasController.delete);

    // Montar el enrutador bajo la ruta /api/facturas
    app.use("/api/facturas", facturasRouter);
};
