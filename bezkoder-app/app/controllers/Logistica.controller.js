const db = require("../models");
const Logistica = db.Logistica;

// Crear y guardar un nuevo registro de Logística
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Actividad) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un registro de Logística
    const logistica = {
        Fecha: req.body.Fecha,
        Inicio: req.body.Inicio,
        Fin: req.body.Fin,
        Subgrupo: req.body.Subgrupo,
        Actividad: req.body.Actividad,
        PersonasConfirmadas: req.body.PersonasConfirmadas,
        Servicio: req.body.Servicio,
        Proveedor: req.body.Proveedor,
        Reserva: req.body.Reserva,
        FechaReserva: req.body.FechaReserva,
        Pago: req.body.Pago,
        FechaPago: req.body.FechaPago,
        Duracion: req.body.Duracion,
        Cantidad: req.body.Cantidad,
        Categoria: req.body.Categoria,
        Responsable: req.body.Responsable
    };

    // Guardar Logística en la base de datos
    Logistica.create(logistica)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el registro de Logística."
            });
        });
};

// Recuperar todos los registros de Logística de la base de datos
exports.findAll = (req, res) => {
    Logistica.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los registros de Logística."
            });
        });
};

// Encontrar un único registro de Logística con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Logistica.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el registro de Logística con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el registro de Logística con id=" + id
            });
        });
};

// Actualizar un registro de Logística por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Logistica.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro de Logística actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el registro de Logística con id=${id}. Quizás el registro de Logística no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el registro de Logística con id=" + id
            });
        });
};

// Eliminar un registro de Logística con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Logistica.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro de Logística eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el registro de Logística con id=${id}. Quizás el registro de Logística no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el registro de Logística con id=" + id
            });
        });
};
