/**
 * @swagger
 * tags:
 *   name: Centro Financiero
 *   description: Endpoints para manejar los centros financieros
 */

/**
 * @swagger
 * /api/centro-financiero:
 *   post:
 *     summary: Crear un nuevo Centro Financiero
 *     description: Crea un nuevo Centro Financiero.
 *     tags: [Centro Financiero]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CentroFinanciero:
 *                 type: string
 *                 description: Nombre del Centro Financiero
 *               Total:
 *                 type: number
 *                 description: Total del Centro Financiero
 *               TotalUSD:
 *                 type: number
 *                 description: Total en USD del Centro Financiero
 *     responses:
 *       '200':
 *         description: Centro Financiero creado exitosamente
 *       '400':
 *         description: El contenido no puede estar vacío
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/centro-financiero:
 *   get:
 *     summary: Obtener todos los Centros Financieros
 *     description: Retorna una lista de todos los Centros Financieros.
 *     tags: [Centro Financiero]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/centro-financiero/{id}:
 *   get:
 *     summary: Obtener un Centro Financiero por su ID
 *     description: Retorna un Centro Financiero específico según el ID proporcionado.
 *     tags: [Centro Financiero]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Centro Financiero a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: No se pudo encontrar el Centro Financiero con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/centro-financiero/{id}:
 *   put:
 *     summary: Actualizar un Centro Financiero por su ID
 *     description: Actualiza un Centro Financiero existente según el ID proporcionado.
 *     tags: [Centro Financiero]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Centro Financiero a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CentroFinanciero:
 *                 type: string
 *                 description: Nombre del Centro Financiero
 *               Total:
 *                 type: number
 *                 description: Total del Centro Financiero
 *               TotalUSD:
 *                 type: number
 *                 description: Total en USD del Centro Financiero
 *     responses:
 *       '200':
 *         description: Centro Financiero actualizado correctamente
 *       '404':
 *         description: No se puede actualizar el Centro Financiero con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/centro-financiero/{id}:
 *   delete:
 *     summary: Eliminar un Centro Financiero por su ID
 *     description: Elimina un Centro Financiero existente según el ID proporcionado.
 *     tags: [Centro Financiero]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Centro Financiero a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Centro Financiero eliminado correctamente
 *       '404':
 *         description: No se pudo eliminar el Centro Financiero con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const centroFinancieroController = require("../controllers/CentroFinanciero.controller.js");

    const centroFinancieroRouter = require("express").Router();

    // Ruta para crear un nuevo Centro Financiero
    centroFinancieroRouter.post("/", centroFinancieroController.create);

    // Ruta para recuperar todos los Centros Financieros
    centroFinancieroRouter.get("/", centroFinancieroController.findAll);

    // Ruta para recuperar un único Centro Financiero con id
    centroFinancieroRouter.get("/:id", centroFinancieroController.findOne);

    // Ruta para actualizar un Centro Financiero con id
    centroFinancieroRouter.put("/:id", centroFinancieroController.update);

    // Ruta para eliminar un Centro Financiero con id
    centroFinancieroRouter.delete("/:id", centroFinancieroController.delete);

    // Montar el enrutador bajo la ruta /api/centro-financiero
    app.use("/api/centro-financiero", centroFinancieroRouter);
};
