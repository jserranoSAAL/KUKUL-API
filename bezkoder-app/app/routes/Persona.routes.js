/**
 * @swagger
 * /api/personas:
 *   post:
 *     summary: Crear una nueva persona.
 *     description: Crea una nueva persona con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Apellidos:
 *                 type: string
 *                 description: Apellidos de la persona.
 *               Nombre:
 *                 type: string
 *                 description: Nombre de la persona.
 *               FechaDeNacimiento:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento de la persona.
 *               Email:
 *                 type: string
 *                 description: Correo electrónico de la persona.
 *               Pais:
 *                 type: string
 *                 description: País de residencia de la persona.
 *               Acciones:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Acciones realizadas por la persona.
 *     responses:
 *       '200':
 *         description: Persona creada correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear la persona.
 *   get:
 *     summary: Obtener todas las personas.
 *     description: Obtiene todas las personas almacenadas en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todas las personas.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar las personas.
 *
 * /api/personas/{id}:
 *   get:
 *     summary: Obtener una persona por su ID.
 *     description: Obtiene una persona específica utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Persona encontrada correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró la persona con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar la persona.
 *   put:
 *     summary: Actualizar una persona por su ID.
 *     description: Actualiza una persona específica utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Apellidos:
 *                 type: string
 *                 description: Apellidos de la persona.
 *               Nombre:
 *                 type: string
 *                 description: Nombre de la persona.
 *               FechaDeNacimiento:
 *                 type: string
 *                 format: date
 *                 description: Fecha de nacimiento de la persona.
 *               Email:
 *                 type: string
 *                 description: Correo electrónico de la persona.
 *               Pais:
 *                 type: string
 *                 description: País de residencia de la persona.
 *               Acciones:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Acciones realizadas por la persona.
 *     responses:
 *       '200':
 *         description: Persona actualizada correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar la persona.
 *   delete:
 *     summary: Eliminar una persona por su ID.
 *     description: Elimina una persona específica utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la persona a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Persona eliminada correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar la persona.
 * /api/personas/buscar/nombre/{nombre}:
 *   get:
 *     summary: Buscar personas por nombre.
 *     description: Obtiene todas las personas cuyo nombre coincide parcialmente con el nombre proporcionado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre a buscar en las personas.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de personas encontradas.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontraron personas con el nombre proporcionado.
 *       '500':
 *         description: Error del servidor al buscar personas por nombre.
 */

module.exports = app => {
    const personasController = require("../controllers/Persona.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const personaRouter = require("express").Router();

    // Crear un nuevo registro de Persona
    personaRouter.post("/", requireAuth, personasController.create);

    // Recuperar todos los registros de Personas
    personaRouter.get("/", requireAuth, personasController.findAll);

    // Recuperar un único registro de Persona con id
    personaRouter.get("/:id", requireAuth, personasController.findOne);

    // Actualizar un registro de Persona con id
    personaRouter.put("/:id", requireAuth, personasController.update);

    // Eliminar un registro de Persona con id
    personaRouter.delete("/:id", requireAuth, personasController.delete);

    // Ruta para buscar personas por nombre con LIKE
    personaRouter.get("/buscar/nombre/:nombre", requireAuth, personasController.findByName);


    // Montar el enrutador bajo la ruta /api/personas
    app.use("/api/personas", personaRouter);
};
