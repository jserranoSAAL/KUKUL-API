const db = require('../models');
const Geografia = db.Geografia;

// Obtener todas las ubicaciones geográficas
exports.findAll = (req, res) => {
    Geografia.findAll()
        .then(geografias => {
            res.json(geografias);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las ubicaciones geográficas."
            });
        });
};

// Crear y guardar una nueva ubicación geográfica
exports.create = (req, res) => {
    if (!req.body.Name || !req.body.Latitude || !req.body.Longitude) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    const geografia = {
        Name: req.body.Name,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude
    };

    Geografia.create(geografia)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la ubicación geográfica."
            });
        });
};

// Encontrar una ubicación geográfica por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Geografia.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la Geografía con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la Geografía con id=" + id
            });
        });
};
