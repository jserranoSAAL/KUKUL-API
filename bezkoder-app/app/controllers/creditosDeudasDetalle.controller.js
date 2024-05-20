const db = require("../models");
const CreditosDeudasDetalle = db.CreditosDeudasDetalle;

// Crear una nueva entrada de CreditosDeudasDetalle
exports.create = (req, res) => {
    CreditosDeudasDetalle.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Ocurrió un error al crear la entrada de CreditosDeudasDetalle."
        }));
};

// Obtener todas las entradas de CreditosDeudasDetalle
exports.findAll = (req, res) => {
    CreditosDeudasDetalle.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Ocurrió un error al obtener las entradas de CreditosDeudasDetalle."
        }));
};

// Obtener una entrada de CreditosDeudasDetalle por ID de Agencia de Viaje
exports.findOne = (req, res) => {
    const id = req.params.id;
    CreditosDeudasDetalle.findOne({ where: { AgenciasDeViajeID: id } })
        .then(data => {
            if (!data) res.status(404).send({ message: "No se encontró la entrada de CreditosDeudasDetalle con el id " + id });
            else res.send(data);
        })
        .catch(err => res.status(500).send({
            message: "Error al obtener la entrada de CreditosDeudasDetalle con id " + id
        }));
};

// Actualizar una entrada de CreditosDeudasDetalle por ID de Agencia de Viaje
exports.update = (req, res) => {
    const id = req.params.id;
    CreditosDeudasDetalle.update(req.body, { where: { AgenciasDeViajeID: id } })
        .then(num => {
            if (num == 1) res.send({ message: "La entrada de CreditosDeudasDetalle fue actualizada exitosamente." });
            else res.send({ message: `No se pudo actualizar la entrada de CreditosDeudasDetalle con id=${id}. Tal vez la entrada no fue encontrada o req.body está vacío.` });
        })
        .catch(err => res.status(500).send({
            message: "Error al actualizar la entrada de CreditosDeudasDetalle con id " + id
        }));
};

// Eliminar una entrada de CreditosDeudasDetalle por ID de Agencia de Viaje
exports.delete = (req, res) => {
    const id = req.params.id;
    CreditosDeudasDetalle.destroy({ where: { AgenciasDeViajeID: id } })
        .then(num => {
            if (num == 1) res.send({ message: "La entrada de CreditosDeudasDetalle fue eliminada exitosamente." });
            else res.send({ message: `No se pudo eliminar la entrada de CreditosDeudasDetalle con id=${id}. Tal vez la entrada no fue encontrada.` });
        })
        .catch(err => res.status(500).send({
            message: "Error al eliminar la entrada de CreditosDeudasDetalle con id " + id
        }));
};
