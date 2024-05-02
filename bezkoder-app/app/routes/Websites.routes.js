/**
 * @swagger
 * tags:
 *   name: Websites
 *   description: Endpoints para manejar websites
 */

/**
 * @swagger
 * /api/websites:
 *   post:
 *     summary: Crear un nuevo website.
 *     description: Crea un nuevo website.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               website_en:
 *                 type: string
 *                 description: Contenido del website en inglés.
 *               website_es:
 *                 type: string
 *                 description: Contenido del website en español.
 *               website_fr:
 *                 type: string
 *                 description: Contenido del website en francés.
 *     responses:
 *       '200':
 *         description: Website creado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado.
 *       '500':
 *         description: Error del servidor al crear el website.
 *   get:
 *     summary: Obtener todos los websites.
 *     description: Obtiene todos los websites.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Websites obtenidos exitosamente.
 *       '401':
 *         description: No autorizado.
 *       '500':
 *         description: Error del servidor al recuperar los websites.
 */

/**
 * @swagger
 * /api/websites/{id}:
 *   get:
 *     summary: Obtener un website por ID.
 *     description: Obtiene un website por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del website a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Website obtenido exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado.
 *       '404':
 *         description: El website con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al obtener el website.
 *   put:
 *     summary: Actualizar un website por ID.
 *     description: Actualiza un website por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del website a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               website_en:
 *                 type: string
 *                 description: Nuevo contenido del website en inglés.
 *               website_es:
 *                 type: string
 *                 description: Nuevo contenido del website en español.
 *               website_fr:
 *                 type: string
 *                 description: Nuevo contenido del website en francés.
 *     responses:
 *       '200':
 *         description: Website actualizado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado.
 *       '404':
 *         description: El website con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al actualizar el website.
 *   delete:
 *     summary: Eliminar un website por ID.
 *     description: Elimina un website por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del website a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Website eliminado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado.
 *       '404':
 *         description: El website con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al eliminar el website.
 */

/**
 * @swagger
 * /api/websites/upsert:
 *   post:
 *     summary: Actualizar o insertar un website.
 *     description: Actualiza o inserta un website.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               website_en:
 *                 type: string
 *                 description: Contenido del website en inglés.
 *               website_es:
 *                 type: string
 *                 description: Contenido del website en español.
 *               website_fr:
 *                 type: string
 *                 description: Contenido del website en francés.
 *     responses:
 *       '200':
 *         description: Website actualizado o insertado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado.
 *       '500':
 *         description: Error del servidor al procesar la solicitud del website.
 */

/**
 * @swagger
 * /api/websites/latest/one:
 *   get:
 *     summary: Obtener el último website.
 *     description: Obtiene el último website agregado.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Último website obtenido exitosamente.
 *       '401':
 *         description: No autorizado.
 *       '500':
 *         description: Error del servidor al obtener el último website.
 */


module.exports = app => {
    const websitesController = require("../controllers/Websites.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const websitesRouter = require("express").Router();

    // Rutas para Websites con Middleware de Autenticación
    websitesRouter.post("/", requireAuth, websitesController.create); // Crear un nuevo Website
    websitesRouter.get("/", requireAuth, websitesController.findAll); // Obtener todos los Websites
    websitesRouter.get("/:id", requireAuth, websitesController.findOne); // Obtener un Website por id
    websitesRouter.put("/:id", requireAuth, websitesController.update); // Actualizar un Website por id
    websitesRouter.delete("/:id", requireAuth, websitesController.delete); // Eliminar un Website por id
    websitesRouter.post("/upsert", requireAuth, websitesController.upsert); // Upsert un Website
    websitesRouter.get("/latest/one", requireAuth, websitesController.findLatest); // Obtener el último Website

    app.use("/api/websites", websitesRouter);
};
