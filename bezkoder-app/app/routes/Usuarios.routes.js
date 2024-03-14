module.exports = app => {
    const usuariosController = require("../controllers/Usuarios.controller");

    const usuariosRouter = require("express").Router();

    // Rutas para Usuarios
    usuariosRouter.post("/", usuariosController.create);
    usuariosRouter.get("/", usuariosController.findAll);
    usuariosRouter.get("/:id", usuariosController.findOne);
    usuariosRouter.put("/:id", usuariosController.update);
    usuariosRouter.delete("/:id", usuariosController.delete);
    usuariosRouter.put("/role/:id", usuariosController.updateRole);  // Nueva ruta para actualizar roles


    app.use("/api/usuarios", usuariosRouter);
};
