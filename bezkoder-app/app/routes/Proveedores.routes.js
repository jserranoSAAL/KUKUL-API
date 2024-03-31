module.exports = app => {
    const proveedoresController = require("../controllers/Proveedores.controller");
    const { requireAuth } = require("../middlewares/auth");

    const proveedoresRouter = require("express").Router();

    // Rutas para Proveedores    
    proveedoresRouter.get("/", requireAuth, proveedoresController.findAll);
    proveedoresRouter.get("/:id", requireAuth, proveedoresController.findOne); // Obtener un proveedor por ID
    proveedoresRouter.post("/", requireAuth, proveedoresController.create); // Crear un nuevo proveedor
    proveedoresRouter.put("/:id", requireAuth, proveedoresController.update); // Actualizar un proveedor
    proveedoresRouter.delete("/:id", requireAuth, proveedoresController.delete); // Eliminar un proveedor

    app.use("/api/proveedores", proveedoresRouter);
};
