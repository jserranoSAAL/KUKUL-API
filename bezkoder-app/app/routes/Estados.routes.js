module.exports = app => {
    const estadosController = require("../controllers/Estados.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para estados con autenticación requerida
    router.post("/", requireAuth, estadosController.create);
    router.get("/", requireAuth, estadosController.findAll);
    router.get("/:id", requireAuth, estadosController.findOne);
    router.put("/:id", requireAuth, estadosController.update);
    router.delete("/:id", requireAuth, estadosController.delete);

    app.use("/api/estados", router);
};
