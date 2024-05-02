/**
 * @swagger
 * tags:
 *   name: S3
 *   description: Endpoints para manejar operaciones con Amazon S3
 */

/**
 * @swagger
 * /api/s3/upload-images:
 *   post:
 *     summary: Subir imágenes a Amazon S3.
 *     description: Sube imágenes en formato base64 a Amazon S3.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     base64String:
 *                       type: string
 *                       description: Cadena base64 de la imagen.
 *                     filename:
 *                       type: string
 *                       description: Nombre del archivo de la imagen.
 *     responses:
 *       '200':
 *         description: Imágenes cargadas correctamente en Amazon S3.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al cargar las imágenes en S3.
 */


module.exports = app => {
    const s3Controller = require("../controllers/s3.controller");    
    const s3Router = require("express").Router();
        // Rutas para Paquetes    
    const { requireAuth } = require("../middlewares/auth");

    

    // Rutas para Paquetes con Middleware de Autenticación
    s3Router.post('/upload-images', requireAuth, s3Controller.uploadImages);        

    app.use("/api/s3", s3Router);
};
