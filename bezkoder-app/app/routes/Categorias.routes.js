/**
 * @swagger
 * tags:
 *   name: Categorías
 *   description: Endpoints para manejar las categorías
 */

/**
 * @swagger
 * /api/categorias:
 *   post:
 *     summary: Crear una nueva categoría
 *     description: Crea una nueva categoría.
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Nombre
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre de la categoría
 *               Inicio:
 *                 type: string
 *                 description: Fecha de inicio de la categoría
 *               Fin:
 *                 type: string
 *                 description: Fecha de finalización de la categoría
 *               Codigo:
 *                 type: string
 *                 description: Código de la categoría
 *               UltimaActualizacion:
 *                 type: string
 *                 description: Última fecha de actualización de la categoría
 *     responses:
 *       '200':
 *         description: Categoría creada exitosamente
 *       '400':
 *         description: El contenido no puede estar vacío
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias:
 *   get:
 *     summary: Obtener todas las categorías
 *     description: Retorna una lista de todas las categorías.
 *     tags: [Categorías]
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
 * /api/categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por su ID
 *     description: Retorna una categoría específica según el ID proporcionado.
 *     tags: [Categorías]
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
 *         description: OK
 *       '404':
 *         description: No se encontró la categoría con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias/{id}:
 *   put:
 *     summary: Actualizar una categoría por su ID
 *     description: Actualiza una categoría existente según el ID proporcionado.
 *     tags: [Categorías]
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
 *               Nombre:
 *                 type: string
 *                 description: Nombre de la categoría
 *               Inicio:
 *                 type: string
 *                 description: Fecha de inicio de la categoría
 *               Fin:
 *                 type: string
 *                 description: Fecha de finalización de la categoría
 *               Codigo:
 *                 type: string
 *                 description: Código de la categoría
 *               UltimaActualizacion:
 *                 type: string
 *                 description: Última fecha de actualización de la categoría
 *     responses:
 *       '200':
 *         description: Categoría actualizada correctamente
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
 *     description: Elimina una categoría existente según el ID proporcionado.
 *     tags: [Categorías]
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
 *         description: Categoría eliminada correctamente
 *       '404':
 *         description: No se pudo eliminar la categoría con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias/buscar/{nombre}:
 *   get:
 *     summary: Buscar categorías por nombre
 *     description: Retorna una lista de categorías cuyos nombres coinciden parcialmente con el nombre proporcionado.
 *     tags: [Categorías]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre a buscar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

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
