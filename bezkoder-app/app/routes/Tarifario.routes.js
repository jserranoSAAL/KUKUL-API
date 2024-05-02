/**
 * @swagger
 * tags:
 *   name: Tarifarios
 *   description: Endpoints para manejar tarifarios
 */

/**
 * @swagger
 * /api/tarifario:
 *   post:
 *     summary: Crear un nuevo Tarifario.
 *     description: Crea un nuevo Tarifario.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Tarifario:
 *                 type: string
 *                 description: Nombre del tarifario.
 *               Agencia:
 *                 type: string
 *                 description: Agencia asociada al tarifario.
 *               NumeroDeProductos:
 *                 type: integer
 *                 description: Número de productos del tarifario.
 *               Inicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del tarifario.
 *               Fin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización del tarifario.
 *               Codigo:
 *                 type: string
 *                 description: Código del tarifario.
 *               SoloLectura:
 *                 type: boolean
 *                 description: Indica si el tarifario es de solo lectura.
 *               UltimaActualizacion:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha y hora de la última actualización del tarifario.
 *     responses:
 *       '200':
 *         description: Tarifario creado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el Tarifario.
 *   get:
 *     summary: Obtener todos los Tarifarios.
 *     description: Obtiene todos los Tarifarios.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Tarifarios obtenidos exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los tarifarios.
 */

/**
 * @swagger
 * /api/tarifario/{id}:
 *   get:
 *     summary: Obtener un Tarifario por ID.
 *     description: Obtiene un Tarifario por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Tarifario a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Tarifario obtenido exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El Tarifario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al obtener el Tarifario.
 *   put:
 *     summary: Actualizar un Tarifario por ID.
 *     description: Actualiza un Tarifario por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Tarifario a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Tarifario:
 *                 type: string
 *                 description: Nombre del tarifario.
 *               Agencia:
 *                 type: string
 *                 description: Agencia asociada al tarifario.
 *               NumeroDeProductos:
 *                 type: integer
 *                 description: Número de productos del tarifario.
 *               Inicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del tarifario.
 *               Fin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización del tarifario.
 *               Codigo:
 *                 type: string
 *                 description: Código del tarifario.
 *               SoloLectura:
 *                 type: boolean
 *                 description: Indica si el tarifario es de solo lectura.
 *               UltimaActualizacion:
 *                 type: string
 *                 format: date-time
 *                 description: Fecha y hora de la última actualización del tarifario.
 *     responses:
 *       '200':
 *         description: Tarifario actualizado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El Tarifario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al actualizar el Tarifario.
 *   delete:
 *     summary: Eliminar un Tarifario por ID.
 *     description: Elimina un Tarifario por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Tarifario a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Tarifario eliminado exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El Tarifario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al eliminar el Tarifario.
 */

/**
 * @swagger
 * /api/tarifario/buscar/{tarifario}:
 *   get:
 *     summary: Buscar Tarifarios por nombre.
 *     description: Busca Tarifarios por nombre con coincidencia parcial.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tarifario
 *         required: true
 *         description: Nombre del tarifario a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Tarifarios encontrados exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al buscar los tarifarios.
 */


module.exports = app => {
    const tarifarioController = require("../controllers/Tarifario.controller.js");

    const tarifarioRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo Gasto
    tarifarioRouter.post("/", requireAuth, tarifarioController.create);

    // Ruta para recuperar todos los Gastos
    tarifarioRouter.get("/", requireAuth, tarifarioController.findAll);

    // Ruta para recuperar un único Gasto con id
    tarifarioRouter.get("/:id", requireAuth, tarifarioController.findOne);

    // Ruta para actualizar un Gasto con id
    tarifarioRouter.put("/:id", requireAuth, tarifarioController.update);

    // Ruta para eliminar un Gasto con id
    tarifarioRouter.delete("/:id", requireAuth, tarifarioController.delete);

    // Buscar Tarifarios por nombre con LIKE
    tarifarioRouter.get("/buscar/:tarifario", requireAuth, tarifarioController.findByTarifario);


    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/tarifario", requireAuth, tarifarioRouter);
};
