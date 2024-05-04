// controllers/venta.controller.js
const db = require('../models');
const Venta = db.Venta;

exports.create = async (req, res) => {
    if (!req.body.ClienteID || !req.body.FechaVenta || !req.body.Total) {
        res.status(400).send({
            message: "Client ID, sale date and total cannot be empty!"
        });
        return;
    }
    try {
        const venta = await Venta.create(req.body);
        res.send(venta);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sale."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const ventas = await Venta.findAll();
        res.send(ventas);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sales."
        });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const venta = await Venta.findByPk(id);
        if (venta) {
            res.send(venta);
        } else {
            res.status(404).send({
                message: `Sale not found with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Sale with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const [updated] = await Venta.update(req.body, {
            where: { ID: id }
        });
        if (updated) {
            const updatedSale = await Venta.findByPk(id);
            res.send(updatedSale);
        } else {
            res.status(404).send({
                message: `Cannot update Sale with id=${id}. Maybe Sale was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Sale with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Venta.destroy({
            where: { ID: id }
        });
        if (deleted) {
            res.send({ message: "Sale was deleted successfully!" });
        } else {
            res.status(404).send({
                message: `Cannot delete Sale with id=${id}. Maybe Sale was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Sale with id=" + id
        });
    }
};
