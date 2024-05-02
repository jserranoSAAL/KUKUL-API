/**
 * @swagger
 * tags:
 *   name: Imágenes de Lugar
 *   description: Endpoints para manejar las imágenes de lugar
 */

/**
 * @swagger
 * /api/imagenes-lugar:
 *   post:
 *     summary: Crear una nueva imagen de lugar
 *     description: Crea una nueva imagen de lugar con la información proporcionada en el cuerpo de la solicitud.
 *     tags: [Imágenes de Lugar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               LugarID:
 *                 type: integer
 *               ImagenURL:
 *                 type: string
 *             example:
 *               LugarID: 1
 *               ImagenURL: http://ejemplo.com/imagen.jpg
 *     responses:
 *       '200':
 *         description: Imagen de lugar creada exitosamente
 *       '400':
 *         description: Solicitud incorrecta, LugarID e ImagenURL son campos requeridos
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/imagenes-lugar:
 *   get:
 *     summary: Obtener todas las imágenes de lugar
 *     description: Retorna una lista de todas las imágenes de lugar.
 *     tags: [Imágenes de Lugar]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/imagenes-lugar/{id}:
 *   get:
 *     summary: Obtener una imagen de lugar por ID
 *     description: Retorna una imagen de lugar basada en el ID proporcionado.
 *     tags: [Imágenes de Lugar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la imagen de lugar a buscar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Imagen de lugar encontrada
 *       '404':
 *         description: Imagen de lugar no encontrada
 *       '500':
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /api/imagenes-lugar/{id}:
 *   delete:
 *     summary: Eliminar una imagen de lugar por ID
 *     description: Elimina una imagen de lugar basada en el ID proporcionado.
 *     tags: [Imágenes de Lugar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la imagen de lugar a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Imagen de lugar eliminada correctamente
 *       '404':
 *         description: Imagen de lugar no encontrada
 *       '500':
 *         description: Error interno del servidor
 */


module.exports = app => {
    const imagenesLugarController = require("../controllers/ImagenesLugar.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear una nueva imagen de lugar
    router.post("/", requireAuth, imagenesLugarController.create);

    // Obtener todas las imágenes de lugar
    router.get("/", requireAuth, imagenesLugarController.findAll);

    // Obtener una imagen de lugar por ID
    router.get("/:id", requireAuth, imagenesLugarController.findOne);

    // Eliminar una imagen de lugar por ID
    router.delete("/:id", requireAuth, imagenesLugarController.delete);

    app.use("/api/imagenes-lugar", router);
};
