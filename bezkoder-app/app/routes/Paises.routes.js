module.exports = app => {
    const paisesController = require("../controllers/Paises.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para países con autenticación requerida
    router.post("/", requireAuth, paisesController.create);
    router.get("/", requireAuth, paisesController.findAll);
    router.get("/:id", requireAuth, paisesController.findOne);

    app.use("/api/paises", router);
};
