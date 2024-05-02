/**
 * @swagger
 * tags:
 *   name: Traducciones
 *   description: Endpoints para manejar traducciones
 */

/**
 * @swagger
 * /api/traducciones:
 *   post:
 *     summary: Crear una nueva traducción.
 *     description: Crea una nueva traducción.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *                 description: Código de la traducción.
 *               traduccion:
 *                 type: string
 *                 description: Texto de la traducción.
 *     responses:
 *       '200':
 *         description: Traducción creada exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear la traducción.
 *   get:
 *     summary: Obtener todas las traducciones.
 *     description: Obtiene todas las traducciones.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Traducciones obtenidas exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar las traducciones.
 */

/**
 * @swagger
 * /api/traducciones/{id}:
 *   get:
 *     summary: Obtener una traducción por ID.
 *     description: Obtiene una traducción por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la traducción a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Traducción obtenida exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: La traducción con el ID especificado no fue encontrada.
 *       '500':
 *         description: Error del servidor al obtener la traducción.
 *   put:
 *     summary: Actualizar una traducción por ID.
 *     description: Actualiza una traducción por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la traducción a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo:
 *                 type: string
 *                 description: Código de la traducción.
 *               traduccion:
 *                 type: string
 *                 description: Texto de la traducción.
 *     responses:
 *       '200':
 *         description: Traducción actualizada exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: La traducción con el ID especificado no fue encontrada.
 *       '500':
 *         description: Error del servidor al actualizar la traducción.
 *   delete:
 *     summary: Eliminar una traducción por ID.
 *     description: Elimina una traducción por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la traducción a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Traducción eliminada exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: La traducción con el ID especificado no fue encontrada.
 *       '500':
 *         description: Error del servidor al eliminar la traducción.
 */

module.exports = app => {
    const traduccionController = require("../controllers/Traduccion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva traducción
    router.post("/", requireAuth, traduccionController.create);

    // Obtener todas las traducciones
    router.get("/", requireAuth, traduccionController.findAll);

    // Obtener una traducción por ID
    router.get("/:id", requireAuth, traduccionController.findOne);

    // Actualizar una traducción por ID
    router.put("/:id", requireAuth, traduccionController.update);

    // Eliminar una traducción por ID
    router.delete("/:id", requireAuth, traduccionController.delete);

    app.use("/api/traducciones", router);
};
