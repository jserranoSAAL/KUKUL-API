module.exports = app => {
    const creditosDebitosController = require("../controllers/CreditosDebitos.controller.js");

    const creditosDebitosRouter = require("express").Router();

    // Ruta para crear un nuevo registro de Créditos o Débitos
    creditosDebitosRouter.post("/", creditosDebitosController.create);

    // Ruta para recuperar todos los registros de Créditos y Débitos
    creditosDebitosRouter.get("/", creditosDebitosController.findAll);

    // Ruta para recuperar un único registro de Créditos o Débitos con id
    creditosDebitosRouter.get("/:id", creditosDebitosController.findOne);

    // Ruta para actualizar un registro de Créditos o Débitos con id
    creditosDebitosRouter.put("/:id", creditosDebitosController.update);

    // Ruta para eliminar un registro de Créditos o Débitos con id
    creditosDebitosRouter.delete("/:id", creditosDebitosController.delete);

    // Montar el enrutador bajo la ruta /api/creditosDebitos
    app.use("/api/creditosDebitos", creditosDebitosRouter);
};
