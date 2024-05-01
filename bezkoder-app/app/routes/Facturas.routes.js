/**
 * @swagger
 * tags:
 *   name: Facturas
 *   description: Endpoints para manejar las facturas
 */

/**
 * @swagger
 * /api/facturas:
 *   get:
 *     summary: Obtener todas las facturas
 *     description: Retorna una lista de todas las facturas.
 *     tags: [Facturas]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 *
 *   post:
 *     summary: Crear una nueva factura
 *     description: Crea una nueva factura.
 *     tags: [Facturas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Factura:
 *                 type: string
 *               Viaje:
 *                 type: string
 *               Numero:
 *                 type: integer
 *               Orden:
 *                 type: integer
 *               Agencia:
 *                 type: string
 *               Pagador:
 *                 type: string
 *               Estado:
 *                 type: string
 *               FechaLimite:
 *                 type: string
 *                 format: date
 *               FechaPago:
 *                 type: string
 *                 format: date
 *               ImporteSinIVA:
 *                 type: number
 *               Total:
 *                 type: number
 *               TotalGrupo:
 *                 type: number
 *               SaldoGrupo:
 *                 type: number
 *               Moneda:
 *                 type: string
 *               Identificador:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Factura creada correctamente
 *       '400':
 *         description: Campos requeridos faltantes
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/facturas/{id}:
 *   get:
 *     summary: Obtener una factura por ID
 *     description: Retorna una factura basada en el ID proporcionado.
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la factura a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Factura encontrada
 *       '404':
 *         description: Factura no encontrada
 *       '500':
 *         description: Error interno del servidor
 *
 *   put:
 *     summary: Actualizar una factura por ID
 *     description: Actualiza una factura basada en el ID proporcionado.
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la factura a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Factura:
 *                 type: string
 *               Viaje:
 *                 type: string
 *               Numero:
 *                 type: integer
 *               Orden:
 *                 type: integer
 *               Agencia:
 *                 type: string
 *               Pagador:
 *                 type: string
 *               Estado:
 *                 type: string
 *               FechaLimite:
 *                 type: string
 *                 format: date
 *               FechaPago:
 *                 type: string
 *                 format: date
 *               ImporteSinIVA:
 *                 type: number
 *               Total:
 *                 type: number
 *               TotalGrupo:
 *                 type: number
 *               SaldoGrupo:
 *                 type: number
 *               Moneda:
 *                 type: string
 *               Identificador:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Factura actualizada correctamente
 *       '400':
 *         description: Campos requeridos faltantes
 *       '404':
 *         description: Factura no encontrada
 *       '500':
 *         description: Error interno del servidor
 *
 *   delete:
 *     summary: Eliminar una factura por ID
 *     description: Elimina una factura basada en el ID proporcionado.
 *     tags: [Facturas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la factura a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Factura eliminada correctamente
 *       '404':
 *         description: Factura no encontrada
 *       '500':
 *         description: Error interno del servidor
 */


module.exports = app => {
    const facturasController = require("../controllers/Facturas.controller.js");

    const facturasRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear una nueva Factura
    facturasRouter.post("/", requireAuth, facturasController.create);

    // Ruta para recuperar todas las Facturas
    facturasRouter.get("/", requireAuth, facturasController.findAll);

    // Ruta para recuperar una única Factura con id
    facturasRouter.get("/:id", requireAuth, facturasController.findOne);

    // Ruta para actualizar una Factura con id
    facturasRouter.put("/:id", requireAuth, facturasController.update);

    // Ruta para eliminar una Factura con id
    facturasRouter.delete("/:id", requireAuth, facturasController.delete);

    // Montar el enrutador bajo la ruta /api/facturas
    app.use("/api/facturas", facturasRouter);
};
