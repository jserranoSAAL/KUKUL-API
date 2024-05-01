module.exports = app => {
    const bancosDeProveedoresController = require("../controllers/BancoProveedores.controller");
    const { requireAuth } = require("../middlewares/auth");

    const bancosDeProveedoresRouter = require("express").Router();

    // Rutas para BancosDeProveedores con autenticación requerida
    bancosDeProveedoresRouter.post("/", requireAuth, bancosDeProveedoresController.create); // Crear un nuevo banco de proveedores
    bancosDeProveedoresRouter.get("/", requireAuth, bancosDeProveedoresController.findAll); // Obtener todos los bancos de proveedores
    bancosDeProveedoresRouter.get("/:id", requireAuth, bancosDeProveedoresController.findOne); // Obtener un banco de proveedores por su ID
    bancosDeProveedoresRouter.put("/:id", requireAuth, bancosDeProveedoresController.update); // Actualizar un banco de proveedores por su ID
    bancosDeProveedoresRouter.delete("/:id", requireAuth, bancosDeProveedoresController.delete); // Eliminar un banco de proveedores por su ID

    app.use("/api/bancos-de-proveedores", bancosDeProveedoresRouter);
};
