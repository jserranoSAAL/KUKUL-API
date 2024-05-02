/**
 * @swagger
 * tags:
 *   name: Impuestos de Aduana
 *   description: Endpoints para manejar los impuestos de aduana
 */

/**
 * @swagger
 * /api/impuestosAduana:
 *   post:
 *     summary: Crear un nuevo impuesto de aduana
 *     description: Crea un nuevo impuesto de aduana con la información proporcionada en el cuerpo de la solicitud.
 *     tags: [Impuestos de Aduana]
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
 *               formula:
 *                 type: string
 *               calculo:
 *                 type: string
 *             example:
 *               nombre: Impuesto de prueba
 *               formula: (valor * 0.1)
 *               calculo: Porcentaje
 *     responses:
 *       '201':
 *         description: Impuesto de aduana creado exitosamente
 *       '400':
 *         description: Solicitud incorrecta, nombre, formula y calculo son campos requeridos
 *       '401':
 *         description: No autorizado, falta el token de acceso
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/impuestosAduana:
 *   get:
 *     summary: Obtener todos los impuestos de aduana
 *     description: Retorna una lista de todos los impuestos de aduana.
 *     tags: [Impuestos de Aduana]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *       '401':
 *         description: No autorizado, falta el token de acceso
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/impuestosAduana/{id}:
 *   get:
 *     summary: Obtener un impuesto de aduana por ID
 *     description: Retorna un impuesto de aduana basado en el ID proporcionado.
 *     tags: [Impuestos de Aduana]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del impuesto de aduana a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Impuesto de aduana encontrado
 *       '401':
 *         description: No autorizado, falta el token de acceso
 *       '404':
 *         description: Impuesto de aduana no encontrado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/impuestosAduana/{id}:
 *   put:
 *     summary: Actualizar un impuesto de aduana por ID
 *     description: Actualiza un impuesto de aduana basado en el ID proporcionado.
 *     tags: [Impuestos de Aduana]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del impuesto de aduana a actualizar
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
 *               formula:
 *                 type: string
 *               calculo:
 *                 type: string
 *             example:
 *               nombre: Impuesto actualizado
 *               formula: (valor * 0.2)
 *               calculo: Porcentaje
 *     responses:
 *       '200':
 *         description: Impuesto de aduana actualizado exitosamente
 *       '401':
 *         description: No autorizado, falta el token de acceso
 *       '404':
 *         description: Impuesto de aduana no encontrado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/impuestosAduana/{id}:
 *   delete:
 *     summary: Eliminar un impuesto de aduana por ID
 *     description: Elimina un impuesto de aduana basado en el ID proporcionado.
 *     tags: [Impuestos de Aduana]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del impuesto de aduana a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Impuesto de aduana eliminado exitosamente
 *       '401':
 *         description: No autorizado, falta el token de acceso
 *       '404':
 *         description: Impuesto de aduana no encontrado
 *       '500':
 *         description: Error interno del servidor
 */


module.exports = app => {
    const impuestoAduanaController = require("../controllers/ImpuestoAduana.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Rutas con autenticación requerida
    router.post("/", requireAuth, impuestoAduanaController.create); // Crear un nuevo impuesto de aduana
    router.get("/", requireAuth, impuestoAduanaController.findAll); // Obtener todos los impuestos de aduana
    router.get("/:id", requireAuth, impuestoAduanaController.findOne); // Obtener un impuesto de aduana por su ID
    router.put("/:id", requireAuth, impuestoAduanaController.update); // Actualizar un impuesto de aduana por su ID
    router.delete("/:id", requireAuth, impuestoAduanaController.delete); // Eliminar un impuesto de aduana por su ID

    app.use("/api/impuestosAduana", router);
};
