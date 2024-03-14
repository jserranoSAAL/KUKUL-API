const db = require('../models');
const Geografia = db.Geografia;

// Métodos de controlador para Geografia
// Ejemplo: Obtener todas las ubicaciones geográficas
exports.findAll = (req, res) => {
    Geografia.findAll()
        .then(geografias => {
            res.json(geografias);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar las ubicaciones geográficas."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
