/**
 * @swagger
 * tags:
 *   name: Paquetes
 *   description: Endpoints para manejar los paquetes registrados
 */
/**
 * @swagger
 * /api/paquetes:
 *   post:
 *     summary: Crear un nuevo paquete.
 *     description: Crea un nuevo paquete con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del paquete.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del paquete.
 *               Estado:
 *                 type: string
 *                 description: Estado del paquete.
 *               Codigo:
 *                 type: string
 *                 description: Código del paquete.
 *               Inicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del paquete.
 *               Fin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización del paquete.
 *               Creador:
 *                 type: string
 *                 description: Creador del paquete.
 *               TipoDeViaje:
 *                 type: string
 *                 description: Tipo de viaje del paquete.
 *               Etiquetas:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Etiquetas del paquete.
 *               Nivel:
 *                 type: string
 *                 description: Nivel del paquete.
 *               Traducciones:
 *                 type: object
 *                 description: Traducciones del paquete.
 *               Imagenes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Imágenes del paquete.
 *               NotasInternas:
 *                 type: string
 *                 description: Notas internas del paquete.
 *     responses:
 *       '200':
 *         description: Paquete creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el paquete.
 *   get:
 *     summary: Obtener todos los paquetes.
 *     description: Obtiene todos los paquetes almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los paquetes.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los paquetes.
 *
 * /api/paquetes/{id}:
 *   get:
 *     summary: Obtener un paquete por su ID.
 *     description: Obtiene un paquete específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paquete a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Paquete encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el paquete con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el paquete.
 *   put:
 *     summary: Actualizar un paquete por su ID.
 *     description: Actualiza un paquete específico utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paquete a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nombre:
 *                 type: string
 *                 description: Nombre del paquete.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del paquete.
 *               Estado:
 *                 type: string
 *                 description: Estado del paquete.
 *               Codigo:
 *                 type: string
 *                 description: Código del paquete.
 *               Inicio:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del paquete.
 *               Fin:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización del paquete.
 *               Creador:
 *                 type: string
 *                 description: Creador del paquete.
 *               TipoDeViaje:
 *                 type: string
 *                 description: Tipo de viaje del paquete.
 *               Etiquetas:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Etiquetas del paquete.
 *               Nivel:
 *                 type: string
 *                 description: Nivel del paquete.
 *               Traducciones:
 *                 type: object
 *                 description: Traducciones del paquete.
 *               Imagenes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Imágenes del paquete.
 *               NotasInternas:
 *                 type: string
 *                 description: Notas internas del paquete.
 *     responses:
 *       '200':
 *         description: Paquete actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el paquete.
 *   delete:
 *     summary: Eliminar un paquete por su ID.
 *     description: Elimina un paquete específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del paquete a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Paquete eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el paquete.
 * /api/paquetes/nombre/{nombre}:
 *   get:
 *     summary: Buscar paquetes por nombre.
 *     description: Obtiene todos los paquetes cuyo nombre coincide parcialmente con el nombre proporcionado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre a buscar en los paquetes.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de paquetes encontrados.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontraron paquetes con el nombre proporcionado.
 *       '500':
 *         description: Error del servidor al buscar paquetes por nombre.
 */

module.exports = app => {
    const paquetesController = require("../controllers/Paquetes.controller");

    const paquetesRouter = require("express").Router();
        // Rutas para Paquetes    
    const { requireAuth } = require("../middlewares/auth");
    

    // Rutas para Paquetes con Middleware de Autenticación
    paquetesRouter.post("/", requireAuth, paquetesController.create);
    paquetesRouter.get("/", requireAuth, paquetesController.findAll);
    paquetesRouter.get("/:id", requireAuth, paquetesController.findOne);
    paquetesRouter.put("/:id", requireAuth, paquetesController.update);
    paquetesRouter.delete("/:id", requireAuth, paquetesController.delete);
    // Ruta para buscar paquetes por nombre
    paquetesRouter.get("/nombre/:nombre", requireAuth, paquetesController.findByName);

    // Nueva ruta para buscar el grupo por ID de paquete
    paquetesRouter.get("/:id/grupo", requireAuth, paquetesController.findGroupByPackageId);

    

    app.use("/api/paquetes", paquetesRouter);
};
