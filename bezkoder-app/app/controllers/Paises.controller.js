const db = require('../models');
const Pais = db.Pais;

// Obtener todos los países
exports.findAll = (req, res) => {
    Pais.findAll()
        .then(paises => {
            res.json(paises);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los países."
            });
        });
};

// Crear y guardar un nuevo país
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.Nombre || !req.body.ISO) {
        res.status(400).send({
            message: "Todos los campos son requeridos!"
        });
        return;
    }

    // Crear un país
    const pais = {
        Nombre: req.body.Nombre,
        ISO: req.body.ISO
    };

    // Guardar el país en la base de datos
    Pais.create(pais)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear el país."
            });
        });
};

// Encontrar un país por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Pais.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el país con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el país con ID=" + id
            });
        });
};
