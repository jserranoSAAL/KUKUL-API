const db = require('../models');
const Proveedor = db.Proveedores;

// Métodos de controlador para Proveedores
// Ejemplo: Obtener todos los proveedores
exports.findAll = (req, res) => {
    Proveedor.findAll()
        .then(proveedores => {
            res.json(proveedores);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los proveedores."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
