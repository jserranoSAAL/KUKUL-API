/**
 * @swagger
 * tags:
 *   name: Gastos
 *   description: Endpoints para manejar los gastos
 */

/**
 * @swagger
 * /api/gastos:
 *   get:
 *     summary: Obtener todos los gastos
 *     description: Retorna una lista de todos los gastos.
 *     tags: [Gastos]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 *
 *   post:
 *     summary: Crear un nuevo gasto
 *     description: Crea un nuevo gasto.
 *     tags: [Gastos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Fecha:
 *                 type: string
 *                 format: date
 *               Grupo:
 *                 type: string
 *               Proveedor:
 *                 type: string
 *               Servicio:
 *                 type: string
 *               CostoSinIVA:
 *                 type: number
 *               IVA:
 *                 type: number
 *               TotalCosto:
 *                 type: number
 *               CentroFinanciero:
 *                 type: string
 *               TC:
 *                 type: number
 *               FechaPago:
 *                 type: string
 *                 format: date
 *               EstadoPago:
 *                 type: string
 *               Notas:
 *                 type: string
 *               Identificador:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Gasto creado correctamente
 *       '400':
 *         description: Campos requeridos faltantes
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/gastos/{id}:
 *   get:
 *     summary: Obtener un gasto por ID
 *     description: Retorna un gasto basado en el ID proporcionado.
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del gasto a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Gasto encontrado
 *       '404':
 *         description: Gasto no encontrado
 *       '500':
 *         description: Error interno del servidor
 *
 *   put:
 *     summary: Actualizar un gasto por ID
 *     description: Actualiza un gasto basado en el ID proporcionado.
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del gasto a actualizar
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
 *                 format: date
 *               Grupo:
 *                 type: string
 *               Proveedor:
 *                 type: string
 *               Servicio:
 *                 type: string
 *               CostoSinIVA:
 *                 type: number
 *               IVA:
 *                 type: number
 *               TotalCosto:
 *                 type: number
 *               CentroFinanciero:
 *                 type: string
 *               TC:
 *                 type: number
 *               FechaPago:
 *                 type: string
 *                 format: date
 *               EstadoPago:
 *                 type: string
 *               Notas:
 *                 type: string
 *               Identificador:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Gasto actualizado correctamente
 *       '400':
 *         description: Campos requeridos faltantes
 *       '404':
 *         description: Gasto no encontrado
 *       '500':
 *         description: Error interno del servidor
 *
 *   delete:
 *     summary: Eliminar un gasto por ID
 *     description: Elimina un gasto basado en el ID proporcionado.
 *     tags: [Gastos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del gasto a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Gasto eliminado correctamente
 *       '404':
 *         description: Gasto no encontrado
 *       '500':
 *         description: Error interno del servidor
 */


module.exports = app => {
    const gastosController = require("../controllers/Gastos.controller.js");

    const gastosRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");


    // Ruta para crear un nuevo Gasto
    gastosRouter.post("/", requireAuth, gastosController.create);

    // Ruta para recuperar todos los Gastos
    gastosRouter.get("/", requireAuth, gastosController.findAll);

    // Ruta para recuperar un único Gasto con id
    gastosRouter.get("/:id", requireAuth, gastosController.findOne);

    // Ruta para actualizar un Gasto con id
    gastosRouter.put("/:id", requireAuth, gastosController.update);

    // Ruta para eliminar un Gasto con id
    gastosRouter.delete("/:id", requireAuth, gastosController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/gastos", gastosRouter);
};
