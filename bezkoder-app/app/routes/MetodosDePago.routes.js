
/**
 * @swagger
 * tags:
 *   name: Metodos de pago
 *   description: Endpoints para manejar los metodos e pago registrados
 */

/**
 * @swagger
 * /api/metodos-de-pago:
 *   post:
 *     summary: Crear un nuevo método de pago.
 *     description: Crea un nuevo método de pago con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del método de pago.
 *               comision:
 *                 type: number
 *                 description: Comisión del método de pago.
 *               default:
 *                 type: boolean
 *                 description: Indicador de si es el método de pago predeterminado.
 *     responses:
 *       '200':
 *         description: Método de pago creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el método de pago.
 *   get:
 *     summary: Obtener todos los métodos de pago.
 *     description: Obtiene todos los métodos de pago almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los métodos de pago.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los métodos de pago.
 *
 * /api/metodos-de-pago/{id}:
 *   get:
 *     summary: Obtener un método de pago por su ID.
 *     description: Obtiene un método de pago específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del método de pago a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Método de pago encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el método de pago con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el método de pago.
 *   put:
 *     summary: Actualizar un método de pago por su ID.
 *     description: Actualiza un método de pago específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del método de pago a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del método de pago.
 *               comision:
 *                 type: number
 *                 description: Comisión del método de pago.
 *               default:
 *                 type: boolean
 *                 description: Indicador de si es el método de pago predeterminado.
 *     responses:
 *       '200':
 *         description: Método de pago actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el método de pago con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el método de pago.
 *   delete:
 *     summary: Eliminar un método de pago por su ID.
 *     description: Elimina un método de pago específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del método de pago a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Método de pago eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el método de pago con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el método de pago.
 */
module.exports = app => {
    const metodosDePagoController = require("../controllers/MetodosDePago.controller");
    const { requireAuth } = require("../middlewares/auth"); // Middleware de autenticación

    const router = require("express").Router();

    // Rutas para Métodos de Pago con Middleware de Autenticación
    router.post("/", requireAuth, metodosDePagoController.create); // Crear un nuevo Método de Pago
    router.get("/", requireAuth, metodosDePagoController.findAll); // Obtener todos los Métodos de Pago
    router.get("/:id", requireAuth, metodosDePagoController.findOne); // Obtener un Método de Pago por id
    router.put("/:id", requireAuth, metodosDePagoController.update); // Actualizar un Método de Pago por id
    router.delete("/:id", requireAuth, metodosDePagoController.delete); // Eliminar un Método de Pago por id

    app.use("/api/metodos-de-pago", router);
};
