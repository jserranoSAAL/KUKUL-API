module.exports = app => {
    const agenciasDeViajeController = require("../controllers/AgenciasDeViaje.controller");

    const agenciasDeViajeRouter = require("express").Router();

    // Rutas para AgenciasDeViaje
    agenciasDeViajeRouter.post("/", agenciasDeViajeController.create);
    agenciasDeViajeRouter.get("/", agenciasDeViajeController.findAll);
    agenciasDeViajeRouter.get("/:id", agenciasDeViajeController.findOne);
    agenciasDeViajeRouter.put("/:id", agenciasDeViajeController.update);
    agenciasDeViajeRouter.delete("/:id", agenciasDeViajeController.delete);

    app.use("/api/agenciasDeViaje", agenciasDeViajeRouter);
};
