/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Endpoints para manejar los productos registrados
 */

/**
 * @swagger
 * /api/productos:
 *   get:
 *     summary: Obtener todos los productos.
 *     description: Obtiene todos los productos almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los productos.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los productos.
 *   post:
 *     summary: Crear un nuevo producto.
 *     description: Crea un nuevo producto con los datos proporcionados.
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
 *                 description: Nombre del producto.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del producto.
 *               NivelProducto:
 *                 type: string
 *                 description: Nivel del producto.
 *               Lugar:
 *                 type: string
 *                 description: Lugar del producto.
 *               Region:
 *                 type: string
 *                 description: Región del producto.
 *               ProveedorID:
 *                 type: integer
 *                 description: ID del proveedor del producto.
 *               DEF:
 *                 type: string
 *                 description: DEF del producto.
 *               GEN:
 *                 type: string
 *                 description: GEN del producto.
 *               Codigo:
 *                 type: string
 *                 description: Código del producto.
 *               Status:
 *                 type: string
 *                 description: Estado del producto.
 *     responses:
 *       '200':
 *         description: Producto creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el producto.
 *
 * /api/productos/{id}:
 *   get:
 *     summary: Obtener un producto por su ID.
 *     description: Obtiene un producto específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Producto encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el producto con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el producto.
 *   put:
 *     summary: Actualizar un producto por su ID.
 *     description: Actualiza un producto específico utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar.
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
 *                 description: Nombre del producto.
 *               Categoria:
 *                 type: string
 *                 description: Categoría del producto.
 *               NivelProducto:
 *                 type: string
 *                 description: Nivel del producto.
 *               Lugar:
 *                 type: string
 *                 description: Lugar del producto.
 *               Region:
 *                 type: string
 *                 description: Región del producto.
 *               ProveedorID:
 *                 type: integer
 *                 description: ID del proveedor del producto.
 *               DEF:
 *                 type: string
 *                 description: DEF del producto.
 *               GEN:
 *                 type: string
 *                 description: GEN del producto.
 *               Codigo:
 *                 type: string
 *                 description: Código del producto.
 *               Status:
 *                 type: string
 *                 description: Estado del producto.
 *     responses:
 *       '200':
 *         description: Producto actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se pudo actualizar el producto con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el producto.
 *   delete:
 *     summary: Eliminar un producto por su ID.
 *     description: Elimina un producto específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Producto eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se pudo eliminar el producto con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el producto.
 */

module.exports = app => {
    const productosController = require("../controllers/Productos.controller");
    const { requireAuth } = require("../middlewares/auth");

    const productosRouter = require("express").Router();

    // Rutas para Productos con autenticación requerida
    productosRouter.get("/", requireAuth, productosController.findAll);
    productosRouter.get("/:id", requireAuth, productosController.findOne);
    productosRouter.post("/", requireAuth, productosController.create);
    productosRouter.put("/:id", requireAuth, productosController.update);
    productosRouter.delete("/:id", requireAuth, productosController.delete);

    app.use("/api/productos", productosRouter);
};
