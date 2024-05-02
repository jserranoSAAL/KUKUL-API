/**
 * @swagger
 * tags:
 *   name: Términos y Condiciones
 *   description: Endpoints para manejar términos y condiciones
 */

/**
 * @swagger
 * /api/termsAndConditions:
 *   post:
 *     summary: Crear nuevos Términos y Condiciones.
 *     description: Crea nuevos Términos y Condiciones.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               terms_en:
 *                 type: string
 *                 description: Términos en inglés.
 *               terms_es:
 *                 type: string
 *                 description: Términos en español.
 *               terms_fr:
 *                 type: string
 *                 description: Términos en francés.
 *     responses:
 *       '200':
 *         description: Términos y Condiciones creados exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear los Términos y Condiciones.
 *   get:
 *     summary: Obtener todos los Términos y Condiciones.
 *     description: Obtiene todos los Términos y Condiciones.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Términos y Condiciones obtenidos exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los Términos y Condiciones.
 */

/**
 * @swagger
 * /api/termsAndConditions/{id}:
 *   get:
 *     summary: Obtener Términos y Condiciones por ID.
 *     description: Obtiene Términos y Condiciones por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de los Términos y Condiciones a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Términos y Condiciones obtenidos exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: Los Términos y Condiciones con el ID especificado no fueron encontrados.
 *       '500':
 *         description: Error del servidor al obtener los Términos y Condiciones.
 *   put:
 *     summary: Actualizar Términos y Condiciones por ID.
 *     description: Actualiza Términos y Condiciones por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de los Términos y Condiciones a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               terms_en:
 *                 type: string
 *                 description: Términos en inglés.
 *               terms_es:
 *                 type: string
 *                 description: Términos en español.
 *               terms_fr:
 *                 type: string
 *                 description: Términos en francés.
 *     responses:
 *       '200':
 *         description: Términos y Condiciones actualizados exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: Los Términos y Condiciones con el ID especificado no fueron encontrados.
 *       '500':
 *         description: Error del servidor al actualizar los Términos y Condiciones.
 *   delete:
 *     summary: Eliminar Términos y Condiciones por ID.
 *     description: Elimina Términos y Condiciones por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de los Términos y Condiciones a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Términos y Condiciones eliminados exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: Los Términos y Condiciones con el ID especificado no fueron encontrados.
 *       '500':
 *         description: Error del servidor al eliminar los Términos y Condiciones.
 */

/**
 * @swagger
 * /api/termsAndConditions/buscar/{tarifario}:
 *   get:
 *     summary: Buscar Términos y Condiciones por término.
 *     description: Busca Términos y Condiciones por término con coincidencia parcial.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tarifario
 *         required: true
 *         description: Término a buscar en los Términos y Condiciones.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Términos y Condiciones encontrados exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al buscar los Términos y Condiciones.
 */


module.exports = app => {
    const termsAndConditionsController = require("../controllers/TermsAndConditions.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const termsAndConditionsRouter = require("express").Router();

    // Rutas para TermsAndConditions con Middleware de Autenticación
    termsAndConditionsRouter.post("/", requireAuth, termsAndConditionsController.create); // Crear nuevos Términos y Condiciones
    termsAndConditionsRouter.get("/", requireAuth, termsAndConditionsController.findAll); // Obtener todos los Términos y Condiciones
    termsAndConditionsRouter.get("/:id", requireAuth, termsAndConditionsController.findOne); // Obtener Términos y Condiciones por id
    termsAndConditionsRouter.put("/:id", requireAuth, termsAndConditionsController.update); // Actualizar Términos y Condiciones por id
    termsAndConditionsRouter.delete("/:id", requireAuth, termsAndConditionsController.delete); // Eliminar Términos y Condiciones por id
    termsAndConditionsRouter.post("/upsert", requireAuth, termsAndConditionsController.upsert); // Upsert Términos y Condiciones
    termsAndConditionsRouter.get("/latest/one", requireAuth, termsAndConditionsController.findLatest); // Obtener el último registro de Términos y Condiciones

    app.use("/api/termsAndConditions", termsAndConditionsRouter);
};
