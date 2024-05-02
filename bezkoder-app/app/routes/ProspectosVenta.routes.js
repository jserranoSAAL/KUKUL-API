/**
 * @swagger
 * tags:
 *   name: Prospectos de Venta
 *   description: Endpoints para manejar los prospectos de venta
 *
 * /api/prospectosVenta:
 *   get:
 *     summary: Obtener todos los prospectos de venta.
 *     description: Obtiene todos los prospectos de venta almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los prospectos de venta.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los prospectos de venta.
 *   post:
 *     summary: Crear un nuevo prospecto de venta.
 *     description: Crea un nuevo prospecto de venta con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Proyecto:
 *                 type: string
 *                 description: Nombre del proyecto del prospecto de venta.
 *               Agencia:
 *                 type: string
 *                 description: Agencia del prospecto de venta.
 *               Viaje:
 *                 type: string
 *                 description: Viaje del prospecto de venta.
 *               Inicio:
 *                 type: string
 *                 description: Fecha de inicio del prospecto de venta.
 *               Estado:
 *                 type: string
 *                 description: Estado del prospecto de venta.
 *               EstadoDePago:
 *                 type: string
 *                 description: Estado de pago del prospecto de venta.
 *     responses:
 *       '200':
 *         description: Prospecto de venta creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el prospecto de venta.
 *
 * /api/prospectosVenta/{id}:
 *   get:
 *     summary: Obtener un prospecto de venta por su ID.
 *     description: Obtiene un prospecto de venta específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del prospecto de venta a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Prospecto de venta encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el prospecto de venta con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el prospecto de venta.
 *   put:
 *     summary: Actualizar un prospecto de venta por su ID.
 *     description: Actualiza un prospecto de venta específico utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del prospecto de venta a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Proyecto:
 *                 type: string
 *                 description: Nombre del proyecto del prospecto de venta.
 *               Agencia:
 *                 type: string
 *                 description: Agencia del prospecto de venta.
 *               Viaje:
 *                 type: string
 *                 description: Viaje del prospecto de venta.
 *               Inicio:
 *                 type: string
 *                 description: Fecha de inicio del prospecto de venta.
 *               Estado:
 *                 type: string
 *                 description: Estado del prospecto de venta.
 *               EstadoDePago:
 *                 type: string
 *                 description: Estado de pago del prospecto de venta.
 *     responses:
 *       '200':
 *         description: Prospecto de venta actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se pudo actualizar el prospecto de venta con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el prospecto de venta.
 *   delete:
 *     summary: Eliminar un prospecto de venta por su ID.
 *     description: Elimina un prospecto de venta específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del prospecto de venta a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Prospecto de venta eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se pudo eliminar el prospecto de venta con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el prospecto de venta.
 * /api/prospectosVenta/buscar/proyecto/{proyecto}:
 *   get:
 *     summary: Buscar prospectos de venta por proyecto.
 *     description: Obtiene una lista de prospectos de venta cuyo proyecto coincida parcial o totalmente con el nombre proporcionado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: proyecto
 *         required: true
 *         description: Nombre del proyecto a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de prospectos de venta encontrados.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al buscar los prospectos de venta por proyecto.
 */

module.exports = app => {
    const prospectosVentaController = require("../controllers/ProspectosVenta.controller.js");
    const prospectosVentaRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Crear un nuevo Prospecto de Venta
    prospectosVentaRouter.post("/", requireAuth, prospectosVentaController.create);

    // Recuperar todos los Prospectos de Venta
    prospectosVentaRouter.get("/", requireAuth, prospectosVentaController.findAll);

    // Recuperar un único Prospecto de Venta con id
    prospectosVentaRouter.get("/:id", requireAuth, prospectosVentaController.findOne);

    // Actualizar un Prospecto de Venta con id
    prospectosVentaRouter.put("/:id", requireAuth, prospectosVentaController.update);

    // Eliminar un Prospecto de Venta con id
    prospectosVentaRouter.delete("/:id", requireAuth, prospectosVentaController.delete);

    // Buscar Prospectos de Venta por proyecto con LIKE
    prospectosVentaRouter.get("/buscar/proyecto/:proyecto", requireAuth, prospectosVentaController.findByProyecto);


    // Montar el enrutador bajo la ruta /api/prospectosVenta
    app.use("/api/prospectosVenta", prospectosVentaRouter);
};
