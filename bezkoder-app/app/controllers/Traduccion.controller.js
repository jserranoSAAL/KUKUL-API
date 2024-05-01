// traduccion.controller.js

const db = require('../models');
const Traduccion = db.Traduccion;

// Crear una nueva traducción
exports.create = (req, res) => {
    // Validar si los datos requeridos están presentes en la solicitud
    if (!req.body.codigo || !req.body.traduccion) {
        res.status(400).send({ message: "El código y la traducción son campos obligatorios." });
        return;
    }

    // Crear un objeto Traduccion
    const traduccion = {
        codigo: req.body.codigo,
        traduccion: req.body.traduccion
    };

    // Guardar la traducción en la base de datos
    Traduccion.create(traduccion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al crear la traducción."
            });
        });
};

// Obtener todas las traducciones
exports.findAll = (req, res) => {
    Traduccion.findAll()
        .then(traducciones => {
            res.send(traducciones);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las traducciones."
            });
        });
};

// Obtener una traducción por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Traduccion.findByPk(id)
        .then(traduccion => {
            if (!traduccion) {
                res.status(404).send({ message: "No se encontró la traducción con el ID especificado." });
                return;
            }
            res.send(traduccion);
        })
        .catch(err => {
            res.status(500).send({ message: "Error al recuperar la traducción con el ID especificado." });
        });
};

// Actualizar una traducción por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Traduccion.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "La traducción fue actualizada exitosamente." });
            } else {
                res.status(404).send({ message: "No se pudo actualizar la traducción con el ID especificado." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al actualizar la traducción con el ID especificado." });
        });
};

// Eliminar una traducción por ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Traduccion.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({ message: "La traducción fue eliminada exitosamente." });
            } else {
                res.status(404).send({ message: "No se pudo eliminar la traducción con el ID especificado." });
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al eliminar la traducción con el ID especificado." });
        });
};
