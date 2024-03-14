module.exports = app => {
    const agenciasDeViajeController = require("../controllers/AgenciasDeViaje.controller");

    const agenciasDeViajeRouter = require("express").Router();

    // Rutas para AgenciasDeViaje
    agenciasDeViajeRouter.get("/", agenciasDeViajeController.findAll);    

    app.use("/api/agenciasDeViaje", agenciasDeViajeRouter);
};
