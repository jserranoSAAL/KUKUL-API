module.exports = app => {
    const proveedoresController = require("../controllers/Proveedores.controller");

    const proveedoresRouter = require("express").Router();

    // Rutas para Proveedores    
    proveedoresRouter.get("/", proveedoresController.findAll);    

    app.use("/api/proveedores", proveedoresRouter);
};
