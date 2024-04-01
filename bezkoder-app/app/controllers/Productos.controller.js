const db = require('../models');
const Producto = db.Productos;

// Métodos de controlador para Productos

// Obtener todos los productos
exports.findAll = (req, res) => {
    Producto.findAll()
        .then(productos => {
            res.json(productos);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los productos."
            });
        });
};

// Crear un nuevo producto
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
        Codigo: req.body.Codigo,
        Status: req.body.Status
    };

    // Guardar el producto en la base de datos
    Producto.create(producto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear el producto."
            });
        });
};

// Encontrar un producto por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Producto.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el producto con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el producto con ID=" + id
            });
        });
};

// Actualizar un producto por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Producto.update(req.body, { where: { ID: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Producto actualizado correctamente." });
            } else {
                res.send({
                    message: `No se puede actualizar el producto con ID=${id}. Tal vez el producto no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el producto con ID=" + id
            });
        });
};

// Eliminar un producto con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    Producto.destroy({ where: { ID: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Producto eliminado correctamente." });
            } else {
                res.send({
                    message: `No se pudo eliminar el producto con ID=${id}. Tal vez el producto no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el producto con ID=" + id
            });
        });
};
