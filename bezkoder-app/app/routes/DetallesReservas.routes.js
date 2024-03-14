module.exports = app => {
    const detallesReservasController = require("../controllers/DetallesReservas.controller");

    const detallesReservasRouter = require("express").Router();

    // Rutas para DetallesReservas
    detallesReservasRouter.post("/", detallesReservasController.create);
    detallesReservasRouter.get("/", detallesReservasController.findAll);
    detallesReservasRouter.get("/:id", detallesReservasController.findOne);
    detallesReservasRouter.put("/:id", detallesReservasController.update);
    detallesReservasRouter.delete("/:id", detallesReservasController.delete);

    app.use("/api/detallesReservas", detallesReservasRouter);
};
