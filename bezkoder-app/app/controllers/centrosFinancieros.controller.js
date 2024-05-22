const db = require("../models");
const CentroFinanciero = db.CentroFinanciero;
const { Op } = require("sequelize");


// Crear y Guardar un nuevo Centro Financiero
exports.create = async (req, res) => {
    try {
        const data = await CentroFinanciero.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Centro Financiero."
        });
    }
};

// Recuperar todos los Centros Financieros
exports.findAll = async (req, res) => {
    try {
        const data = await CentroFinanciero.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Centros Financieros."
        });
    }
};

// Encontrar un Centro Financiero por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await CentroFinanciero.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el Centro Financiero con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Centro Financiero con id=" + id
        });
    }
};

// Actualizar un Centro Financiero por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await CentroFinanciero.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Centro Financiero actualizado exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar el Centro Financiero con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando el Centro Financiero con id=" + id
        });
    }
};

// Eliminar un Centro Financiero por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await CentroFinanciero.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Centro Financiero eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Centro Financiero con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Centro Financiero con id=" + id
        });
    }
};


// Buscar un Centro Financiero por nombre usando LIKE
exports.findByName = async (req, res) => {
    const nombre = req.params.nombre;
    try {
        const data = await CentroFinanciero.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre}%`
                }
            }
        });
        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró ningún Centro Financiero que coincida con nombre=${nombre}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Centro Financiero con nombre=" + nombre+ " error: "+err
        });
    }
};
