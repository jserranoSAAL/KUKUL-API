module.exports = app => {
    const productosController = require("../controllers/Productos.controller");
    const { requireAuth } = require("../middlewares/auth");

    const productosRouter = require("express").Router();

    // Rutas para Productos    
    productosRouter.get("/", requireAuth, productosController.findAll);
    productosRouter.post("/", requireAuth, productosController.create); // Añade esta línea
    

    app.use("/api/productos", productosRouter);
};
