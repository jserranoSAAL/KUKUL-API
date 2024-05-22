module.exports = app => {
    const centrosFinancierosController = require("../controllers/centrosFinancieros.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, centrosFinancierosController.create);
    router.get("/", requireAuth, centrosFinancierosController.findAll);
    router.get("/:id", requireAuth, centrosFinancierosController.findOne);
    router.put("/:id", requireAuth, centrosFinancierosController.update);
    router.delete("/:id", requireAuth, centrosFinancierosController.delete);
    router.get("/buscar/:nombre", requireAuth, centrosFinancierosController.findByName); // Nueva ruta para buscar por nombre

    app.use("/api/centrosFinancieros", router);
};
