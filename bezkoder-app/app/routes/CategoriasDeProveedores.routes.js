/**
 * @swagger
 * tags:
 *   name: Categorías de Proveedores
 *   description: Endpoints para manejar las categorías de proveedores
 */

/**
 * @swagger
 * /api/categorias-de-proveedores:
 *   post:
 *     summary: Crear una nueva categoría de proveedores
 *     description: Crea una nueva categoría de proveedores.
 *     tags: [Categorías de Proveedores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - hiden
 *               - web
 *               - proveedorId
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de la categoría de proveedores
 *               hiden:
 *                 type: boolean
 *                 description: Valor booleano indicando si la categoría está oculta o no
 *               web:
 *                 type: boolean
 *                 description: Valor booleano indicando si la categoría está disponible en la web o no
 *               proveedorId:
 *                 type: integer
 *                 description: ID del proveedor asociado a la categoría
 *     responses:
 *       '201':
 *         description: Categoría de proveedores creada exitosamente
 *       '400':
 *         description: Todos los campos son requeridos
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias-de-proveedores:
 *   get:
 *     summary: Obtener todas las categorías de proveedores
 *     description: Retorna una lista de todas las categorías de proveedores.
 *     tags: [Categorías de Proveedores]
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
 * /api/categorias-de-proveedores/{id}:
 *   get:
 *     summary: Obtener una categoría de proveedores por su ID
 *     description: Retorna una categoría de proveedores específica según el ID proporcionado.
 *     tags: [Categorías de Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría de proveedores a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: No se encontró la categoría de proveedores con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias-de-proveedores/{id}:
 *   put:
 *     summary: Actualizar una categoría de proveedores por su ID
 *     description: Actualiza una categoría de proveedores existente según el ID proporcionado.
 *     tags: [Categorías de Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría de proveedores a actualizar
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
 *                 description: Nombre de la categoría de proveedores
 *               hiden:
 *                 type: boolean
 *                 description: Valor booleano indicando si la categoría está oculta o no
 *               web:
 *                 type: boolean
 *                 description: Valor booleano indicando si la categoría está disponible en la web o no
 *               proveedorId:
 *                 type: integer
 *                 description: ID del proveedor asociado a la categoría
 *     responses:
 *       '200':
 *         description: Categoría de proveedores actualizada correctamente
 *       '404':
 *         description: No se puede actualizar la categoría de proveedores con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/categorias-de-proveedores/{id}:
 *   delete:
 *     summary: Eliminar una categoría de proveedores por su ID
 *     description: Elimina una categoría de proveedores existente según el ID proporcionado.
 *     tags: [Categorías de Proveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría de proveedores a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Categoría de proveedores eliminada correctamente
 *       '404':
 *         description: No se pudo eliminar la categoría de proveedores con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const router = require("express").Router();
    const categoriasDeProveedoresController = require("../controllers/CategoriasDeProveedores.controller");
    const { requireAuth } = require("../middlewares/auth");

    // Rutas para Categorías de Proveedores con autenticación requerida
    router.post("/", requireAuth, categoriasDeProveedoresController.create); // Crear una nueva categoría
    router.get("/", requireAuth, categoriasDeProveedoresController.findAll); // Obtener todas las categorías
    router.get("/:id", requireAuth, categoriasDeProveedoresController.findOne); // Obtener una categoría por su ID
    router.put("/:id", requireAuth, categoriasDeProveedoresController.update); // Actualizar una categoría por su ID
    router.delete("/:id", requireAuth, categoriasDeProveedoresController.delete); // Eliminar una categoría por su ID

    app.use("/api/categorias-de-proveedores", router);
};
