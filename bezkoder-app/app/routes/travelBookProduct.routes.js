/**
 * @swagger
 * tags:
 *   name: Libro de Viaje Asociado a Producto
 *   description: Endpoints para manejar libros de viaje asociados a productos
 */

/**
 * @swagger
 * /api/travel-book-products:
 *   post:
 *     summary: Crear un nuevo libro de viaje asociado a un producto.
 *     description: Crea un nuevo libro de viaje asociado a un producto.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TECH:
 *                 type: string
 *                 description: Nombre técnico del libro de viaje.
 *               EN:
 *                 type: string
 *                 description: Nombre en inglés del libro de viaje.
 *               ES:
 *                 type: string
 *                 description: Nombre en español del libro de viaje.
 *               FR:
 *                 type: string
 *                 description: Nombre en francés del libro de viaje.
 *               ProductoID:
 *                 type: integer
 *                 description: ID del producto asociado al libro de viaje.
 *     responses:
 *       '200':
 *         description: Libro de viaje asociado a un producto creado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el libro de viaje asociado a un producto.
 *   get:
 *     summary: Obtener todos los libros de viaje asociados a productos.
 *     description: Obtiene todos los libros de viaje asociados a productos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Libros de viaje asociados a productos obtenidos exitosamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los libros de viaje asociados a productos.
 */

/**
 * @swagger
 * /api/travel-book-products/{id}:
 *   get:
 *     summary: Obtener un libro de viaje asociado a un producto por ID.
 *     description: Obtiene un libro de viaje asociado a un producto por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro de viaje asociado a un producto a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Libro de viaje asociado a un producto obtenido exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El libro de viaje asociado a un producto con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al obtener el libro de viaje asociado a un producto.
 *   put:
 *     summary: Actualizar un libro de viaje asociado a un producto por ID.
 *     description: Actualiza un libro de viaje asociado a un producto por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro de viaje asociado a un producto a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               TECH:
 *                 type: string
 *                 description: Nombre técnico del libro de viaje.
 *               EN:
 *                 type: string
 *                 description: Nombre en inglés del libro de viaje.
 *               ES:
 *                 type: string
 *                 description: Nombre en español del libro de viaje.
 *               FR:
 *                 type: string
 *                 description: Nombre en francés del libro de viaje.
 *     responses:
 *       '200':
 *         description: Libro de viaje asociado a un producto actualizado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El libro de viaje asociado a un producto con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al actualizar el libro de viaje asociado a un producto.
 *   delete:
 *     summary: Eliminar un libro de viaje asociado a un producto por ID.
 *     description: Elimina un libro de viaje asociado a un producto por su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del libro de viaje asociado a un producto a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Libro de viaje asociado a un producto eliminado exitosamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: El libro de viaje asociado a un producto con el ID especificado no fue encontrado.
 *       '500':
 *         description: Error del servidor al eliminar el libro de viaje asociado a un producto.
 */


// travelBookProduct.routes.js

module.exports = app => {
    const travelBookProductController = require("../controllers/travelBookProduct.controller");
    const { requireAuth } = require("../middlewares/auth");

    const router = require("express").Router();

    // Crear un nuevo libro de viaje asociado a un producto
    router.post("/", requireAuth, travelBookProductController.create);

    // Obtener todos los libros de viaje asociados a productos
    router.get("/", requireAuth, travelBookProductController.findAll);

    // Obtener un libro de viaje asociado a un producto por ID
    router.get("/:id", requireAuth, travelBookProductController.findOne);

    // Actualizar un libro de viaje asociado a un producto por ID
    router.put("/:id", requireAuth, travelBookProductController.update);

    // Eliminar un libro de viaje asociado a un producto por ID
    router.delete("/:id", requireAuth, travelBookProductController.delete);

    app.use("/api/travel-book-products", router);
};
