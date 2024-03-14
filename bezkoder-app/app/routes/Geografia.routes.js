module.exports = app => {
    const geografiaController = require("../controllers/Geografia.controller");

    const geografiaRouter = require("express").Router();

    // Rutas para Geografia
    geografiaRouter.post("/", geografiaController.create);
    geografiaRouter.get("/", geografiaController.findAll);
    geografiaRouter.get("/:id", geografiaController.findOne);
    geografiaRouter.put("/:id", geografiaController.update);
    geografiaRouter.delete("/:id", geografiaController.delete);

    app.use("/api/geografia", geografiaRouter);
};
