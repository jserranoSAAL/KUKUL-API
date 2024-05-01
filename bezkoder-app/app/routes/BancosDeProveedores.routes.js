/**
 * @swagger
 * tags:
 *   name: BancosDeProveedores
 *   description: Endpoints para manejar los bancos de proveedores
 */

/**
 * @swagger
 * /api/bancos-de-proveedores:
 *   post:
 *     summary: Crear un nuevo banco de proveedores
 *     description: Crea un nuevo banco de proveedores.
 *     tags: [BancosDeProveedores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - campo1
 *               - campo2
 *               - campo3
 *               - campoN
 *             properties:
 *               campo1:
 *                 type: string
 *                 description: Descripción del campo1
 *               campo2:
 *                 type: string
 *                 description: Descripción del campo2
 *               campo3:
 *                 type: string
 *                 description: Descripción del campo3
 *               campoN:
 *                 type: string
 *                 description: Descripción del campoN
 *     responses:
 *       '201':
 *         description: Banco de proveedores creado exitosamente
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/bancos-de-proveedores:
 *   get:
 *     summary: Obtener todos los bancos de proveedores
 *     description: Retorna una lista de todos los bancos de proveedores.
 *     tags: [BancosDeProveedores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/bancos-de-proveedores/{id}:
 *   get:
 *     summary: Obtener un banco de proveedores por su ID
 *     description: Retorna un banco de proveedores específico según el ID proporcionado.
 *     tags: [BancosDeProveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del banco de proveedores a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: No se encontró el banco de proveedores con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/bancos-de-proveedores/{id}:
 *   put:
 *     summary: Actualizar un banco de proveedores por su ID
 *     description: Actualiza un banco de proveedores existente según el ID proporcionado.
 *     tags: [BancosDeProveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del banco de proveedores a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - campo1
 *               - campo2
 *               - campo3
 *               - campoN
 *             properties:
 *               campo1:
 *                 type: string
 *                 description: Descripción del campo1
 *               campo2:
 *                 type: string
 *                 description: Descripción del campo2
 *               campo3:
 *                 type: string
 *                 description: Descripción del campo3
 *               campoN:
 *                 type: string
 *                 description: Descripción del campoN
 *     responses:
 *       '200':
 *         description: Banco de proveedores actualizado exitosamente
 *       '404':
 *         description: No se encontró el banco de proveedores con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/bancos-de-proveedores/{id}:
 *   delete:
 *     summary: Eliminar un banco de proveedores por su ID
 *     description: Elimina un banco de proveedores existente según el ID proporcionado.
 *     tags: [BancosDeProveedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del banco de proveedores a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Banco de proveedores eliminado exitosamente
 *       '404':
 *         description: No se encontró el banco de proveedores con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const bancosDeProveedoresController = require("../controllers/BancoProveedores.controller");
    const { requireAuth } = require("../middlewares/auth");

    const bancosDeProveedoresRouter = require("express").Router();

    // Rutas para BancosDeProveedores con autenticación requerida
    bancosDeProveedoresRouter.post("/", requireAuth, bancosDeProveedoresController.create); // Crear un nuevo banco de proveedores
    bancosDeProveedoresRouter.get("/", requireAuth, bancosDeProveedoresController.findAll); // Obtener todos los bancos de proveedores
    bancosDeProveedoresRouter.get("/:id", requireAuth, bancosDeProveedoresController.findOne); // Obtener un banco de proveedores por su ID
    bancosDeProveedoresRouter.put("/:id", requireAuth, bancosDeProveedoresController.update); // Actualizar un banco de proveedores por su ID
    bancosDeProveedoresRouter.delete("/:id", requireAuth, bancosDeProveedoresController.delete); // Eliminar un banco de proveedores por su ID
    

    app.use("/api/bancos-de-proveedores", bancosDeProveedoresRouter);
};
