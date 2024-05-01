/**
 * @swagger
 * tags:
 *   name: Descripciones de Productos
 *   description: Endpoints para manejar las descripciones de productos
 */

/**
 * @swagger
 * /api/description_products:
 *   post:
 *     summary: Crear una nueva descripción de producto
 *     description: Crea una nueva descripción de producto con los campos proporcionados.
 *     tags: [Descripciones de Productos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductoID:
 *                 type: integer
 *                 description: ID del producto al que pertenece la descripción
 *               TECH:
 *                 type: string
 *                 description: Descripción técnica del producto
 *               EN:
 *                 type: string
 *                 description: Descripción en inglés del producto
 *               ES:
 *                 type: string
 *                 description: Descripción en español del producto
 *               FR:
 *                 type: string
 *                 description: Descripción en francés del producto
 *     responses:
 *       '200':
 *         description: Descripción de producto creada exitosamente
 *       '400':
 *         description: Todos los campos son requeridos
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/description_products:
 *   get:
 *     summary: Obtener todas las descripciones de productos
 *     description: Retorna una lista de todas las descripciones de productos.
 *     tags: [Descripciones de Productos]
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
 * /api/description_products/{id}:
 *   get:
 *     summary: Obtener una descripción de producto por su ID
 *     description: Retorna una descripción de producto según el ID proporcionado.
 *     tags: [Descripciones de Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la descripción de producto a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Descripción de producto encontrada
 *       '404':
 *         description: No se encontró una descripción de producto con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/description_products/{id}:
 *   put:
 *     summary: Actualizar una descripción de producto por su ID
 *     description: Actualiza una descripción de producto existente según el ID proporcionado.
 *     tags: [Descripciones de Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la descripción de producto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductoID:
 *                 type: integer
 *                 description: Nuevo ID del producto al que pertenece la descripción
 *               TECH:
 *                 type: string
 *                 description: Nueva descripción técnica del producto
 *               EN:
 *                 type: string
 *                 description: Nueva descripción en inglés del producto
 *               ES:
 *                 type: string
 *                 description: Nueva descripción en español del producto
 *               FR:
 *                 type: string
 *                 description: Nueva descripción en francés del producto
 *     responses:
 *       '200':
 *         description: Descripción de producto actualizada exitosamente
 *       '404':
 *         description: No se puede actualizar la descripción de producto con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/description_products/{id}:
 *   delete:
 *     summary: Eliminar una descripción de producto por su ID
 *     description: Elimina una descripción de producto según el ID proporcionado.
 *     tags: [Descripciones de Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la descripción de producto a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Descripción de producto eliminada exitosamente
 *       '404':
 *         description: No se pudo eliminar la descripción de producto con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const descriptionProductController = require("../controllers/descriptionProduct.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva descripción de producto
    router.post("/", requireAuth, descriptionProductController.create);

    // Obtener todas las descripciones de productos
    router.get("/", requireAuth, descriptionProductController.findAll);

    // Obtener una descripción de producto por ID
    router.get("/:id", requireAuth, descriptionProductController.findOne);

    // Actualizar una descripción de producto por ID
    router.put("/:id", requireAuth, descriptionProductController.update);

    // Eliminar una descripción de producto por ID
    router.delete("/:id", requireAuth, descriptionProductController.delete);

    app.use("/api/description_products", router);
};
