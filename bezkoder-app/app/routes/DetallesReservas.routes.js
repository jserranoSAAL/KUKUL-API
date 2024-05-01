/**
 * @swagger
 * tags:
 *   name: Detalles de Reservas
 *   description: Endpoints para manejar los detalles de reservas
 */

/**
 * @swagger
 * /api/detallesReservas:
 *   get:
 *     summary: Obtener todos los detalles de reservas
 *     description: Retorna una lista de todos los detalles de reservas.
 *     tags: [Detalles de Reservas]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const detallesReservasController = require("../controllers/DetallesReservas.controller");

    const detallesReservasRouter = require("express").Router();

    // Rutas para DetallesReservas    
    detallesReservasRouter.get("/", detallesReservasController.findAll);            

    app.use("/api/detallesReservas", detallesReservasRouter);
};
