const db = require('../models');
const Usuario = db.Usuarios;

// Métodos de controlador para Usuarios
// Ejemplo: Obtener todos los usuarios
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los usuarios."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
