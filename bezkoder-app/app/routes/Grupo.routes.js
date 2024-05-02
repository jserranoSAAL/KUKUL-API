/**
 * @swagger
 * tags:
 *   name: Grupos
 *   description: Endpoints para manejar los grupos
 */

/**
 * @swagger
 * /api/grupos:
 *   post:
 *     summary: Crear un nuevo grupo
 *     description: Crea un nuevo grupo con la información proporcionada en el cuerpo de la solicitud.
 *     tags: [Grupos]
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
 *               FechaInicio:
 *                 type: string
 *                 format: date
 *               ViajerosConfirmados:
 *                 type: integer
 *               Nombre:
 *                 type: string
 *               Estado:
 *                 type: string
 *               Agencia:
 *                 type: string
 *               Periodo:
 *                 type: string
 *               Facturado:
 *                 type: boolean
 *               Real:
 *                 type: boolean
 *               PorcentajePlaneado:
 *                 type: integer
 *               PorcentajeReal:
 *                 type: integer
 *               ResponsableDelGrupo:
 *                 type: string
 *             example:
 *               Fecha: "2024-04-30"
 *               FechaInicio: "2024-05-01"
 *               ViajerosConfirmados: 10
 *               Nombre: Grupo de ejemplo
 *               Estado: Activo
 *               Agencia: Agencia de viajes
 *               Periodo: Mayo 2024
 *               Facturado: false
 *               Real: false
 *               PorcentajePlaneado: 80
 *               PorcentajeReal: 0
 *               ResponsableDelGrupo: John Doe
 *     responses:
 *       '200':
 *         description: Grupo creado exitosamente
 *       '400':
 *         description: Solicitud incorrecta, algunos campos pueden faltar o ser inválidos
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/grupos:
 *   get:
 *     summary: Obtener todos los grupos
 *     description: Retorna una lista de todos los grupos.
 *     tags: [Grupos]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/grupos/{id}:
 *   get:
 *     summary: Obtener un grupo por ID
 *     description: Retorna un grupo basado en el ID proporcionado.
 *     tags: [Grupos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del grupo a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Grupo encontrado
 *       '404':
 *         description: Grupo no encontrado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/grupos/{id}:
 *   put:
 *     summary: Actualizar un grupo por ID
 *     description: Actualiza un grupo basado en el ID proporcionado.
 *     tags: [Grupos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del grupo a actualizar
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
 *               FechaInicio:
 *                 type: string
 *                 format: date
 *               ViajerosConfirmados:
 *                 type: integer
 *               Nombre:
 *                 type: string
 *               Estado:
 *                 type: string
 *               Agencia:
 *                 type: string
 *               Periodo:
 *                 type: string
 *               Facturado:
 *                 type: boolean
 *               Real:
 *                 type: boolean
 *               PorcentajePlaneado:
 *                 type: integer
 *               PorcentajeReal:
 *                 type: integer
 *               ResponsableDelGrupo:
 *                 type: string
 *             example:
 *               Fecha: "2024-04-30"
 *               FechaInicio: "2024-05-01"
 *               ViajerosConfirmados: 10
 *               Nombre: Grupo de ejemplo actualizado
 *               Estado: Activo
 *               Agencia: Agencia de viajes
 *               Periodo: Mayo 2024
 *               Facturado: false
 *               Real: false
 *               PorcentajePlaneado: 80
 *               PorcentajeReal: 0
 *               ResponsableDelGrupo: John Doe
 *     responses:
 *       '200':
 *         description: Grupo actualizado correctamente
 *       '400':
 *         description: Solicitud incorrecta, algunos campos pueden faltar o ser inválidos
 *       '404':
 *         description: Grupo no encontrado
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/grupos/{id}:
 *   delete:
 *     summary: Eliminar un grupo por ID
 *     description: Elimina un grupo basado en el ID proporcionado.
 *     tags: [Grupos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del grupo a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Grupo eliminado correctamente
 *       '404':
 *         description: Grupo no encontrado
 *       '500':
 *         description: Error interno del servidor
 */


module.exports = app => {
    const grupoController = require("../controllers/Grupo.controller.js");

    const grupoRouter = require("express").Router();

    // Ruta para crear un nuevo Gasto
    grupoRouter.post("/", grupoController.create);

    // Ruta para recuperar todos los Gastos
    grupoRouter.get("/", grupoController.findAll);

    // Ruta para recuperar un único Gasto con id
    grupoRouter.get("/:id", grupoController.findOne);

    // Ruta para actualizar un Gasto con id
    grupoRouter.put("/:id", grupoController.update);

    // Ruta para eliminar un Gasto con id
    grupoRouter.delete("/:id", grupoController.delete);

    // Montar el enrutador bajo la ruta /api/gastos
    app.use("/api/grupos", grupoRouter);
};
