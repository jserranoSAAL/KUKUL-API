const db = require("../models");
const EstadoPago = db.EstadoPago;

// Crear y Guardar un nuevo Estado de Pago
exports.create = async (req, res) => {
    try {
        const data = await EstadoPago.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Estado de Pago."
        });
    }
};

// Recuperar todos los Estados de Pago
exports.findAll = async (req, res) => {
    try {
        const data = await EstadoPago.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Estados de Pago."
        });
    }
};

// Encontrar un Estado de Pago por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await EstadoPago.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el Estado de Pago con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Estado de Pago con id=" + id
        });
    }
};

// Actualizar un Estado de Pago por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await EstadoPago.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Estado de Pago actualizado exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar el Estado de Pago con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando el Estado de Pago con id=" + id
        });
    }
};

// Eliminar un Estado de Pago por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await EstadoPago.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Estado de Pago eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Estado de Pago con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Estado de Pago con id=" + id
        });
    }
};
