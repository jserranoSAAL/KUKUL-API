/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints para autenticación de usuarios
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Inicia sesión para obtener un token de autenticación.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Sesión iniciada correctamente
 *       '401':
 *         description: Unauthorized, email o contraseña incorrectos
 *       '404':
 *         description: Usuario no encontrado
 *       '500':
 *         description: Error interno del servidor
 */


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar usuario
 *     description: Registra un nuevo usuario y devuelve un token de autenticación.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               name_user:
 *                 type: string
 *               last_name_user:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               rol:
 *                 type: string
 *               created_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Usuario registrado correctamente
 *       '500':
 *         description: Error interno del servidor
 */



module.exports = app => {
    const authenticationController = require("../controllers/autenticacion.controller");
    
    const authRouter = require("express").Router();

    authRouter.post("/login", authenticationController.login);
    authRouter.post("/register", authenticationController.register);
    authRouter.get("/profile", authenticationController.getProfile);

    app.use("/api/auth", authRouter);
};
