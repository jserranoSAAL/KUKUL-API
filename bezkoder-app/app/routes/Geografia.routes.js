/**
 * @swagger
 * tags:
 *   name: Geografía
 *   description: Endpoints para manejar la información geográfica
 */

/**
 * @swagger
 * /api/geografia:
 *   get:
 *     summary: Obtener todas las ubicaciones geográficas
 *     description: Retorna una lista de todas las ubicaciones geográficas.
 *     tags: [Geografía]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/geografia/{id}:
 *   get:
 *     summary: Obtener una ubicación geográfica por ID
 *     description: Retorna una ubicación geográfica basada en el ID proporcionado.
 *     tags: [Geografía]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la ubicación geográfica a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Ubicación geográfica encontrada
 *       '404':
 *         description: Ubicación geográfica no encontrada
 *       '500':
 *         description: Error interno del servidor
 */


module.exports = app => {
    const geografiaController = require("../controllers/Geografia.controller");

    const geografiaRouter = require("express").Router();

    // Rutas para Geografia    
    geografiaRouter.get("/", geografiaController.findAll);    

    app.use("/api/geografia", geografiaRouter);
};
