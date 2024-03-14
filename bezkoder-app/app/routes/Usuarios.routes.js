module.exports = app => {
    const usuariosController = require("../controllers/Usuarios.controller");

    const usuariosRouter = require("express").Router();

    // Rutas para Usuarios
    usuariosRouter.post("/", usuariosController.create);
    usuariosRouter.get("/", usuariosController.findAll);
    usuariosRouter.get("/:id", usuariosController.findOne);
    usuariosRouter.put("/:id", usuariosController.update);
    usuariosRouter.delete("/:id", usuariosController.delete);

    app.use("/api/usuarios", usuariosRouter);
};
