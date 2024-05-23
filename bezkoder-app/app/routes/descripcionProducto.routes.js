module.exports = app => {
    const descripcionProductoController = require("../controllers/descripcionProducto.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();
        
    router.post("/upsert", requireAuth, descripcionProductoController.upsert);
    router.get("/producto/:productoId", requireAuth, descripcionProductoController.findByProductoId);

    app.use("/api/descripcionProducto", router);
};
