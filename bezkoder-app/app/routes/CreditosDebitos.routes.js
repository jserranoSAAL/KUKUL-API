/**
 * @swagger
 * tags:
 *   name: CreditosDebitos
 *   description: Endpoints para manejar los registros de Créditos y Débitos
 */

/**
 * @swagger
 * /api/creditosDebitos:
 *   post:
 *     summary: Crear un nuevo registro de Créditos o Débitos
 *     description: Crea un nuevo registro de Créditos o Débitos.
 *     tags: [CreditosDebitos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Fecha:
 *                 type: string
 *                 description: Fecha del registro
 *               Grupo:
 *                 type: string
 *                 description: Grupo del registro
 *               Proveedor:
 *                 type: string
 *                 description: Proveedor del registro
 *               Agencia:
 *                 type: string
 *                 description: Agencia del registro
 *               MontoSinIVA:
 *                 type: number
 *                 description: Monto sin IVA del registro
 *               IVA:
 *                 type: number
 *                 description: Impuesto al Valor Agregado del registro
 *               Total:
 *                 type: number
 *                 description: Total del registro
 *               Moneda:
 *                 type: string
 *                 description: Moneda del registro
 *               EstadoDePago:
 *                 type: string
 *                 description: Estado de pago del registro
 *               Notas:
 *                 type: string
 *                 description: Notas del registro
 *     responses:
 *       '200':
 *         description: Registro de Créditos o Débitos creado exitosamente
 *       '400':
 *         description: El contenido no puede estar vacío
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/creditosDebitos:
 *   get:
 *     summary: Obtener todos los registros de Créditos y Débitos
 *     description: Retorna una lista de todos los registros de Créditos y Débitos.
 *     tags: [CreditosDebitos]
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
 * /api/creditosDebitos/{id}:
 *   get:
 *     summary: Obtener un registro de Créditos o Débitos por su ID
 *     description: Retorna un único registro de Créditos o Débitos según el ID proporcionado.
 *     tags: [CreditosDebitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de Créditos o Débitos a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: No se pudo encontrar el registro de Créditos o Débitos con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/creditosDebitos/{id}:
 *   put:
 *     summary: Actualizar un registro de Créditos o Débitos por su ID
 *     description: Actualiza un registro existente de Créditos o Débitos según el ID proporcionado.
 *     tags: [CreditosDebitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de Créditos o Débitos a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Fecha:
 *                 type: string
 *                 description: Fecha del registro
 *               Grupo:
 *                 type: string
 *                 description: Grupo del registro
 *               Proveedor:
 *                 type: string
 *                 description: Proveedor del registro
 *               Agencia:
 *                 type: string
 *                 description: Agencia del registro
 *               MontoSinIVA:
 *                 type: number
 *                 description: Monto sin IVA del registro
 *               IVA:
 *                 type: number
 *                 description: Impuesto al Valor Agregado del registro
 *               Total:
 *                 type: number
 *                 description: Total del registro
 *               Moneda:
 *                 type: string
 *                 description: Moneda del registro
 *               EstadoDePago:
 *                 type: string
 *                 description: Estado de pago del registro
 *               Notas:
 *                 type: string
 *                 description: Notas del registro
 *     responses:
 *       '200':
 *         description: Registro de Créditos o Débitos actualizado exitosamente
 *       '404':
 *         description: No se puede actualizar el registro de Créditos o Débitos con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/creditosDebitos/{id}:
 *   delete:
 *     summary: Eliminar un registro de Créditos o Débitos por su ID
 *     description: Elimina un registro existente de Créditos o Débitos según el ID proporcionado.
 *     tags: [CreditosDebitos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de Créditos o Débitos a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Registro de Créditos o Débitos eliminado correctamente
 *       '404':
 *         description: No se pudo eliminar el registro de Créditos o Débitos con el ID proporcionado
 *       '500':
 *         description: Error interno del servidor
 */

module.exports = app => {
    const creditosDebitosController = require("../controllers/CreditosDebitos.controller.js");
    const { requireAuth } = require("../middlewares/auth");

    const creditosDebitosRouter = require("express").Router();

    // Rutas para CreditosDebitos con Middleware de Autenticación
    creditosDebitosRouter.post("/", requireAuth, creditosDebitosController.create);
    creditosDebitosRouter.get("/", requireAuth, creditosDebitosController.findAll);
    creditosDebitosRouter.get("/:id", requireAuth, creditosDebitosController.findOne);
    creditosDebitosRouter.put("/:id", requireAuth, creditosDebitosController.update);
    creditosDebitosRouter.delete("/:id", requireAuth, creditosDebitosController.delete);

    app.use("/api/creditosDebitos", creditosDebitosRouter);
};
