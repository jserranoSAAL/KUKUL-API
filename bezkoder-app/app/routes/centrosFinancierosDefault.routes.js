module.exports = app => {
    const centrosFinancierosDefaultController = require("../controllers/centrosFinancierosDefault.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    router.post("/", requireAuth, centrosFinancierosDefaultController.create);
    router.get("/", requireAuth, centrosFinancierosDefaultController.findAll);
    router.get("/:id", requireAuth, centrosFinancierosDefaultController.findOne);
    router.put("/:id", requireAuth, centrosFinancierosDefaultController.update);
    router.delete("/:id", requireAuth, centrosFinancierosDefaultController.delete);
    router.post("/upsert", requireAuth, centrosFinancierosDefaultController.upsert); // Nueva ruta para upsert


    app.use("/api/centrosFinancierosDefault", router);
};
