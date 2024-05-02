/**
 * @swagger
 * /api/ingresos:
 *   post:
 *     summary: Crear un nuevo ingreso.
 *     description: Crea un nuevo ingreso con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Fecha:
 *                 type: string
 *                 description: Fecha del ingreso.
 *               Nombre:
 *                 type: string
 *                 description: Nombre del ingreso.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del ingreso.
 *               Grupo:
 *                 type: string
 *                 description: Grupo del ingreso.
 *               Agencia:
 *                 type: string
 *                 description: Agencia del ingreso.
 *               PagoConIVA:
 *                 type: number
 *                 description: Pago con IVA del ingreso.
 *               TipoDePago:
 *                 type: string
 *                 description: Tipo de pago del ingreso.
 *               PagoSinIVA:
 *                 type: number
 *                 description: Pago sin IVA del ingreso.
 *               Impuesto:
 *                 type: number
 *                 description: Impuesto del ingreso.
 *               Moneda:
 *                 type: string
 *                 description: Moneda del ingreso.
 *               CentroFinanciero:
 *                 type: string
 *                 description: Centro financiero del ingreso.
 *               TC:
 *                 type: number
 *                 description: TC del ingreso.
 *               USD:
 *                 type: number
 *                 description: USD del ingreso.
 *               FechaDePago:
 *                 type: string
 *                 description: Fecha de pago del ingreso.
 *               Notas:
 *                 type: string
 *                 description: Notas del ingreso.
 *               Pagador:
 *                 type: string
 *                 description: Pagador del ingreso.
 *               NumeroDeOrden:
 *                 type: string
 *                 description: Número de orden del ingreso.
 *               Identificador:
 *                 type: string
 *                 description: Identificador del ingreso.
 *               Desl:
 *                 type: string
 *                 description: Desl del ingreso.
 *               Factura:
 *                 type: string
 *                 description: Factura del ingreso.
 *               Responsable:
 *                 type: string
 *                 description: Responsable del ingreso.
 *     responses:
 *       '200':
 *         description: Ingreso creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '500':
 *         description: Error del servidor al crear el ingreso.
 *   get:
 *     summary: Obtener todos los ingresos.
 *     description: Obtiene todos los ingresos almacenados en la base de datos.
 *     responses:
 *       '200':
 *         description: Lista de todos los ingresos.
 *       '500':
 *         description: Error del servidor al recuperar los ingresos.
 *
 * /api/ingresos/{id}:
 *   get:
 *     summary: Obtener un ingreso por su ID.
 *     description: Obtiene un ingreso específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ingreso a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Ingreso encontrado correctamente.
 *       '404':
 *         description: No se encontró el ingreso con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el ingreso.
 *   put:
 *     summary: Actualizar un ingreso por su ID.
 *     description: Actualiza un ingreso específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ingreso a actualizar.
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
 *                 description: Fecha del ingreso.
 *               Nombre:
 *                 type: string
 *                 description: Nombre del ingreso.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del ingreso.
 *               Grupo:
 *                 type: string
 *                 description: Grupo del ingreso.
 *               Agencia:
 *                 type: string
 *                 description: Agencia del ingreso.
 *               PagoConIVA:
 *                 type: number
 *                 description: Pago con IVA del ingreso.
 *               TipoDePago:
 *                 type: string
 *                 description: Tipo de pago del ingreso.
 *               PagoSinIVA:
 *                 type: number
 *                 description: Pago sin IVA del ingreso.
 *               Impuesto:
 *                 type: number
 *                 description: Impuesto del ingreso.
 *               Moneda:
 *                 type: string
 *                 description: Moneda del ingreso.
 *               CentroFinanciero:
 *                 type: string
 *                 description: Centro financiero del ingreso.
 *               TC:
 *                 type: number
 *                 description: TC del ingreso.
 *               USD:
 *                 type: number
 *                 description: USD del ingreso.
 *               FechaDePago:
 *                 type: string
 *                 description: Fecha de pago del ingreso.
 *               Notas:
 *                 type: string
 *                 description: Notas del ingreso.
 *               Pagador:
 *                 type: string
 *                 description: Pagador del ingreso.
 *               NumeroDeOrden:
 *                 type: string
 *                 description: Número de orden del ingreso.
 *               Identificador:
 *                 type: string
 *                 description: Identificador del ingreso.
 *               Desl:
 *                 type: string
 *                 description: Desl del ingreso.
 *               Factura:
 *                 type: string
 *                 description: Factura del ingreso.
 *               Responsable:
 *                 type: string
 *                 description: Responsable del ingreso.
 *     responses:
 *       '200':
 *         description: Ingreso actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '404':
 *         description: No se pudo actualizar el ingreso con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el ingreso.
 *   delete:
 *     summary: Eliminar un ingreso por su ID.
 *     description: Elimina un ingreso específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ingreso a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Ingreso eliminado correctamente.
 *       '404':
 *         description: No se pudo eliminar el ingreso con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el ingreso.
 */
module.exports = app => {
    const ingresosController = require("../controllers/Ingresos.controller.js");

    const ingresosRouter = require("express").Router();

    // Ruta para crear un nuevo Ingreso
    ingresosRouter.post("/", ingresosController.create);

    // Ruta para recuperar todos los Ingresos
    ingresosRouter.get("/", ingresosController.findAll);

    // Ruta para recuperar un único Ingreso con id
    ingresosRouter.get("/:id", ingresosController.findOne);

    // Ruta para actualizar un Ingreso con id
    ingresosRouter.put("/:id", ingresosController.update);

    // Ruta para eliminar un Ingreso con id
    ingresosRouter.delete("/:id", ingresosController.delete);

    // Montar el enrutador bajo la ruta /api/ingresos
    app.use("/api/ingresos", ingresosRouter);
};


module.exports = app => {
    const ingresosController = require("../controllers/Ingresos.controller.js");

    const ingresosRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    ingresosRouter.post("/", ingresosController.create);

    // Ruta para recuperar todos los Gastos
    ingresosRouter.get("/", ingresosController.findAll);

    // Ruta para recuperar un único Gasto con id
    ingresosRouter.get("/:id", ingresosController.findOne);

    // Ruta para actualizar un Gasto con id
    ingresosRouter.put("/:id", ingresosController.update);

    // Ruta para eliminar un Gasto con id
    ingresosRouter.delete("/:id", ingresosController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/ingresos", ingresosRouter);
};
