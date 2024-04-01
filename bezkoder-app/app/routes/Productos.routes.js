module.exports = app => {
    const productosController = require("../controllers/Productos.controller");
    const { requireAuth } = require("../middlewares/auth");

    const productosRouter = require("express").Router();

    // Rutas para Productos con autenticación requerida
    productosRouter.get("/", requireAuth, productosController.findAll);
    productosRouter.get("/:id", requireAuth, productosController.findOne);
    productosRouter.post("/", requireAuth, productosController.create);
    productosRouter.put("/:id", requireAuth, productosController.update);
    productosRouter.delete("/:id", requireAuth, productosController.delete);

    app.use("/api/productos", productosRouter);
};
