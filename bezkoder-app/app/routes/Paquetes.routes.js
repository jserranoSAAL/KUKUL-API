module.exports = app => {
    const paquetesController = require("../controllers/Paquetes.controller");

    const paquetesRouter = require("express").Router();

    // Rutas para Paquetes
    paquetesRouter.post("/", paquetesController.create);
    paquetesRouter.get("/", paquetesController.findAll);
    paquetesRouter.get("/:id", paquetesController.findOne);
    paquetesRouter.put("/:id", paquetesController.update);
    paquetesRouter.delete("/:id", paquetesController.delete);

    app.use("/api/paquetes", paquetesRouter);
};
