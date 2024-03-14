module.exports = app => {
    const paquetesController = require("../controllers/Paquetes.controller");

    const paquetesRouter = require("express").Router();

    // Rutas para Paquetes    
    paquetesRouter.get("/", paquetesController.findAll);
    

    app.use("/api/paquetes", paquetesRouter);
};
