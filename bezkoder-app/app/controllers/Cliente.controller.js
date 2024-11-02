// controllers/cliente.controller.js
const db = require('../models');
const {Op} = require("sequelize");
const Cliente = db.Cliente;

exports.create = async (req, res) => {
    if (!req.body.name || !req.body.lastname || !req.body.age) {
        res.status(400).send({ message: "El contenido no puede estar vacío." });
        return;
    }

    const clienteObj = {
        Nombre: req.body.name,
        Apellido: req.body.lastname,
        Email: req.body.email,
        Telefono: req.body.phone,
        Genero: req.body.gender,
        Edad: req.body.age,
        Nacionalidad: "pendiente",
    };
    try {
        const cliente = await Cliente.create(clienteObj);
        res.send(cliente);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Client."
        });
    }
};

// Obtiene todos los clientes de forma paginada
exports.findAll = async (req, res) => {

    const offsetV = parseInt(req.query.offset)-1;
    const limitV = parseInt(req.query.limit);
    const search = req.query.search;

    try {
        const totalRecords = await Cliente.findAll();
        const filteredData = await Cliente.findAll({
            offset:offsetV,
            limit:limitV,
            where:{
                [Op.or]:[
                    {
                        Nombre:{
                            [Op.substring]:search
                        }
                    },
                    {
                        Apellido:{
                            [Op.substring]:search
                        }
                    }
                ]
            }
        });
        
        const responseObj = {
            totalRecords: totalRecords.length,
            filterRecords: filteredData.length,
            data: filteredData
        }
        res.send(responseObj);
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

    const clienteObj = {
        Nombre: req.body.name,
        Apellido: req.body.lastname,
        Email: req.body.email,
        Telefono: req.body.phone,
        Genero: req.body.gender,
        Edad: req.body.age,
        Nacionalidad: "pendiente",
    };
    try {
        const [updated] = await Cliente.update(clienteObj, {
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
