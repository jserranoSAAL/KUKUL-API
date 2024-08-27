const db = require('../models');
const Coverage = db.Coverage;

// Obtener todas las portadas
exports.findAll = (req, res) => {
    Coverage.findAll()
        .then(coverages => {
            res.json(coverages);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las portadas."
            });
        });
};

// Obtener la portada que tenga el default en true
exports.findDefault = (req, res) => {
    Coverage.findOne({
        where: { default_status: true }
    })
    .then(coverage => {
        if (coverage) {
            res.json(coverage);
        } else {
            res.status(404).send({
                message: "No se encontró una portada por defecto."
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error al recuperar la portada por defecto."
        });
    });
};

// Subir una nueva portada
exports.create = (req, res) => {
    // Validación de la solicitud
    if (!req.body.key || !req.body.url) {
        res.status(400).send({
            message: "Los datos de la portada no pueden estar vacíos!"
        });
        return;
    }

    // Crear una nueva portada
    const coverage = {
        key: req.body.key,
        url: req.body.url,
        default_status: req.body.default_status || false
    };

    // Guardar la portada en la base de datos
    Coverage.create(coverage)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la portada."
            });
        });
};

// Eliminar una portada con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    Coverage.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Portada eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la portada con ID=${id}. Tal vez la portada no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la portada con ID=" + id
        });
    });
};

exports.setDefault = (req, res) => {
    const id = req.params.id;

    // Establecer default_status en false para todas las portadas
    Coverage.update({ default_status: false }, { where: {} })
        .then(() => {
            // Establecer default_status en true para la portada con el ID especificado
            return Coverage.update({ default_status: true }, { where: { id: id } });
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La portada se ha establecido como predeterminada correctamente."
                });
            } else {
                res.status(404).send({
                    message: `No se pudo establecer la portada con ID=${id} como predeterminada.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ocurrió un error al intentar establecer la portada como predeterminada."
            });
        });
};