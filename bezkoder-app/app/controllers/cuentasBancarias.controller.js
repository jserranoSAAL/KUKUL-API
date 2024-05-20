const db = require("../models");
const CuentasBancarias = db.CuentasBancarias;

// Crear una nueva entrada de CuentasBancarias
exports.create = (req, res) => {
    CuentasBancarias.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Ocurrió un error al crear la entrada de CuentasBancarias."
        }));
};

// Obtener todas las entradas de CuentasBancarias
exports.findAll = (req, res) => {
    CuentasBancarias.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message || "Ocurrió un error al obtener las entradas de CuentasBancarias."
        }));
};

// Obtener una entrada de CuentasBancarias por ID de Agencia de Viaje
exports.findOne = (req, res) => {
    const id = req.params.id;
    CuentasBancarias.findOne({ where: { AgenciasDeViajeID: id } })
        .then(data => {
            if (!data) res.status(404).send({ message: "No se encontró la entrada de CuentasBancarias con el id " + id });
            else res.send(data);
        })
        .catch(err => res.status(500).send({
            message: "Error al obtener la entrada de CuentasBancarias con id " + id
        }));
};

// Actualizar una entrada de CuentasBancarias por ID de Agencia de Viaje
exports.update = (req, res) => {
    const id = req.params.id;
    CuentasBancarias.update(req.body, { where: { AgenciasDeViajeID: id } })
        .then(num => {
            if (num == 1) res.send({ message: "La entrada de CuentasBancarias fue actualizada exitosamente." });
            else res.send({ message: `No se pudo actualizar la entrada de CuentasBancarias con id=${id}. Tal vez la entrada no fue encontrada o req.body está vacío.` });
        })
        .catch(err => res.status(500).send({
            message: "Error al actualizar la entrada de CuentasBancarias con id " + id
        }));
};

// Eliminar una entrada de CuentasBancarias por ID de Agencia de Viaje
exports.delete = (req, res) => {
    const id = req.params.id;
    CuentasBancarias.destroy({ where: { AgenciasDeViajeID: id } })
        .then(num => {
            if (num == 1) res.send({ message: "La entrada de CuentasBancarias fue eliminada exitosamente." });
            else res.send({ message: `No se pudo eliminar la entrada de CuentasBancarias con id=${id}. Tal vez la entrada no fue encontrada.` });
        })
        .catch(err => res.status(500).send({
            message: "Error al eliminar la entrada de CuentasBancarias con id " + id
        }));
};
