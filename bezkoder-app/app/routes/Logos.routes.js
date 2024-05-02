/**
 * @swagger
 * /api/logos:
 *   post:
 *     summary: Crear un nuevo logo.
 *     description: Crea un nuevo logo con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file_path:
 *                 type: string
 *                 description: Ruta del archivo del logo.
 *     responses:
 *       '200':
 *         description: Logo creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el logo.
 *   get:
 *     summary: Obtener todos los logos.
 *     description: Obtiene todos los logos almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los logos.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los logos.
 *
 * /api/logos/{id}:
 *   get:
 *     summary: Obtener un logo por su ID.
 *     description: Obtiene un logo específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del logo a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Logo encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el logo con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el logo.
 *   put:
 *     summary: Actualizar un logo por su ID.
 *     description: Actualiza un logo específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del logo a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               file_path:
 *                 type: string
 *                 description: Ruta del archivo del logo.
 *     responses:
 *       '200':
 *         description: Logo actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el logo con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el logo.
 *   delete:
 *     summary: Eliminar un logo por su ID.
 *     description: Elimina un logo específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del logo a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Logo eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el logo con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el logo.
 *   post:
 *     summary: Crear o actualizar un logo.
 *     description: Crea un nuevo logo o actualiza uno existente si ya existe un registro con el mismo ID.
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
 *                 description: ID del logo.
 *               file_path:
 *                 type: string
 *                 description: Ruta del archivo del logo.
 *     responses:
 *       '200':
 *         description: Logo creado o actualizado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear o actualizar el logo.
 *   get:
 *     summary: Obtener el último logo.
 *     description: Obtiene el último logo registrado en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Último logo obtenido correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al obtener el último logo.
 */
module.exports = app => {
    const logosController = require("../controllers/Logos.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const logosRouter = require("express").Router();

    // Rutas para Logos con Middleware de Autenticación
    logosRouter.post("/", requireAuth, logosController.create); // Crear un nuevo Logo
    logosRouter.get("/", requireAuth, logosController.findAll); // Obtener todos los Logos
    logosRouter.get("/:id", requireAuth, logosController.findOne); // Obtener un Logo por id
    logosRouter.put("/:id", requireAuth, logosController.update); // Actualizar un Logo por id
    logosRouter.delete("/:id", requireAuth, logosController.delete); // Eliminar un Logo por id
    logosRouter.post("/upsert", requireAuth, logosController.upsert); // Upsert un Logo
    logosRouter.get("/latest/one", requireAuth, logosController.findLatest); // Obtener el último Logo

    app.use("/api/logos", logosRouter);
};
