const db = require("../models");
const Tarifario = db.Tarifario;

// Crear y guardar un nuevo Tarifario
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Tarifario) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Tarifario
    const tarifario = {
        Tarifario: req.body.Tarifario,
        Agencia: req.body.Agencia,
        NumeroDeProductos: req.body.NumeroDeProductos,
        Inicio: req.body.Inicio,
        Fin: req.body.Fin,
        Codigo: req.body.Codigo,
        SoloLectura: req.body.SoloLectura,
        UltimaActualizacion: req.body.UltimaActualizacion
    };

    // Guardar Tarifario en la base de datos
    Tarifario.create(tarifario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Tarifario."
            });
        });
};

// Recuperar todos los Tarifarios de la base de datos
exports.findAll = (req, res) => {
    Tarifario.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los tarifarios."
            });
        });
};

// Encontrar un único Tarifario con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Tarifario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Tarifario con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Tarifario con id=" + id
            });
        });
};

// Actualizar un Tarifario por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Tarifario.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tarifario actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Tarifario con id=${id}. Quizás el Tarifario no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Tarifario con id=" + id
            });
        });
};

// Eliminar un Tarifario con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Tarifario.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tarifario eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Tarifario con id=${id}. Quizás el Tarifario no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Tarifario con id=" + id
            });
        });
};
