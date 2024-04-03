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
    // Buscar Proveedores por nombre con LIKE
    proveedoresRouter.get("/buscar/:proveedor", requireAuth, proveedoresController.findByProveedor);

    app.use("/api/proveedores", proveedoresRouter);
};
