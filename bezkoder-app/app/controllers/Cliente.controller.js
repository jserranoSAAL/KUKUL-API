// controllers/cliente.controller.js
const db = require('../models');
const Cliente = db.Cliente;

exports.create = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.send(cliente);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Client."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.send(clientes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving clients."
        });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            res.send(cliente);
        } else {
            res.status(404).send({
                message: `Client not found with id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving Client with id=" + id
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const [updated] = await Cliente.update(req.body, {
            where: { ID: id }
        });
        if (updated) {
            const updatedClient = await Cliente.findByPk(id);
            res.send(updatedClient);
        } else {
            res.status(404).send({
                message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Client with id=" + id
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Cliente.destroy({
            where: { ID: id }
        });
        if (deleted) {
            res.send({ message: "Client was deleted successfully!" });
        } else {
            res.status(404).send({
                message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Client with id=" + id
        });
    }
};
