module.exports = app => {
    const creditosDebitosController = require("../controllers/CreditosDebitos.controller.js");

    const creditosDebitosRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo registro de Créditos o Débitos
    creditosDebitosRouter.post("/", requireAuth, creditosDebitosController.create);

    // Ruta para recuperar todos los registros de Créditos y Débitos
    creditosDebitosRouter.get("/", requireAuth, creditosDebitosController.findAll);

    // Ruta para recuperar un único registro de Créditos o Débitos con id
    creditosDebitosRouter.get("/:id", requireAuth, creditosDebitosController.findOne);

    // Ruta para actualizar un registro de Créditos o Débitos con id
    creditosDebitosRouter.put("/:id", requireAuth, creditosDebitosController.update);

    // Ruta para eliminar un registro de Créditos o Débitos con id
    creditosDebitosRouter.delete("/:id", requireAuth, creditosDebitosController.delete);

    // Montar el enrutador bajo la ruta /api/creditosDebitos
    app.use("/api/creditosDebitos", creditosDebitosRouter);
};
