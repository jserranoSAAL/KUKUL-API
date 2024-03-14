module.exports = app => {
    const proveedoresController = require("../controllers/Proveedores.controller");

    const proveedoresRouter = require("express").Router();

    // Rutas para Proveedores
    proveedoresRouter.post("/", proveedoresController.create);
    proveedoresRouter.get("/", proveedoresController.findAll);
    proveedoresRouter.get("/:id", proveedoresController.findOne);
    proveedoresRouter.put("/:id", proveedoresController.update);
    proveedoresRouter.delete("/:id", proveedoresController.delete);

    app.use("/api/proveedores", proveedoresRouter);
};
