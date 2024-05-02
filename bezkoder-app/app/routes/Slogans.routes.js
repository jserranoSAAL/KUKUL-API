/**
 * @swagger
 * tags:
 *   name: Slogans
 *   description: Endpoints para manejar slogans
 */

/**
 * @swagger
 * /api/slogans:
 *   post:
 *     summary: Crear un nuevo Slogan.
 *     description: Crea un nuevo Slogan.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slogan_en:
 *                 type: string
 *                 description: Slogan en inglés.
 *               slogan_es:
 *                 type: string
 *                 description: Slogan en español.
 *               slogan_fr:
 *                 type: string
 *                 description: Slogan en francés.
 *     responses:
 *       '200':
 *         description: Slogan creado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el Slogan.
 *   get:
 *     summary: Obtener todos los Slogans.
 *     description: Obtiene todos los Slogans.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Slogans obtenidos exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los Slogans.
 */

/**
 * @swagger
 * /api/slogans/{id}:
 *   get:
 *     summary: Obtener un Slogan por ID.
 *     description: Obtiene un Slogan por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Slogan a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Slogan obtenido exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El Slogan con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al obtener el Slogan.
 *   put:
 *     summary: Actualizar un Slogan por ID.
 *     description: Actualiza un Slogan por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Slogan a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slogan_en:
 *                 type: string
 *                 description: Slogan en inglés.
 *               slogan_es:
 *                 type: string
 *                 description: Slogan en español.
 *               slogan_fr:
 *                 type: string
 *                 description: Slogan en francés.
 *     responses:
 *       '200':
 *         description: Slogan actualizado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El Slogan con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al actualizar el Slogan.
 *   delete:
 *     summary: Eliminar un Slogan por ID.
 *     description: Elimina un Slogan por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Slogan a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Slogan eliminado exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El Slogan con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al eliminar el Slogan.
 */

/**
 * @swagger
 * /api/slogans/upsert:
 *   post:
 *     summary: Actualizar o insertar un Slogan.
 *     description: Actualiza un Slogan si ya existe, o lo inserta si no existe.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slogan_en:
 *                 type: string
 *                 description: Slogan en inglés.
 *               slogan_es:
 *                 type: string
 *                 description: Slogan en español.
 *               slogan_fr:
 *                 type: string
 *                 description: Slogan en francés.
 *     responses:
 *       '200':
 *         description: Slogan actualizado o insertado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar o insertar el Slogan.
 */

/**
 * @swagger
 * /api/slogans/latest/one:
 *   get:
 *     summary: Obtener el último Slogan.
 *     description: Obtiene el último Slogan creado.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Último Slogan obtenido exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al obtener el último Slogan.
 */


module.exports = app => {
    const slogansController = require("../controllers/Slogans.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const slogansRouter = require("express").Router();

    // Rutas para Slogans con Middleware de Autenticación
    slogansRouter.post("/", requireAuth, slogansController.create); // Crear un nuevo Slogan
    slogansRouter.get("/", requireAuth, slogansController.findAll); // Obtener todos los Slogans
    slogansRouter.get("/:id", requireAuth, slogansController.findOne); // Obtener un Slogan por id
    slogansRouter.put("/:id", requireAuth, slogansController.update); // Actualizar un Slogan por id
    slogansRouter.delete("/:id", requireAuth, slogansController.delete); // Eliminar un Slogan por id
    slogansRouter.post("/upsert", requireAuth, slogansController.upsert); // Upsert un Slogan
    slogansRouter.get("/latest/one", requireAuth, slogansController.findLatest); // Obtener el último Slogan

    app.use("/api/slogans", slogansRouter);
};
