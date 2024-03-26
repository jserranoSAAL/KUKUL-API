const db = require('../models');
const Producto = db.Productos;

// Métodos de controlador para Productos
// Ejemplo: Obtener todos los productos
exports.findAll = (req, res) => {
    Producto.findAll()
        .then(productos => {
            res.json(productos);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los productos."
            });
        });
};

// Método para agregar un nuevo producto
exports.create = (req, res) => {
    // Validación de la solicitud
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El nombre del producto no puede estar vacío."
        });
        return;
    }

    // Crear un producto
    const producto = {
        Nombre: req.body.Nombre,
        Categoria: req.body.Categoria,
        NivelProducto: req.body.NivelProducto,
        Lugar: req.body.Lugar,
        Region: req.body.Region,
        ProveedorID: req.body.ProveedorID,
        DEF: req.body.DEF,
        GEN: req.body.GEN,
        Codigo: req.body.Status,
        Status: req.body.Status
    };

    // Guardar el producto en la base de datos
    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Algún error ocurrió al crear el producto."
            });
        });
};

// Agrega aquí otros métodos según sea necesario
