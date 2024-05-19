/**
 * @swagger
 * tags:
 *   name: ProyectoVenta
 *   description: Endpoints para manejar los proyectos de venta
 */

/**
 * @swagger
 * /api/proyectoVenta:
 *   post:
 *     summary: Crear un nuevo Proyecto de Venta.
 *     description: Crea un nuevo Proyecto de Venta con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Prospect:
 *                 type: string
 *                 description: Nombre del prospecto del proyecto de venta.
 *               Viaje:
 *                 type: string
 *                 description: Detalles del viaje del proyecto de venta.
 *               Pax:
 *                 type: integer
 *                 description: Número de pasajeros del proyecto de venta.
 *               PrimerDiaDelViaje:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del viaje del proyecto de venta.
 *               EstadoDelProyecto:
 *                 type: string
 *                 description: Estado actual del proyecto de venta.
 *               AgenciasDeViaje:
 *                 type: string
 *                 description: Agencia de viaje asociada al proyecto de venta.
 *               GrupoConfirmado:
 *                 type: boolean
 *                 description: Indica si el grupo está confirmado o no.
 *               Codigo:
 *                 type: string
 *                 description: Código único del proyecto de venta.
 *               Manager:
 *                 type: string
 *                 description: Manager asociado al proyecto de venta.
 *     responses:
 *       '200':
 *         description: Proyecto de Venta creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el Proyecto de Venta.
 *   get:
 *     summary: Obtener todos los Proyectos de Venta.
 *     description: Obtiene todos los proyectos de venta almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los Proyectos de Venta.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los proyectos de venta.
 *
 * /api/proyectoVenta/{id}:
 *   get:
 *     summary: Obtener un Proyecto de Venta por su ID.
 *     description: Obtiene un Proyecto de Venta específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Proyecto de Venta a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Proyecto de Venta encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el Proyecto de Venta con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el Proyecto de Venta.
 *   put:
 *     summary: Actualizar un Proyecto de Venta por su ID.
 *     description: Actualiza un Proyecto de Venta específico utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Proyecto de Venta a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Prospect:
 *                 type: string
 *                 description: Nombre del prospecto del proyecto de venta.
 *               Viaje:
 *                 type: string
 *                 description: Detalles del viaje del proyecto de venta.
 *               Pax:
 *                 type: integer
 *                 description: Número de pasajeros del proyecto de venta.
 *               PrimerDiaDelViaje:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del viaje del proyecto de venta.
 *               EstadoDelProyecto:
 *                 type: string
 *                 description: Estado actual del proyecto de venta.
 *               AgenciasDeViaje:
 *                 type: string
 *                 description: Agencia de viaje asociada al proyecto de venta.
 *               GrupoConfirmado:
 *                 type: boolean
 *                 description: Indica si el grupo está confirmado o no.
 *               Codigo:
 *                 type: string
 *                 description: Código único del proyecto de venta.
 *               Manager:
 *                 type: string
 *                 description: Manager asociado al proyecto de venta.
 *     responses:
 *       '200':
 *         description: Proyecto de Venta actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el Proyecto de Venta con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el Proyecto de Venta.
 *   delete:
 *     summary: Eliminar un Proyecto de Venta por su ID.
 *     description: Elimina un Proyecto de Venta específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Proyecto de Venta a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Proyecto de Venta eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el Proyecto de Venta con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el Proyecto de Venta.
 *
 * /api/proyectoVenta/buscar/prospect/{prospect}:
 *   get:
 *     summary: Buscar Proyectos de Venta por prospecto.
 *     description: Busca todos los proyectos de venta que coincidan con el prospecto proporcionado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: prospect
 *         required: true
 *         description: Nombre del prospecto a buscar en los proyectos de venta.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de Proyectos de Venta que coinciden con el prospecto proporcionado.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontraron proyectos de venta con el prospecto proporcionado.
 *       '500':
 *         description: Error del servidor al buscar los proyectos de venta.
 */


module.exports = app => {
    const proyectoVentaController = require("../controllers/ProyectoVenta.controller.js");

    const proyectoVentaRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Ruta para crear un nuevo Gasto
    proyectoVentaRouter.post("/", requireAuth, proyectoVentaController.create);

    // Ruta para recuperar todos los Gastos
    proyectoVentaRouter.get("/", requireAuth, proyectoVentaController.findAll);

    // Ruta para recuperar un único Gasto con id
    proyectoVentaRouter.get("/:id", requireAuth, proyectoVentaController.findOne);

    // Ruta para actualizar un Gasto con id
    proyectoVentaRouter.put("/:id", requireAuth, proyectoVentaController.update);

    // Ruta para eliminar un Gasto con id
    proyectoVentaRouter.delete("/:id", requireAuth, proyectoVentaController.delete);

    // Buscar Proyectos de Venta por prospecto con LIKE
    proyectoVentaRouter.get("/buscar/prospect/:prospect", requireAuth, proyectoVentaController.findByProspect);


    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/proyectoVenta", proyectoVentaRouter);
};
