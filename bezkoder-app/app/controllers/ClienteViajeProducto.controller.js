// controllers/ClienteViajeProducto.controller.js
const db = require('../models');
const {Op} = require("sequelize");
const ClienteViajeProducto = db.ClienteViajeProducto;

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "El contenido no puede estar vacío." });
        return;
    }
    
    var clients = req.body.clientPerProducts;
    let response = [];

    try {
        for (let c of clients) {
            for (let vp of c.idViajeProducts) {
                const clienteViajeProductoObj = {
                    IdCliente: c.idClient,
                    IdViajeProducto: vp.id
                };
                let createdObj = await ClienteViajeProducto.create(clienteViajeProductoObj);
                response.push(createdObj);
            };
        }
        res.send(response);

    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Client."
        });
    }
};