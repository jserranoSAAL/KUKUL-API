const db = require('../models');
const AgenciaDeViaje = db.AgenciasDeViaje;

// Métodos de controlador para AgenciasDeViaje
// Ejemplo: Obtener todas las agencias de viaje
exports.findAll = (req, res) => {
    AgenciaDeViaje.findAll()
        .then(agenciasDeViaje => {
            res.json(agenciasDeViaje);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar las agencias de viaje."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
