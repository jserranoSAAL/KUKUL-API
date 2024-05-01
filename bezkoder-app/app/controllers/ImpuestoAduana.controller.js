const db = require('../models');
const ImpuestoAduana = db.ImpuestoAduana;

// Crear un nuevo impuesto de aduana
exports.create = (req, res) => {
    const { nombre, formula, calculo } = req.body;

    ImpuestoAduana.create({
        nombre: nombre,
        formula: formula,
        calculo: calculo
    })
    .then(impuesto => {
        res.status(201).send(impuesto);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el impuesto de aduana."
        });
    });
};

// Obtener todos los impuestos de aduana
exports.findAll = (req, res) => {
    ImpuestoAduana.findAll()
    .then(impuestos => {
        res.send(impuestos);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los impuestos de aduana."
        });
    });
};

// Obtener un impuesto de aduana por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    ImpuestoAduana.findByPk(id)
    .then(impuesto => {
        if (!impuesto) {
            res.status(404).send({
                message: `No se encontró el impuesto de aduana con el ID ${id}.`
            });
        } else {
            res.send(impuesto);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error al recuperar el impuesto de aduana con el ID ${id}.`
        });
    });
};

// Actualizar un impuesto de aduana por su ID
exports.update = (req, res) => {
    const id = req.params.id;
    const { nombre, formula, calculo } = req.body;

    ImpuestoAduana.update({
        nombre: nombre,
        formula: formula,
        calculo: calculo
    }, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "El impuesto de aduana fue actualizado exitosamente."
            });
        } else {
            res.status(404).send({
                message: `No se pudo actualizar el impuesto de aduana con el ID ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error al actualizar el impuesto de aduana con el ID ${id}.`
        });
    });
};

// Eliminar un impuesto de aduana por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    ImpuestoAduana.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "El impuesto de aduana fue eliminado exitosamente."
            });
        } else {
            res.status(404).send({
                message: `No se pudo eliminar el impuesto de aduana con el ID ${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error al eliminar el impuesto de aduana con el ID ${id}.`
        });
    });
};
