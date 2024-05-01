// controllers/metodosDePago.controller.js

const db = require('../models');
const MetodosDePago = db.MetodosDePago;

// Crear un nuevo método de pago
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.nombre || !req.body.comision || req.body.default === undefined) {
        res.status(400).send({
            message: "El contenido no puede estar vacío!"
        });
        return;
    }

    // Crear un método de pago
    const metodoDePago = {
        nombre: req.body.nombre,
        comision: req.body.comision,
        default: req.body.default
    };

    // Guardar el método de pago en la base de datos
    MetodosDePago.create(metodoDePago)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al crear el Método de Pago."
            });
        });
};

// Obtener todos los métodos de pago
exports.findAll = (req, res) => {
    MetodosDePago.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió algún error al recuperar los Métodos de Pago."
            });
        });
};

// Obtener un método de pago por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    MetodosDePago.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Método de Pago con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Método de Pago con id=" + id
            });
        });
};

// Actualizar un método de pago por su ID
exports.update = (req, res) => {
    const id = req.params.id;

    MetodosDePago.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Método de Pago fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Método de Pago con id=${id}. Tal vez el Método de Pago no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Método de Pago con id=" + id
            });
        });
};

// Eliminar un método de pago por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    MetodosDePago.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Método de Pago fue eliminado exitosamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Método de Pago con id=${id}. Tal vez el Método de Pago no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Método de Pago con id=" + id
            });
        });
};
