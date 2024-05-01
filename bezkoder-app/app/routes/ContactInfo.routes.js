/**
 * @swagger
 * tags:
 *   name: ContactInfo
 *   description: Endpoints para manejar la información de contacto
 */

/**
 * @swagger
 * /api/contactInfo:
 *   post:
 *     summary: Crear un nuevo ContactInfo
 *     description: Crea un nuevo registro de ContactInfo.
 *     tags: [ContactInfo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Dirección de correo electrónico
 *               phone:
 *                 type: string
 *                 description: Número de teléfono
 *               skype_contact:
 *                 type: string
 *                 description: ID de Skype
 *               chat1:
 *                 type: string
 *                 description: Información de chat 1
 *               chat2:
 *                 type: string
 *                 description: Información de chat 2
 *     responses:
 *       '200':
 *         description: ContactInfo creado exitosamente
 *       '400':
 *         description: El email no puede estar vacío
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/contactInfo:
 *   get:
 *     summary: Obtener todos los ContactInfo
 *     description: Retorna una lista de todos los registros de ContactInfo.
 *     tags: [ContactInfo]
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
 * /api/contactInfo/{id}:
 *   get:
 *     summary: Obtener un ContactInfo por su ID
 *     description: Retorna un único registro de ContactInfo según el ID proporcionado.
 *     tags: [ContactInfo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ContactInfo a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: No se pudo encontrar ContactInfo con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/contactInfo/{id}:
 *   put:
 *     summary: Actualizar un ContactInfo por su ID
 *     description: Actualiza un registro existente de ContactInfo según el ID proporcionado.
 *     tags: [ContactInfo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ContactInfo a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Dirección de correo electrónico
 *               phone:
 *                 type: string
 *                 description: Número de teléfono
 *               skype_contact:
 *                 type: string
 *                 description: ID de Skype
 *               chat1:
 *                 type: string
 *                 description: Información de chat 1
 *               chat2:
 *                 type: string
 *                 description: Información de chat 2
 *     responses:
 *       '200':
 *         description: ContactInfo actualizado exitosamente
 *       '404':
 *         description: No se puede actualizar ContactInfo con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/contactInfo/{id}:
 *   delete:
 *     summary: Eliminar un ContactInfo por su ID
 *     description: Elimina un registro existente de ContactInfo según el ID proporcionado.
 *     tags: [ContactInfo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ContactInfo a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: ContactInfo eliminado correctamente
 *       '404':
 *         description: No se pudo eliminar ContactInfo con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/contactInfo/upsert:
 *   post:
 *     summary: Upsert un ContactInfo
 *     description: Crea un nuevo registro de ContactInfo o actualiza el primer registro existente si está presente.
 *     tags: [ContactInfo]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID del ContactInfo (opcional)
 *               email:
 *                 type: string
 *                 description: Dirección de correo electrónico
 *               phone:
 *                 type: string
 *                 description: Número de teléfono
 *               skype_contact:
 *                 type: string
 *                 description: ID de Skype
 *               chat1:
 *                 type: string
 *                 description: Información de chat 1
 *               chat2:
 *                 type: string
 *                 description: Información de chat 2
 *     responses:
 *       '200':
 *         description: ContactInfo creado o actualizado exitosamente
 *       '404':
 *         description: No se pudo encontrar ContactInfo con el ID para actualizar
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/contactInfo/latest/one:
 *   get:
 *     summary: Obtener el último registro de ContactInfo
 *     description: Retorna el último registro de ContactInfo basado en el ID.
 *     tags: [ContactInfo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const contactInfoController = require("../controllers/ContactInfo.controller");
    const { requireAuth } = require("../middlewares/auth");

    const contactInfoRouter = require("express").Router();

    // Rutas para ContactInfo con Middleware de Autenticación
    contactInfoRouter.post("/", requireAuth, contactInfoController.create);
    contactInfoRouter.get("/", requireAuth, contactInfoController.findAll);
    contactInfoRouter.get("/:id", requireAuth, contactInfoController.findOne);
    contactInfoRouter.put("/:id", requireAuth, contactInfoController.update);
    contactInfoRouter.delete("/:id", requireAuth, contactInfoController.delete);
    contactInfoRouter.post("/upsert", requireAuth, contactInfoController.upsert);
    contactInfoRouter.get("/latest/one", requireAuth, contactInfoController.findLatest);

    app.use("/api/contactInfo", contactInfoRouter);
};
