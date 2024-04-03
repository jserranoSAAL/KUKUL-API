const db = require('../models');
const Reserva = db.Reservas;

// Obtener todas las reservas
exports.findAll = (req, res) => {
    Reserva.findAll()
        .then(reservas => {
            res.json(reservas);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar las reservas."
            });
        });
};

// Crear y guardar una nueva reserva
exports.create = (req, res) => {
    // Validación de la solicitud
    if (!req.body.FechaInicio || !req.body.FechaFin || !req.body.UsuarioID) {
        res.status(400).send({
            message: "Los datos de la reserva no pueden estar vacíos!"
        });
        return;
    }

    // Crear una reserva
    const reserva = {
        UsuarioID: req.body.UsuarioID,
        FechaInicio: req.body.FechaInicio,
        FechaFin: req.body.FechaFin,
        Estado: req.body.Estado
    };

    // Guardar la reserva en la base de datos
    Reserva.create(reserva)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la reserva."
            });
        });
};

// Encontrar una reserva por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Reserva.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la Reserva con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la Reserva con ID=" + id
            });
        });
};

// Actualizar una reserva por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Reserva.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Reserva actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la Reserva con ID=${id}. Tal vez la Reserva no fue encontrada o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando la Reserva con ID=" + id
        });
    });
};

// Eliminar una reserva con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    Reserva.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Reserva eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la Reserva con ID=${id}. Tal vez la Reserva no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la Reserva con ID=" + id
        });
    });
};
