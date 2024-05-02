/**
 * @swagger
 * tags:
 *   name: Politicas de cancelación
 *   description: Endpoints para manejar las politicas de cancelación registradas
 */

/**
 * @swagger
 * /api/politicas-cancelacion:
 *   post:
 *     summary: Crear una nueva política de cancelación.
 *     description: Crea una nueva política de cancelación con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_inicial:
 *                 type: string
 *                 format: date
 *                 description: Fecha inicial de la política de cancelación.
 *               fecha_final:
 *                 type: string
 *                 format: date
 *                 description: Fecha final de la política de cancelación.
 *               porcentaje:
 *                 type: number
 *                 description: Porcentaje de reembolso en caso de cancelación.
 *     responses:
 *       '200':
 *         description: Política de cancelación creada correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear la política de cancelación.
 *   get:
 *     summary: Obtener todas las políticas de cancelación.
 *     description: Obtiene todas las políticas de cancelación almacenadas en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todas las políticas de cancelación.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar las políticas de cancelación.
 *
 * /api/politicas-cancelacion/{id}:
 *   get:
 *     summary: Obtener una política de cancelación por su ID.
 *     description: Obtiene una política de cancelación específica utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la política de cancelación a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Política de cancelación encontrada correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró la política de cancelación con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar la política de cancelación.
 *   put:
 *     summary: Actualizar una política de cancelación por su ID.
 *     description: Actualiza una política de cancelación específica utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la política de cancelación a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_inicial:
 *                 type: string
 *                 format: date
 *                 description: Fecha inicial de la política de cancelación.
 *               fecha_final:
 *                 type: string
 *                 format: date
 *                 description: Fecha final de la política de cancelación.
 *               porcentaje:
 *                 type: number
 *                 description: Porcentaje de reembolso en caso de cancelación.
 *     responses:
 *       '200':
 *         description: Política de cancelación actualizada correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se pudo actualizar la política de cancelación con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar la política de cancelación.
 *   delete:
 *     summary: Eliminar una política de cancelación por su ID.
 *     description: Elimina una política de cancelación específica utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la política de cancelación a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Política de cancelación eliminada correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se pudo eliminar la política de cancelación con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar la política de cancelación.
 */

module.exports = app => {
    const politicasCancelacionController = require("../controllers/PoliticasCancelacion.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas con Middleware de Autenticación
    router.post("/", requireAuth, politicasCancelacionController.create); // Crear una nueva política de cancelación
    router.get("/", requireAuth, politicasCancelacionController.findAll); // Obtener todas las políticas de cancelación
    router.get("/:id", requireAuth, politicasCancelacionController.findOne); // Obtener una política de cancelación por ID
    router.put("/:id", requireAuth, politicasCancelacionController.update); // Actualizar una política de cancelación por ID
    router.delete("/:id", requireAuth, politicasCancelacionController.delete); // Eliminar una política de cancelación por ID

    app.use("/api/politicas-cancelacion", router);
};
