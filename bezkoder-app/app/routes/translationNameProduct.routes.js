/**
 * @swagger
 * tags:
 *   name: Traducción Nombre de Producto
 *   description: Endpoints para manejar traducciones de nombres de productos
 */

/**
 * @swagger
 * /api/translationNameProduct:
 *   post:
 *     summary: Crear una nueva traducción del nombre del producto.
 *     description: Crea una nueva traducción del nombre del producto.
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
 *                 description: ID del producto.
 *               TECH:
 *                 type: string
 *                 description: Nombre técnico del producto.
 *               EN:
 *                 type: string
 *                 description: Nombre en inglés del producto.
 *               ES:
 *                 type: string
 *                 description: Nombre en español del producto.
 *               FR:
 *                 type: string
 *                 description: Nombre en francés del producto.
 *     responses:
 *       '200':
 *         description: Traducción del nombre del producto creada exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear la traducción del nombre del producto.
 *   get:
 *     summary: Obtener todas las traducciones de nombres de productos.
 *     description: Obtiene todas las traducciones de nombres de productos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Traducciones de nombres de productos obtenidas exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar las traducciones de nombres de productos.
 */

/**
 * @swagger
 * /api/translationNameProduct/{id}:
 *   get:
 *     summary: Obtener una traducción de nombre de producto por ID.
 *     description: Obtiene una traducción de nombre de producto por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la traducción del nombre de producto a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Traducción de nombre de producto obtenida exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: La traducción de nombre de producto con el ID especificado no fue encontrada.
 *       '500':
 *         description: Error del servidor al obtener la traducción de nombre de producto.
 *   put:
 *     summary: Actualizar una traducción de nombre de producto por ID.
 *     description: Actualiza una traducción de nombre de producto por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la traducción de nombre de producto a actualizar.
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
 *                 description: ID del producto.
 *               TECH:
 *                 type: string
 *                 description: Nombre técnico del producto.
 *               EN:
 *                 type: string
 *                 description: Nombre en inglés del producto.
 *               ES:
 *                 type: string
 *                 description: Nombre en español del producto.
 *               FR:
 *                 type: string
 *                 description: Nombre en francés del producto.
 *     responses:
 *       '200':
 *         description: Traducción de nombre de producto actualizada exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: La traducción de nombre de producto con el ID especificado no fue encontrada.
 *       '500':
 *         description: Error del servidor al actualizar la traducción de nombre de producto.
 *   delete:
 *     summary: Eliminar una traducción de nombre de producto por ID.
 *     description: Elimina una traducción de nombre de producto por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la traducción de nombre de producto a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Traducción de nombre de producto eliminada exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: La traducción de nombre de producto con el ID especificado no fue encontrada.
 *       '500':
 *         description: Error del servidor al eliminar la traducción de nombre de producto.
 */


module.exports = app => {
    const translationNameProductController = require("../controllers/translationNameProduct.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva traducción del nombre del producto
    router.post("/", requireAuth, translationNameProductController.create);

    // Obtener todas las traducciones de nombres de productos
    router.get("/", requireAuth, translationNameProductController.findAll);

    // Obtener una traducción de nombre de producto por ID
    router.get("/:id", requireAuth, translationNameProductController.findOne);

    // Actualizar una traducción de nombre de producto por ID
    router.put("/:id", requireAuth, translationNameProductController.update);

    // Eliminar una traducción de nombre de producto por ID
    router.delete("/:id", requireAuth, translationNameProductController.delete);

    app.use("/api/translationNameProduct", router);
};
