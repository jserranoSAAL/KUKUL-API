// controllers/ClienteViajeProducto.controller.js
const db = require('../models');
const {Op} = require("sequelize");
const ClienteGrupo = db.ClienteGrupo;
const ClienteViajeProducto = db.ClienteViajeProducto;
const ViajeProducto = db.ViajeProducto;
const ConstruccionViaje = db.ConstruccionViaje;
const Paquetes = db.Paquetes;

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "El contenido no puede estar vacío." });
        return;
    }
    
    var clients = req.body.clientPerProducts;
    let response = [];

    try {
        for (let c of clients) {
            const idClient = c.idClient;
            for (let vp of c.idViajeProducts) {
                
                const idViajeProducto = vp.id;

                const viajeProductoData = await ViajeProducto.findByPk(idViajeProducto);
                const construccionViajeData = await ConstruccionViaje.findByPk(viajeProductoData.viajeId);
                const paqueteData = await Paquetes.findByPk(construccionViajeData.paqueteId);

                const idGrupo = paqueteData.GrupoId;
                const idClienteGrupo = await ClienteGrupo.findOne({where:{ IdCliente:idClient,IdGrupo:idGrupo}}) 
                
                const clienteViajeProductoObj = {
                    IdClienteGrupo: idClienteGrupo.ID,
                    IdViajeProducto: idViajeProducto
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