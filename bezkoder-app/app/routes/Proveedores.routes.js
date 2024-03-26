module.exports = app => {
    const proveedoresController = require("../controllers/Proveedores.controller");
    const { requireAuth } = require("../middlewares/auth");

    const proveedoresRouter = require("express").Router();

    // Rutas para Proveedores    
    proveedoresRouter.get("/", requireAuth, proveedoresController.findAll);    

    // Ruta para crear un nuevo Proveedor
    proveedoresRouter.post("/", requireAuth, proveedoresController.create);


    app.use("/api/proveedores", proveedoresRouter);
};
