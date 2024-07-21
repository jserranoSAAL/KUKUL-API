/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Endpoints para manejar los proveedores
 *
 * /api/proveedores:
 *   get:
 *     summary: Obtener todos los proveedores.
 *     description: Obtiene todos los proveedores almacenados en la base de datos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de todos los proveedores.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar los proveedores.
 *   post:
 *     summary: Crear un nuevo proveedor.
 *     description: Crea un nuevo proveedor con los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Proveedor:
 *                 type: string
 *                 description: Nombre del proveedor.
 *               CategoriaProveedor:
 *                 type: string
 *                 description: Categoría del proveedor.
 *               Ciudad:
 *                 type: string
 *                 description: Ciudad del proveedor.
 *               Contacto:
 *                 type: string
 *                 description: Persona de contacto del proveedor.
 *               Telefono:
 *                 type: string
 *                 description: Número de teléfono del proveedor.
 *               Email:
 *                 type: string
 *                 description: Correo electrónico del proveedor.
 *               Calificacion:
 *                 type: integer
 *                 description: Calificación del proveedor.
 *               formula:
 *                 type: string
 *                 description: Fórmula del proveedor.
 *               calculo:
 *                 type: string
 *                 description: Cálculo del proveedor.
 *               creador:
 *                 type: string
 *                 description: Creador del proveedor.
 *               host:
 *                 type: string
 *                 description: Host del proveedor.
 *               sitio_web:
 *                 type: string
 *                 description: Sitio web del proveedor.
 *               codigo:
 *                 type: string
 *                 description: Código del proveedor.
 *               licencia:
 *                 type: string
 *                 description: Licencia del proveedor.
 *               supplier_check_in:
 *                 type: string
 *                 description: Check-in del proveedor.
 *               supplier_check_out:
 *                 type: string
 *                 description: Check-out del proveedor.
 *               capacidad_proveedor:
 *                 type: string
 *                 description: Capacidad del proveedor.
 *               calle:
 *                 type: string
 *                 description: Calle del proveedor.
 *               colonia:
 *                 type: string
 *                 description: Colonia del proveedor.
 *               codigo_postal:
 *                 type: string
 *                 description: Código postal del proveedor.
 *               estado:
 *                 type: string
 *                 description: Estado del proveedor.
 *               pais:
 *                 type: string
 *                 description: País del proveedor.
 *               lenguaje_comunicacion:
 *                 type: string
 *                 description: Lenguaje de comunicación del proveedor.
 *               modo_comunicacion:
 *                 type: string
 *                 description: Modo de comunicación del proveedor.
 *               centro_efectivo:
 *                 type: string
 *                 description: Centro de efectivo del proveedor.
 *               divisa_centro_efectivo:
 *                 type: string
 *                 description: Divisa del centro de efectivo del proveedor.
 *               metodo_pago_defecto:
 *                 type: string
 *                 description: Método de pago por defecto del proveedor.
 *     responses:
 *       '200':
 *         description: Proveedor creado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '500':
 *         description: Error del servidor al crear el proveedor.
 *
 * /api/proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por su ID.
 *     description: Obtiene un proveedor específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Proveedor encontrado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el proveedor con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al recuperar el proveedor.
 *   put:
 *     summary: Actualizar un proveedor por su ID.
 *     description: Actualiza un proveedor específico utilizando su ID y los datos proporcionados.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Proveedor:
 *                 type: string
 *                 description: Nombre del proveedor.
 *               CategoriaProveedor:
 *                 type: string
 *                 description: Categoría del proveedor.
 *               Ciudad:
 *                 type: string
 *                 description: Ciudad del proveedor.
 *               Contacto:
 *                 type: string
 *                 description: Persona de contacto del proveedor.
 *               Telefono:
 *                 type: string
 *                 description: Número de teléfono del proveedor.
 *               Email:
 *                 type: string
 *                 description: Correo electrónico del proveedor.
 *               Calificacion:
 *                 type: integer
 *                 description: Calificación del proveedor.
 *               formula:
 *                 type: string
 *                 description: Fórmula del proveedor.
 *               calculo:
 *                 type: string
 *                 description: Cálculo del proveedor.
 *               creador:
 *                 type: string
 *                 description: Creador del proveedor.
 *               host:
 *                 type: string
 *                 description: Host del proveedor.
 *               sitio_web:
 *                 type: string
 *                 description: Sitio web del proveedor.
 *               codigo:
 *                 type: string
 *                 description: Código del proveedor.
 *               licencia:
 *                 type: string
 *                 description: Licencia del proveedor.
 *               supplier_check_in:
 *                 type: string
 *                 description: Check-in del proveedor.
 *               supplier_check_out:
 *                 type: string
 *                 description: Check-out del proveedor.
 *               capacidad_proveedor:
 *                 type: string
 *                 description: Capacidad del proveedor.
 *               calle:
 *                 type: string
 *                 description: Calle del proveedor.
 *               colonia:
 *                 type: string
 *                 description: Colonia del proveedor.
 *               codigo_postal:
 *                 type: string
 *                 description: Código postal del proveedor.
 *               estado:
 *                 type: string
 *                 description: Estado del proveedor.
 *               pais:
 *                 type: string
 *                 description: País del proveedor.
 *               lenguaje_comunicacion:
 *                 type: string
 *                 description: Lenguaje de comunicación del proveedor.
 *               modo_comunicacion:
 *                 type: string
 *                 description: Modo de comunicación del proveedor.
 *               centro_efectivo:
 *                 type: string
 *                 description: Centro de efectivo del proveedor.
 *               divisa_centro_efectivo:
 *                 type: string
 *                 description: Divisa del centro de efectivo del proveedor.
 *               metodo_pago_defecto:
 *                 type: string
 *                 description: Método de pago por defecto del proveedor.
 *     responses:
 *       '200':
 *         description: Proveedor actualizado correctamente.
 *       '400':
 *         description: Error en la solicitud del cliente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el proveedor con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al actualizar el proveedor.
 *   delete:
 *     summary: Eliminar un proveedor por su ID.
 *     description: Elimina un proveedor específico utilizando su ID.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Proveedor eliminado correctamente.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontró el proveedor con el ID proporcionado.
 *       '500':
 *         description: Error del servidor al eliminar el proveedor.
 *
 * /api/proveedores/buscar/{nombre}:
 *   get:
 *     summary: Buscar proveedores por nombre.
 *     description: Busca proveedores cuyo nombre coincida parcialmente con el proporcionado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nombre
 *         required: true
 *         description: Nombre o parte del nombre del proveedor a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de proveedores que coinciden con el nombre proporcionado.
 *       '401':
 *         description: No autorizado, token no válido o no proporcionado.
 *       '404':
 *         description: No se encontraron proveedores con el nombre proporcionado.
 *       '500':
 *         description: Error del servidor al buscar los proveedores por nombre.
 */

module.exports = app => {
    const proveedoresController = require("../controllers/Proveedores.controller");
    const { requireAuth } = require("../middlewares/auth");

    const proveedoresRouter = require("express").Router();

    // Rutas para Proveedores    
    proveedoresRouter.get("/", requireAuth, proveedoresController.findAll);
    proveedoresRouter.get("/:id", requireAuth, proveedoresController.findOne); // Obtener un proveedor por ID
    proveedoresRouter.post("/", requireAuth, proveedoresController.create); // Crear un nuevo proveedor
    proveedoresRouter.put("/:id", requireAuth, proveedoresController.update); // Actualizar un proveedor
    proveedoresRouter.delete("/:id", requireAuth, proveedoresController.delete); // Eliminar un proveedor
    // Buscar Proveedores por nombre con LIKE
    proveedoresRouter.get("/buscar/:proveedor", requireAuth, proveedoresController.findByNombre);

    proveedoresRouter.get("/currency/:id", requireAuth, proveedoresController.findCurrencyProvider); // Obtener la divisa de un proveedor

    app.use("/api/proveedores", proveedoresRouter);
};
