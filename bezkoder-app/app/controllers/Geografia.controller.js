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
    if (!req.body.nombre_es || !req.body.Latitude || !req.body.Longitude) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    const geografia = {
        nombre_es: req.body.nombre_es,
        nombre_en: req.body.nombre_en,
        nombre_fr: req.body.nombre_fr,
        desc_es: req.body.desc_es,
        desc_en: req.body.desc_en,
        desc_fr: req.body.desc_fr,
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

// Actualizar una ubicación geográfica por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Geografia.update(req.body, { where: { ID: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Geografía actualizada correctamente." });
            } else {
                res.send({
                    message: `No se puede actualizar la Geografía con ID=${id}. Tal vez la Geografía no fue encontrada o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando la Geografía con ID=" + id
            });
        });
};
