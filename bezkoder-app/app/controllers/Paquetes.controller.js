const db = require('../models');
const Paquete = db.Paquetes;

// Métodos de controlador para Paquetes
// Ejemplo: Obtener todos los paquetes
exports.findAll = (req, res) => {
    Paquete.findAll()
        .then(paquetes => {
            res.json(paquetes);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los paquetes."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
