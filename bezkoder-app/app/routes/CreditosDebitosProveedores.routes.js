module.exports = app => {
    const categoriasController = require("../controllers/Categorias.controller");
    const { requireAuth } = require("../middlewares/auth");

    const categoriasRouter = require("express").Router();

    // Rutas para Categorías con autenticación requerida
    categoriasRouter.post("/", requireAuth, categoriasController.create); // Crear una nueva categoría
    categoriasRouter.get("/:id", requireAuth, categoriasController.findOne); // Obtener una categoría por id
    categoriasRouter.put("/:id", requireAuth, categoriasController.update); // Actualizar una categoría por id
    categoriasRouter.delete("/:id", requireAuth, categoriasController.delete); // Eliminar una categoría por id
    categoriasRouter.get("/", requireAuth, categoriasController.findAll); // Obtener todas las categorías
    categoriasRouter.get("/buscar/:nombre", requireAuth, categoriasController.findByName); // Buscar categorías por nombre con LIKE

    app.use("/api/categorias", categoriasRouter);
};
