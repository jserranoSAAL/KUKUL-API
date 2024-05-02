/**
 * @swagger
 * tags:
 *   name: Reservas
 *   description: Endpoints para manejar las reservas
 */

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva.
 *     description: Crea una nueva reserva con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UsuarioID:
 *                 type: integer
 *                 description: ID del usuario asociado a la reserva.
 *               FechaInicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio de la reserva.
 *               FechaFin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de fin de la reserva.
 *               Estado:
 *                 type: string
 *                 description: Estado de la reserva.
 *     responses:
 *       '200':
 *         description: Reserva creada correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear la reserva.
 *   get:
 *     summary: Obtener todas las reservas.
 *     description: Obtiene todas las reservas almacenadas en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todas las reservas.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar las reservas.
 *
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por su ID.
 *     description: Obtiene una reserva específica utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Reserva encontrada correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró la Reserva con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar la Reserva.
 *   put:
 *     summary: Actualizar una reserva por su ID.
 *     description: Actualiza una reserva específica utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UsuarioID:
 *                 type: integer
 *                 description: ID del usuario asociado a la reserva.
 *               FechaInicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio de la reserva.
 *               FechaFin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de fin de la reserva.
 *               Estado:
 *                 type: string
 *                 description: Estado de la reserva.
 *     responses:
 *       '200':
 *         description: Reserva actualizada correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró la Reserva con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar la Reserva.
 *   delete:
 *     summary: Eliminar una reserva por su ID.
 *     description: Elimina una reserva específica utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Reserva eliminada correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró la Reserva con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar la Reserva.
 */


module.exports = app => {
    const reservasController = require("../controllers/Reservas.controller");
    const { requireAuth } = require("../middlewares/auth");

    const reservasRouter = require("express").Router();

    // Rutas para Reservas con autenticación requerida
    reservasRouter.post("/", requireAuth, reservasController.create);
    reservasRouter.get("/", requireAuth, reservasController.findAll);
    reservasRouter.get("/:id", requireAuth, reservasController.findOne);
    reservasRouter.put("/:id", requireAuth, reservasController.update);
    reservasRouter.delete("/:id", requireAuth, reservasController.delete);

    app.use("/api/reservas", reservasRouter);
};
