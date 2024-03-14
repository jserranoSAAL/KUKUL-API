const db = require('../models');
const Reserva = db.Reservas;

// Métodos de controlador para Reservas
// Ejemplo: Obtener todas las reservas
exports.findAll = (req, res) => {
    Reserva.findAll()
        .then(reservas => {
            res.json(reservas);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar las reservas."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
