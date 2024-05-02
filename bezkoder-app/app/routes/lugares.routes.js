
/**
 * @swagger
 * tags:
 *   name: Lugares
 *   description: Endpoints para manejar los lugares
 */


/**
 * @swagger
 * /api/lugares:
 *   post:
 *     summary: Crear un nuevo lugar.
 *     description: Crea un nuevo lugar con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CodigoLenguaje:
 *                 type: string
 *                 description: Código del lenguaje del lugar.
 *               Nombre:
 *                 type: string
 *                 description: Nombre del lugar.
 *               Descripcion:
 *                 type: string
 *                 description: Descripción del lugar.
 *               Latitud:
 *                 type: string
 *                 description: Latitud del lugar.
 *               Longitud:
 *                 type: string
 *                 description: Longitud del lugar.
 *               EstadoID:
 *                 type: integer
 *                 description: ID del estado del lugar.
 *     responses:
 *       '200':
 *         description: Lugar creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el lugar.
 *   get:
 *     summary: Obtener todos los lugares.
 *     description: Obtiene todos los lugares almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los lugares.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los lugares.
 *
 * /api/lugares/{id}:
 *   get:
 *     summary: Obtener un lugar por su ID.
 *     description: Obtiene un lugar específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del lugar a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lugar encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el lugar con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el lugar.
 *   put:
 *     summary: Actualizar un lugar por su ID.
 *     description: Actualiza un lugar específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del lugar a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CodigoLenguaje:
 *                 type: string
 *                 description: Código del lenguaje del lugar.
 *               Nombre:
 *                 type: string
 *                 description: Nombre del lugar.
 *               Descripcion:
 *                 type: string
 *                 description: Descripción del lugar.
 *               Latitud:
 *                 type: string
 *                 description: Latitud del lugar.
 *               Longitud:
 *                 type: string
 *                 description: Longitud del lugar.
 *               EstadoID:
 *                 type: integer
 *                 description: ID del estado del lugar.
 *     responses:
 *       '200':
 *         description: Lugar actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el lugar con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el lugar.
 *   delete:
 *     summary: Eliminar un lugar por su ID.
 *     description: Elimina un lugar específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del lugar a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lugar eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el lugar con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el lugar.
 */
module.exports = app => {
    const lugaresController = require("../controllers/Lugar.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear un nuevo lugar
    router.post("/", requireAuth, lugaresController.create);

    // Obtener todos los lugares
    router.get("/", requireAuth, lugaresController.findAll);

    // Obtener un lugar por ID
    router.get("/:id", requireAuth, lugaresController.findOne);

    // Actualizar un lugar por ID
    router.put("/:id", requireAuth, lugaresController.update);

    // Eliminar un lugar por ID
    router.delete("/:id", requireAuth, lugaresController.delete);

    app.use("/api/lugares", router);
};
