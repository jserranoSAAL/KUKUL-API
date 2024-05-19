module.exports = app => {
    const parametrosDocumentosController = require("../controllers/parametrosDocumentos.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const parametrosDocumentosRouter = require("express").Router();

    // Crear un nuevo registro de ParametrosDocumentos
    parametrosDocumentosRouter.post("/", requireAuth, parametrosDocumentosController.create);

    // Recuperar todos los registros de ParametrosDocumentos
    parametrosDocumentosRouter.get("/", requireAuth, parametrosDocumentosController.findAll);

    // Recuperar un único registro de ParametrosDocumentos con id
    parametrosDocumentosRouter.get("/:id", requireAuth, parametrosDocumentosController.findOne);

    // Actualizar un registro de ParametrosDocumentos con id
    parametrosDocumentosRouter.put("/:id", requireAuth, parametrosDocumentosController.update);

    // Eliminar un registro de ParametrosDocumentos con id
    parametrosDocumentosRouter.delete("/:id", requireAuth, parametrosDocumentosController.delete);

    // Montar el enrutador bajo la ruta /api/parametrosDocumentos
    app.use("/api/parametrosDocumentos", parametrosDocumentosRouter);
};
