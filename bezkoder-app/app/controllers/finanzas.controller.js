const db = require("../models");
const Finanzas = db.Finanzas;

// Crear una nueva entrada de Finanzas
exports.create = (req, res) => {
    Finanzas.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Ocurrió un error al crear la entrada de Finanzas."
        }));
};

// Obtener todas las entradas de Finanzas
exports.findAll = (req, res) => {
    Finanzas.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Ocurrió un error al obtener las entradas de Finanzas."
        }));
};

// Obtener una entrada de Finanzas por ID de Agencia de Viaje
exports.findOne = (req, res) => {
    const id = req.params.id;
    Finanzas.findOne({ where: { AgenciasDeViajeID: id } })
        .then(data => {
            if (!data) res.status(404).send({ message: "No se encontró la entrada de Finanzas con el id " + id });
            else res.send(data);
        })
        .catch(err => res.status(500).send({
            message: "Error al obtener la entrada de Finanzas con id " + id
        }));
};

// Actualizar una entrada de Finanzas por ID de Agencia de Viaje
exports.update = (req, res) => {
    const id = req.params.id;
    Finanzas.update(req.body, { where: { AgenciasDeViajeID: id } })
        .then(num => {
            if (num == 1) res.send({ message: "La entrada de Finanzas fue actualizada exitosamente." });
            else res.send({ message: `No se pudo actualizar la entrada de Finanzas con id=${id}. Tal vez la entrada no fue encontrada o req.body está vacío.` });
        })
        .catch(err => res.status(500).send({
            message: "Error al actualizar la entrada de Finanzas con id " + id
        }));
};

// Eliminar una entrada de Finanzas por ID de Agencia de Viaje
exports.delete = (req, res) => {
    const id = req.params.id;
    Finanzas.destroy({ where: { AgenciasDeViajeID: id } })
        .then(num => {
            if (num == 1) res.send({ message: "La entrada de Finanzas fue eliminada exitosamente." });
            else res.send({ message: `No se pudo eliminar la entrada de Finanzas con id=${id}. Tal vez la entrada no fue encontrada.` });
        })
        .catch(err => res.status(500).send({
            message: "Error al eliminar la entrada de Finanzas con id " + id
        }));
};
