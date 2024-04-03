module.exports = app => {
    const categoriasController = require("../controllers/Categorias.controller");
    const { requireAuth } = require("../middlewares/auth");

    const categoriasRouter = require("express").Router();

    // Rutas para Categorías con autenticación requerida
    categoriasRouter.post("/", requireAuth, categoriasController.create);
    categoriasRouter.get("/:id", requireAuth, categoriasController.findOne);
    categoriasRouter.put("/:id", requireAuth, categoriasController.update);
    categoriasRouter.delete("/:id", requireAuth, categoriasController.delete);
    categoriasRouter.get("/", requireAuth, categoriasController.findAll);
    // Ruta para buscar categorías por nombre con LIKE
    categoriasRouter.get("/buscar/:nombre", requireAuth, categoriasController.findByName);


    app.use("/api/categorias", categoriasRouter);
};
