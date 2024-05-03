// controllers/costos.controller.js
const db = require('../models');
const Costos = db.Costos;

exports.create = async (req, res) => {
    // Inserta un nuevo costo
    try {
        const costo = await Costos.create(req.body);
        res.send(costo);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Cost."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const costos = await Costos.findAll();
        res.send(costos);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving costs."
        });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const costo = await Costos.findByPk(id);
        if (costo) {
            res.send(costo);
        } else {
            res.status(404).send({
                message: `Cost not found with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Cost with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const [updated] = await Costos.update(req.body, {
            where: { ID: id }
        });
        if (updated) {
            const updatedCost = await Costos.findByPk(id);
            res.send(updatedCost);
        } else {
            res.status(404).send({
                message: `Cannot update Cost with id=${id}. Maybe Cost was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Cost with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Costos.destroy({
            where: { ID: id }
        });
        if (deleted) {
            res.send({ message: "Cost was deleted successfully!" });
        } else {
            res.status(404).send({
                message: `Cannot delete Cost with id=${id}. Maybe Cost was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Cost with id=" + id
        });
    }
};
