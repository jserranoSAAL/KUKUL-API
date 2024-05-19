// app/routes/direcciones.routes.js

module.exports = (app) => {
    const direccionesController = require("../controllers/direcciones.controller");
    const { requireAuth } = require("../middlewares/auth");

    const direccionesRouter = require("express").Router();

    // Crear una nueva Dirección
    direccionesRouter.post("/", requireAuth, direccionesController.create);

    // Obtener todas las Direcciones
    direccionesRouter.get("/", requireAuth, direccionesController.findAll);

    // Obtener una Dirección por ID
    direccionesRouter.get("/:id", requireAuth, direccionesController.findOne);

    // Actualizar una Dirección por ID
    direccionesRouter.put("/:id", requireAuth, direccionesController.update);

    // Eliminar una Dirección por ID
    direccionesRouter.delete("/:id", requireAuth, direccionesController.delete);

    app.use("/api/direcciones", direccionesRouter);
};
