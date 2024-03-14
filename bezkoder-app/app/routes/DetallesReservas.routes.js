module.exports = app => {
    const detallesReservasController = require("../controllers/DetallesReservas.controller");

    const detallesReservasRouter = require("express").Router();

    // Rutas para DetallesReservas    
    detallesReservasRouter.get("/", detallesReservasController.findAll);            

    app.use("/api/detallesReservas", detallesReservasRouter);
};
