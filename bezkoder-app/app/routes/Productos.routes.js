module.exports = app => {
    const productosController = require("../controllers/Productos.controller");

    const productosRouter = require("express").Router();

    // Rutas para Productos
    productosRouter.post("/", productosController.create);
    productosRouter.get("/", productosController.findAll);
    productosRouter.get("/:id", productosController.findOne);
    productosRouter.put("/:id", productosController.update);
    productosRouter.delete("/:id", productosController.delete);

    app.use("/api/productos", productosRouter);
};
