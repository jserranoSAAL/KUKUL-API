// controllers/detalleVenta.controller.js
const db = require('../models');
const DetalleVenta = db.DetalleVenta;

exports.create = async (req, res) => {
    try {
        const detalle = await DetalleVenta.create(req.body);
        res.send(detalle);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sale Detail."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const detalles = await DetalleVenta.findAll();
        res.send(detalles);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sale details."
        });
    }
};

exports.findOne = async (req, res) => {
    const { VentaID, ProductoID } = req.params;
    try {
        const detalle = await DetalleVenta.findOne({
            where: { VentaID: VentaID, ProductoID: ProductoID }
        });
        if (detalle) {
            res.send(detalle);
        } else {
            res.status(404).send({
                message: `Sale detail not found with VentaID=${VentaID} and ProductoID=${ProductoID}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Sale Detail."
        });
    }
};

exports.delete = async (req, res) => {
    const { VentaID, ProductoID } = req.params;
    try {
        const deleted = await DetalleVenta.destroy({
            where: { VentaID: VentaID, ProductoID: ProductoID }
        });
        if (deleted) {
            res.send({ message: "Sale Detail was deleted successfully!" });
        } else {
            res.status(404).send({
                message: `Cannot delete Sale Detail with VentaID=${VentaID} and ProductoID=${ProductoID}. Maybe Sale Detail was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Sale Detail."
        });
    }
};
