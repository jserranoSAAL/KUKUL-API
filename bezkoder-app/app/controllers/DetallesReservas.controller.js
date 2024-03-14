const db = require('../models');
const DetallesReserva = db.DetallesReservas;

// Métodos de controlador para DetallesReservas
// Ejemplo: Obtener todos los detalles de reservas
exports.findAll = (req, res) => {
    DetallesReserva.findAll()
        .then(detallesReservas => {
            res.json(detallesReservas);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los detalles de reservas."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
