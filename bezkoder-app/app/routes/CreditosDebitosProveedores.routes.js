/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Endpoints para manejar las categorías
 */

/**
 * @swagger
 * /api/categorias:
 *   post:
 *     summary: Crear una nueva categoría
 *     description: Crea una nueva categoría con el nombre proporcionado.
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la categoría a crear
 *     responses:
 *       '200':
 *         description: Categoría creada exitosamente
 *       '400':
 *         description: El nombre de la categoría es requerido
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por su ID
 *     description: Retorna una categoría según el ID proporcionado.
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Categoría encontrada
 *       '404':
 *         description: No se encontró una categoría con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias/{id}:
 *   put:
 *     summary: Actualizar una categoría por su ID
 *     description: Actualiza una categoría existente según el ID proporcionado.
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nuevo nombre de la categoría
 *     responses:
 *       '200':
 *         description: Categoría actualizada exitosamente
 *       '404':
 *         description: No se puede actualizar la categoría con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias/{id}:
 *   delete:
 *     summary: Eliminar una categoría por su ID
 *     description: Elimina una categoría según el ID proporcionado.
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Categoría eliminada exitosamente
 *       '404':
 *         description: No se pudo eliminar la categoría con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     description: Retorna una lista de todas las categorías.
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias/buscar/{nombre}:
 *   get:
 *     summary: Buscar categorías por nombre (con operador LIKE)
 *     description: Retorna una lista de categorías cuyos nombres coincidan parcialmente con el nombre proporcionado.
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre (o parte del nombre) de la categoría a buscar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: No se encontraron categorías con nombre similar al proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

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
