/**
 * @swagger
 * /api/miscellaneous:
 *   post:
 *     summary: Crear un nuevo registro de Miscellaneous.
 *     description: Crea un nuevo registro de Miscellaneous con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               time_zone:
 *                 type: string
 *                 description: Zona horaria.
 *               default_first_date:
 *                 type: string
 *                 description: Fecha predeterminada.
 *               next_invoice_number:
 *                 type: integer
 *                 description: Número de factura siguiente.
 *               forget_unpaid_services_days:
 *                 type: integer
 *                 description: Días para olvidar servicios impagos.
 *               max_infant_age:
 *                 type: integer
 *                 description: Edad máxima para bebés.
 *               max_child_age:
 *                 type: integer
 *                 description: Edad máxima para niños.
 *     responses:
 *       '200':
 *         description: Registro de Miscellaneous creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el registro de Miscellaneous.
 *   get:
 *     summary: Obtener todos los registros de Miscellaneous.
 *     description: Obtiene todos los registros de Miscellaneous almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los registros de Miscellaneous.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los registros de Miscellaneous.
 *
 * /api/miscellaneous/{id}:
 *   get:
 *     summary: Obtener un registro de Miscellaneous por su ID.
 *     description: Obtiene un registro de Miscellaneous específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de Miscellaneous a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Registro de Miscellaneous encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el registro de Miscellaneous con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el registro de Miscellaneous.
 *   put:
 *     summary: Actualizar un registro de Miscellaneous por su ID.
 *     description: Actualiza un registro de Miscellaneous específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de Miscellaneous a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               time_zone:
 *                 type: string
 *                 description: Zona horaria.
 *               default_first_date:
 *                 type: string
 *                 description: Fecha predeterminada.
 *               next_invoice_number:
 *                 type: integer
 *                 description: Número de factura siguiente.
 *               forget_unpaid_services_days:
 *                 type: integer
 *                 description: Días para olvidar servicios impagos.
 *               max_infant_age:
 *                 type: integer
 *                 description: Edad máxima para bebés.
 *               max_child_age:
 *                 type: integer
 *                 description: Edad máxima para niños.
 *     responses:
 *       '200':
 *         description: Registro de Miscellaneous actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el registro de Miscellaneous con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el registro de Miscellaneous.
 *   delete:
 *     summary: Eliminar un registro de Miscellaneous por su ID.
 *     description: Elimina un registro de Miscellaneous específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del registro de Miscellaneous a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Registro de Miscellaneous eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el registro de Miscellaneous con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el registro de Miscellaneous.
 *   post:
 *     summary: Upsert un registro de Miscellaneous.
 *     description: Actualiza o crea un registro de Miscellaneous.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               time_zone:
 *                 type: string
 *                 description: Zona horaria.
 *               default_first_date:
 *                 type: string
 *                 description: Fecha predeterminada.
 *               next_invoice_number:
 *                 type: integer
 *                 description: Número de factura siguiente.
 *               forget_unpaid_services_days:
 *                 type: integer
 *                 description: Días para olvidar servicios impagos.
 *               max_infant_age:
 *                 type: integer
 *                 description: Edad máxima para bebés.
 *               max_child_age:
 *                 type: integer
 *                 description: Edad máxima para niños.
 *     responses:
 *       '200':
 *         description: Registro de Miscellaneous actualizado o creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al procesar la solicitud de Miscellaneous.
 *   get:
 *     summary: Obtener el último registro de Miscellaneous.
 *     description: Obtiene el último registro de Miscellaneous almacenado en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Último registro de Miscellaneous obtenido correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al obtener el último registro de Miscellaneous.
 */
module.exports = app => {
    const miscellaneousController = require("../controllers/Miscellaneous.controller");
    const { requireAuth } = require("../middlewares/auth"); // Asume que tienes un middleware de autenticación

    const miscellaneousRouter = require("express").Router();

    // Rutas para Miscellaneous con Middleware de Autenticación
    miscellaneousRouter.post("/", requireAuth, miscellaneousController.create); // Crear un nuevo Miscellaneous
    miscellaneousRouter.get("/", requireAuth, miscellaneousController.findAll); // Obtener todos los Miscellaneous
    miscellaneousRouter.get("/:id", requireAuth, miscellaneousController.findOne); // Obtener un Miscellaneous por id
    miscellaneousRouter.put("/:id", requireAuth, miscellaneousController.update); // Actualizar un Miscellaneous por id
    miscellaneousRouter.delete("/:id", requireAuth, miscellaneousController.delete); // Eliminar un Miscellaneous por id
    miscellaneousRouter.post("/upsert", requireAuth, miscellaneousController.upsert); // Upsert un Miscellaneous
    miscellaneousRouter.get("/latest/one", requireAuth, miscellaneousController.findLatest); // Obtener el último Miscellaneous

    app.use("/api/miscellaneous", miscellaneousRouter);
};
