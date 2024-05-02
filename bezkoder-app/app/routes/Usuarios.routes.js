/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para manejar usuarios
 */

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crear un nuevo usuario.
 *     description: Crea un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario.
 *               name_user:
 *                 type: string
 *                 description: Nombre del usuario.
 *               last_name_user:
 *                 type: string
 *                 description: Apellido del usuario.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del usuario.
 *               password_hash:
 *                 type: string
 *                 description: Contraseña hasheada del usuario.
 *               rol:
 *                 type: string
 *                 description: Rol del usuario.
 *     responses:
 *       '200':
 *         description: Usuario creado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '500':
 *         description: Error del servidor al crear el usuario.
 *   get:
 *     summary: Obtener todos los usuarios.
 *     description: Obtiene todos los usuarios.
 *     responses:
 *       '200':
 *         description: Usuarios obtenidos exitosamente.
 *       '500':
 *         description: Error del servidor al recuperar los usuarios.
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID.
 *     description: Obtiene un usuario por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuario obtenido exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '404':
 *         description: El usuario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al obtener el usuario.
 *   put:
 *     summary: Actualizar un usuario por ID.
 *     description: Actualiza un usuario por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nuevo nombre de usuario.
 *               name_user:
 *                 type: string
 *                 description: Nuevo nombre del usuario.
 *               last_name_user:
 *                 type: string
 *                 description: Nuevo apellido del usuario.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Nuevo correo electrónico del usuario.
 *               password_hash:
 *                 type: string
 *                 description: Nueva contraseña hasheada del usuario.
 *               rol:
 *                 type: string
 *                 description: Nuevo rol del usuario.
 *     responses:
 *       '200':
 *         description: Usuario actualizado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '404':
 *         description: El usuario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al actualizar el usuario.
 *   delete:
 *     summary: Eliminar un usuario por ID.
 *     description: Elimina un usuario por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuario eliminado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '404':
 *         description: El usuario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al eliminar el usuario.
 */

/**
 * @swagger
 * /api/usuarios/role/{id}:
 *   put:
 *     summary: Actualizar el rol de un usuario por ID.
 *     description: Actualiza el rol de un usuario por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar el rol.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Rol:
 *                 type: string
 *                 description: Nuevo rol del usuario.
 *     responses:
 *       '200':
 *         description: Rol del usuario actualizado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '404':
 *         description: El usuario con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al actualizar el rol del usuario.
 * /api/usuarios/buscar/nombre/{name_user}:
 *   get:
 *     summary: Buscar usuarios por nombre.
 *     description: Busca usuarios cuyo nombre coincide parcialmente con el proporcionado.
 *     parameters:
 *       - in: path
 *         name: name_user
 *         required: true
 *         description: Nombre del usuario a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Usuarios encontrados exitosamente.
 *       '404':
 *         description: No se encontraron usuarios con el nombre especificado.
 *       '500':
 *         description: Error del servidor al buscar usuarios por nombre.
 */


module.exports = app => {
    const usuariosController = require("../controllers/Usuarios.controller");

    const usuariosRouter = require("express").Router();
    const { requireAuth } = require("../middlewares/auth");

    // Rutas para Usuarios
    usuariosRouter.post("/", requireAuth, usuariosController.create);
    usuariosRouter.get("/", requireAuth, usuariosController.findAll);
    usuariosRouter.get("/:id", requireAuth, usuariosController.findOne);
    usuariosRouter.put("/:id", requireAuth, usuariosController.update);
    usuariosRouter.delete("/:id", requireAuth, usuariosController.delete);
    usuariosRouter.put("/role/:id", requireAuth, usuariosController.updateRole);  // Nueva ruta para actualizar roles
    // Buscar Usuarios por nombre con LIKE
    usuariosRouter.get("/buscar/nombre/:name_user", requireAuth, usuariosController.findByName);



    app.use("/api/usuarios", usuariosRouter);
};
