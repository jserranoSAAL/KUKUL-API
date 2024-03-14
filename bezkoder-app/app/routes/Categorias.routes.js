module.exports = app => {
    const categoriasController = require("../controllers/Categorias.controller");

    const categoriasRouter = require("express").Router();

    // Rutas para Categorias
    categoriasRouter.post("/", categoriasController.create);
    categoriasRouter.get("/", categoriasController.findAll);
    categoriasRouter.get("/:id", categoriasController.findOne);
    categoriasRouter.put("/:id", categoriasController.update);
    categoriasRouter.delete("/:id", categoriasController.delete);

    app.use("/api/categorias", categoriasRouter);
};
