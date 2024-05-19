module.exports = app => {
    const parametrosEmailsController = require("../controllers/parametrosEmails.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const parametrosEmailsRouter = require("express").Router();

    // Crear un nuevo registro de ParametrosEmails
    parametrosEmailsRouter.post("/", requireAuth, parametrosEmailsController.create);

    // Recuperar todos los registros de ParametrosEmails
    parametrosEmailsRouter.get("/", requireAuth, parametrosEmailsController.findAll);

    // Recuperar un único registro de ParametrosEmails con id
    parametrosEmailsRouter.get("/:id", requireAuth, parametrosEmailsController.findOne);

    // Actualizar un registro de ParametrosEmails con id
    parametrosEmailsRouter.put("/:id", requireAuth, parametrosEmailsController.update);

    // Eliminar un registro de ParametrosEmails con id
    parametrosEmailsRouter.delete("/:id", requireAuth, parametrosEmailsController.delete);

    // Montar el enrutador bajo la ruta /api/parametrosEmails
    app.use("/api/parametrosEmails", parametrosEmailsRouter);
};
