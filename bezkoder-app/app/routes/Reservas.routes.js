module.exports = app => {
    const reservasController = require("../controllers/Reservas.controller");

    const reservasRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Rutas para Reservas    
    reservasRouter.get("/", requireAuth, reservasController.findAll);    

    app.use("/api/reservas", reservasRouter);
};
