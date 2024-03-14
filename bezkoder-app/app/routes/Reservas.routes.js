module.exports = app => {
    const reservasController = require("../controllers/Reservas.controller");

    const reservasRouter = require("express").Router();

    // Rutas para Reservas    
    reservasRouter.get("/", reservasController.findAll);    

    app.use("/api/reservas", reservasRouter);
};
