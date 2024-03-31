module.exports = app => {
    const usuariosController = require("../controllers/Usuarios.controller");

    const usuariosRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Rutas para Usuarios
    usuariosRouter.post("/", requireAuth, usuariosController.create);
    usuariosRouter.get("/", requireAuth, usuariosController.findAll);
    usuariosRouter.get("/:id", requireAuth, usuariosController.findOne);
    usuariosRouter.put("/:id", requireAuth, usuariosController.update);
    usuariosRouter.delete("/:id", requireAuth, usuariosController.delete);
    usuariosRouter.put("/role/:id", requireAuth, usuariosController.updateRole);  // Nueva ruta para actualizar roles


    app.use("/api/usuarios", usuariosRouter);
};
