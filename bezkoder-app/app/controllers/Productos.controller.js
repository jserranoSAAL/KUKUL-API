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
// Agrega aquí otros métodos según sea necesario
