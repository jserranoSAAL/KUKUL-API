// controllers/ClienteViajeProducto.controller.js
const db = require('../models');
const {Op} = require("sequelize");
const ClienteViajeProducto = db.ClienteViajeProducto;

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "El contenido no puede estar vacío." });
        return;
    }
    
    var clients = req.body;
    var response = [];

    try {
        clients.forEach(c => {
            c.idViajeProductos.forEach(async (vp) => {
                const clienteViajeProductoObj = {
                    IdCliente: c.idCliente,
                    IdViajeProducto: vp.id
                };
                const createdObj = await ClienteViajeProducto.create(clienteViajeProductoObj);
                response.push(createdObj);
            });
        });
        res.send(response);

    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Client."
        });
    }
};