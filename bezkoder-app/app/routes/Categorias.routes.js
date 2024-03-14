module.exports = app => {
    const categoriasController = require("../controllers/Categorias.controller");

    const categoriasRouter = require("express").Router();

    // Rutas para Categorias    
    categoriasRouter.get("/", categoriasController.findAll);
    

    app.use("/api/categorias", categoriasRouter);
};
