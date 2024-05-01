/**
 * @swagger
 * tags:
 *   name: Estados
 *   description: Endpoints para manejar los estados
 */

/**
 * @swagger
 * /api/estados:
 *   get:
 *     summary: Obtener todos los estados
 *     description: Retorna una lista de todos los estados.
 *     tags: [Estados]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 *
 *   post:
 *     summary: Crear un nuevo estado
 *     description: Crea un nuevo estado.
 *     tags: [Estados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               PaisID:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Estado creado correctamente
 *       '400':
 *         description: Campos requeridos faltantes
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/estados/{id}:
 *   get:
 *     summary: Obtener un estado por ID
 *     description: Retorna un estado basado en el ID proporcionado.
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del estado a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Estado encontrado
 *       '404':
 *         description: Estado no encontrado
 *       '500':
 *         description: Error interno del servidor
 *
 *   put:
 *     summary: Actualizar un estado por ID
 *     description: Actualiza un estado basado en el ID proporcionado.
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del estado a actualizar
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
 *               PaisID:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Estado actualizado correctamente
 *       '400':
 *         description: Campos requeridos faltantes
 *       '404':
 *         description: Estado no encontrado
 *       '500':
 *         description: Error interno del servidor
 *
 *   delete:
 *     summary: Eliminar un estado por ID
 *     description: Elimina un estado basado en el ID proporcionado.
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del estado a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Estado eliminado correctamente
 *       '404':
 *         description: Estado no encontrado
 *       '500':
 *         description: Error interno del servidor
 */



module.exports = app => {
    const estadosController = require("../controllers/Estados.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para estados con autenticación requerida
    router.post("/", requireAuth, estadosController.create);
    router.get("/", requireAuth, estadosController.findAll);
    router.get("/:id", requireAuth, estadosController.findOne);
    router.put("/:id", requireAuth, estadosController.update);
    router.delete("/:id", requireAuth, estadosController.delete);

    app.use("/api/estados", router);
};
