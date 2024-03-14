module.exports = app => {
    const productosController = require("../controllers/Productos.controller");

    const productosRouter = require("express").Router();

    // Rutas para Productos    
    productosRouter.get("/", productosController.findAll);
    

    app.use("/api/productos", productosRouter);
};
