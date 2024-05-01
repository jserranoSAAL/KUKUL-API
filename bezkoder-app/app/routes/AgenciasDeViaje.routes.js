/**
 * @swagger
 * tags:
 *   name: Agencias de Viaje
 *   description: Endpoints para manejar agencias de viaje
 */

/**
 * @swagger
 * /api/agenciasDeViaje:
 *   post:
 *     summary: Crear una nueva agencia de viaje
 *     description: Crea una nueva agencia de viaje.
 *     tags: [Agencias de Viaje]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *               Contacto:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               CorreoElectronico:
 *                 type: string
 *               Categoria:
 *                 type: string
 *               Prioridad:
 *                 type: string
 *               Nacionalidad:
 *                 type: string
 *               Website:
 *                 type: string
 *               SedeCentral:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Agencia de viaje creada exitosamente
 *       '400':
 *         description: Bad request, la solicitud es incorrecta
 *       '401':
 *         description: Unauthorized, el usuario no tiene autorización
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/agenciasDeViaje:
 *   get:
 *     summary: Obtener todas las agencias de viaje
 *     description: Retorna una lista de todas las agencias de viaje.
 *     tags: [Agencias de Viaje]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized, el usuario no tiene autorización
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/agenciasDeViaje/{id}:
 *   get:
 *     summary: Obtener una agencia de viaje por ID
 *     description: Retorna una agencia de viaje específica según el ID proporcionado.
 *     tags: [Agencias de Viaje]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la agencia de viaje a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: Unauthorized, el usuario no tiene autorización
 *       '404':
 *         description: No se pudo encontrar la agencia de viaje con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/agenciasDeViaje/{id}:
 *   put:
 *     summary: Actualizar una agencia de viaje por ID
 *     description: Actualiza una agencia de viaje existente según el ID proporcionado.
 *     tags: [Agencias de Viaje]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la agencia de viaje a actualizar
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
 *               Contacto:
 *                 type: string
 *               Telefono:
 *                 type: string
 *               CorreoElectronico:
 *                 type: string
 *               Categoria:
 *                 type: string
 *               Prioridad:
 *                 type: string
 *               Nacionalidad:
 *                 type: string
 *               Website:
 *                 type: string
 *               SedeCentral:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Agencia de viaje actualizada exitosamente
 *       '400':
 *         description: Bad request, la solicitud es incorrecta
 *       '401':
 *         description: Unauthorized, el usuario no tiene autorización
 *       '404':
 *         description: No se pudo actualizar la agencia de viaje con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/agenciasDeViaje/{id}:
 *   delete:
 *     summary: Eliminar una agencia de viaje por ID
 *     description: Elimina una agencia de viaje existente según el ID proporcionado.
 *     tags: [Agencias de Viaje]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la agencia de viaje a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Agencia de viaje eliminada exitosamente
 *       '401':
 *         description: Unauthorized, el usuario no tiene autorización
 *       '404':
 *         description: No se pudo eliminar la agencia de viaje con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const agenciasDeViajeController = require("../controllers/AgenciasDeViaje.controller");
    const { requireAuth } = require("../middlewares/auth");

    const agenciasDeViajeRouter = require("express").Router();

    // Crear una nueva Agencia de Viaje
    agenciasDeViajeRouter.post("/", requireAuth, agenciasDeViajeController.create);

    // Recuperar todas las Agencias de Viaje
    agenciasDeViajeRouter.get("/", requireAuth, agenciasDeViajeController.findAll);

    // Recuperar una única Agencia de Viaje por ID
    agenciasDeViajeRouter.get("/:id", requireAuth, agenciasDeViajeController.findOne);

    // Actualizar una Agencia de Viaje por ID
    agenciasDeViajeRouter.put("/:id", requireAuth, agenciasDeViajeController.update);

    // Eliminar una Agencia de Viaje por ID
    agenciasDeViajeRouter.delete("/:id", requireAuth, agenciasDeViajeController.delete);

    app.use("/api/agenciasDeViaje", agenciasDeViajeRouter);
};
