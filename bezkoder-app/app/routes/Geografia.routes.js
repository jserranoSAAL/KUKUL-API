module.exports = app => {
    const geografiaController = require("../controllers/Geografia.controller");

    const geografiaRouter = require("express").Router();

    // Rutas para Geografia    
    geografiaRouter.get("/", geografiaController.findAll);    

    app.use("/api/geografia", geografiaRouter);
};
