// app/routes/extranetClient.routes.js

module.exports = (app) => {
    const extranetClientController = require("../controllers/extranetClient.controller");
    const { requireAuth } = require("../middlewares/auth");

    const extranetClientRouter = require("express").Router();

    // Crear un nuevo ExtranetClient
    extranetClientRouter.post("/", requireAuth, extranetClientController.create);

    // Obtener todos los ExtranetClient
    extranetClientRouter.get("/", requireAuth, extranetClientController.findAll);

    // Obtener un ExtranetClient por ID
    extranetClientRouter.get("/:id", requireAuth, extranetClientController.findOne);

    // Actualizar un ExtranetClient por ID
    extranetClientRouter.put("/:id", requireAuth, extranetClientController.update);

    // Eliminar un ExtranetClient por ID
    extranetClientRouter.delete("/:id", requireAuth, extranetClientController.delete);

    app.use("/api/extranetClient", extranetClientRouter);
};
