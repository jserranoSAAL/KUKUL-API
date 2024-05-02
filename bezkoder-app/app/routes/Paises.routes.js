/**
 * @swagger
 * /api/paises:
 *   post:
 *     summary: Crear un nuevo país.
 *     description: Crea un nuevo país con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del país.
 *               ISO:
 *                 type: string
 *                 description: Código ISO del país.
 *     responses:
 *       '200':
 *         description: País creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el país.
 *   get:
 *     summary: Obtener todos los países.
 *     description: Obtiene todos los países almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los países.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los países.
 *
 * /api/paises/{id}:
 *   get:
 *     summary: Obtener un país por su ID.
 *     description: Obtiene un país específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del país a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: País encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el país con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el país.
 */

module.exports = app => {
    const paisesController = require("../controllers/Paises.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas para países con autenticación requerida
    router.post("/", requireAuth, paisesController.create);
    router.get("/", requireAuth, paisesController.findAll);
    router.get("/:id", requireAuth, paisesController.findOne);

    app.use("/api/paises", router);
};
