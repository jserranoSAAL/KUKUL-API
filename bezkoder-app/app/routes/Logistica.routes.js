
/**
 * @swagger
 * tags:
 *   name: Logistica
 *   description: Endpoints para manejar las logisticas registradas
 */

/**
 * @swagger
 * /api/logistica:
 *   post:
 *     summary: Crear un nuevo registro de logística.
 *     description: Crea un nuevo registro de logística con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Fecha:
 *                 type: string
 *                 description: Fecha del registro de logística.
 *               Inicio:
 *                 type: string
 *                 description: Hora de inicio del registro de logística.
 *               Fin:
 *                 type: string
 *                 description: Hora de fin del registro de logística.
 *               Subgrupo:
 *                 type: string
 *                 description: Subgrupo del registro de logística.
 *               Actividad:
 *                 type: string
 *                 description: Actividad del registro de logística.
 *               PersonasConfirmadas:
 *                 type: integer
 *                 description: Cantidad de personas confirmadas para el registro de logística.
 *               Servicio:
 *                 type: string
 *                 description: Servicio del registro de logística.
 *               Proveedor:
 *                 type: string
 *                 description: Proveedor del registro de logística.
 *               Reserva:
 *                 type: string
 *                 description: Reserva del registro de logística.
 *               FechaReserva:
 *                 type: string
 *                 description: Fecha de reserva del registro de logística.
 *               Pago:
 *                 type: number
 *                 description: Pago del registro de logística.
 *               FechaPago:
 *                 type: string
 *                 description: Fecha de pago del registro de logística.
 *               Duracion:
 *                 type: string
 *                 description: Duración del registro de logística.
 *               Cantidad:
 *                 type: integer
 *                 description: Cantidad del registro de logística.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del registro de logística.
 *               Responsable:
 *                 type: string
 *                 description: Responsable del registro de logística.
 *     responses:
 *       '200':
 *         description: Registro de logística creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el registro de logística.
 *   get:
 *     summary: Obtener todos los registros de logística.
 *     description: Obtiene todos los registros de logística almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los registros de logística.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los registros de logística.
 *
 * /api/logistica/{id}:
 *   get:
 *     summary: Obtener un registro de logística por su ID.
 *     description: Obtiene un registro de logística específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de logística a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Registro de logística encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el registro de logística con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el registro de logística.
 *   put:
 *     summary: Actualizar un registro de logística por su ID.
 *     description: Actualiza un registro de logística específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de logística a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Fecha:
 *                 type: string
 *                 description: Fecha del registro de logística.
 *               Inicio:
 *                 type: string
 *                 description: Hora de inicio del registro de logística.
 *               Fin:
 *                 type: string
 *                 description: Hora de fin del registro de logística.
 *               Subgrupo:
 *                 type: string
 *                 description: Subgrupo del registro de logística.
 *               Actividad:
 *                 type: string
 *                 description: Actividad del registro de logística.
 *               PersonasConfirmadas:
 *                 type: integer
 *                 description: Cantidad de personas confirmadas para el registro de logística.
 *               Servicio:
 *                 type: string
 *                 description: Servicio del registro de logística.
 *               Proveedor:
 *                 type: string
 *                 description: Proveedor del registro de logística.
 *               Reserva:
 *                 type: string
 *                 description: Reserva del registro de logística.
 *               FechaReserva:
 *                 type: string
 *                 description: Fecha de reserva del registro de logística.
 *               Pago:
 *                 type: number
 *                 description: Pago del registro de logística.
 *               FechaPago:
 *                 type: string
 *                 description: Fecha de pago del registro de logística.
 *               Duracion:
 *                 type: string
 *                 description: Duración del registro de logística.
 *               Cantidad:
 *                 type: integer
 *                 description: Cantidad del registro de logística.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del registro de logística.
 *               Responsable:
 *                 type: string
 *                 description: Responsable del registro de logística.
 *     responses:
 *       '200':
 *         description: Registro de logística actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el registro de logística con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el registro de logística.
 *   delete:
 *     summary: Eliminar un registro de logística por su ID.
 *     description: Elimina un registro de logística específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de logística a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Registro de logística eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el registro de logística con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el registro de logística.
 */
module.exports = app => {
    const logisticaController = require("../controllers/Logistica.controller.js");

    const logisticaRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo registro de Logística
    logisticaRouter.post("/", requireAuth, logisticaController.create);

    // Ruta para recuperar todos los registros de Logística
    logisticaRouter.get("/", requireAuth, logisticaController.findAll);

    // Ruta para recuperar un único registro de Logística con id
    logisticaRouter.get("/:id", requireAuth, logisticaController.findOne);

    // Ruta para actualizar un registro de Logística con id
    logisticaRouter.put("/:id", requireAuth, logisticaController.update);

    // Ruta para eliminar un registro de Logística con id
    logisticaRouter.delete("/:id", requireAuth, logisticaController.delete);

    // Montar el enrutador bajo la ruta /api/logistica
    app.use("/api/logistica", logisticaRouter);
};
