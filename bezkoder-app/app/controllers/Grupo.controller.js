const db = require("../models");
const Cliente = db.Cliente;
const Grupo = db.Grupo;
const ClienteGrupo = db.ClienteGrupo;
const ClienteViajeProducto = db.ClienteViajeProducto;
const Logistica = db.Logistica; 
const { Op } = require("sequelize");


// Crear y guardar un nuevo Grupo
exports.create = async (req, res) => {
    // Validar la solicitud
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Grupo
    const grupo = {
        Fecha: req.body.Fecha,
        FechaInicio: req.body.FechaInicio,
        ViajerosConfirmados: req.body.ViajerosConfirmados,
        Nombre: req.body.Nombre,
        Estado: req.body.Estado,
        Agencia: req.body.Agencia,
        Periodo: req.body.Periodo,
        Facturado: req.body.Facturado,
        Real: req.body.Real,
        PorcentajePlaneado: req.body.PorcentajePlaneado,
        PorcentajeReal: req.body.PorcentajeReal,
        ResponsableDelGrupo: req.body.ResponsableDelGrupo
    };
    

    try {
        // Guardar Grupo en la base de datos
        const grupoData = await Grupo.create(grupo);

        // Crear la Logistica asociada al Grupo
        const logistica = {
            Fecha: grupoData.Fecha, // Usando datos del Grupo
            Inicio: grupoData.FechaInicio || '', // Datos opcionales
            Fin: grupoData.Fin || '',
            Subgrupo: grupoData.Nombre || '',
            Actividad: grupoData.Actividad || '',
            PersonasConfirmadas: grupoData.ViajerosConfirmados || 0,
            Servicio: grupoData.Servicio || '',
            Proveedor: grupoData.Proveedor || '',
            Reserva: grupoData.Nombre || '',
            FechaReserva: grupoData.Fecha || null,
            Pago: grupoData.Facturado || 0,
            FechaPago: grupoData.FechaPago || null,
            Duracion: grupoData.Duracion || 0,
            Cantidad: grupoData.Cantidad || 0,
            Categoria: grupoData.Categoria || '',
            Responsable: grupoData.ResponsableDelGrupo || '',
            GrupoID: grupoData.ID // Asociar la Logistica con el Grupo recién creado
        };
        // Guardar Logistica en la base de datos
        await Logistica.create(logistica);

        // Relacionar cliente con el grupo
        const clientIds = req.body.clientes || [];
        var clientObjs = [];

        for(let cId of clientIds){
            clientObjs.push({IdCliente:cId,IdGrupo:grupoData.ID});
        }
        await ClienteGrupo.bulkCreate(clientObjs);
        
        // Responder con el Grupo y Logistica creada
        res.send({
            clientes:clientIds,
            grupo: grupoData,
            logistica: logistica
        });

    } catch (err) {
        res.status(500).send({
            message: console.log(err) || "Ocurrió algún error al crear el Grupo y Logistica."
        });
    }
};

// Recuperar todos los Grupos de la base de datos
exports.findAll = (req, res) => {
    Grupo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los grupos."
            });
        });
};

// Encontrar un único Grupo con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Grupo.findByPk(id)
        .then(async (data) => {
            if (data) {
                
                let clientsIdsArray = [];
                const clientIds = await ClienteGrupo.findAll({
                    attributes:['IdCliente'],
                    where:{
                        IdGrupo:id
                    }
                });
                for (let i = 0; i < clientIds.length; i++) {
                    const c = clientIds[i];
                    clientsIdsArray.push(c.IdCliente);
                }

                const grupo = {
                    ID:data.ID,
                    Fecha: data.Fecha,
                    FechaInicio: data.FechaInicio,
                    ViajerosConfirmados: data.ViajerosConfirmados,
                    Nombre: data.Nombre,
                    Estado: data.Estado,
                    Agencia: data.Agencia,
                    Periodo: data.Periodo,
                    Facturado: data.Facturado,
                    Real: data.Real,
                    PorcentajePlaneado: data.PorcentajePlaneado,
                    PorcentajeReal: data.PorcentajeReal,
                    ResponsableDelGrupo: data.ResponsableDelGrupo,
                    clientes: clientsIdsArray
                };

                res.send(grupo);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Grupo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// Actualizar un Grupo por el id en la solicitud
exports.update = async (req, res) => {
    const id = req.params.id;

    // Grupo
    const grupo = {
        Fecha: req.body.Fecha,
        FechaInicio: req.body.FechaInicio,
        ViajerosConfirmados: req.body.ViajerosConfirmados,
        Nombre: req.body.Nombre,
        Estado: req.body.Estado,
        Agencia: req.body.Agencia,
        Periodo: req.body.Periodo,
        Facturado: req.body.Facturado,
        Real: req.body.Real,
        PorcentajePlaneado: req.body.PorcentajePlaneado,
        PorcentajeReal: req.body.PorcentajeReal,
        ResponsableDelGrupo: req.body.ResponsableDelGrupo
    };

    Grupo.update(grupo, {
        where: { ID: id }
    })
        .then(async (num) => {
            if (num == 1) {

                // Remover clientes del grupo
                const clienteGrupoData = await ClienteGrupo.findAll({where:{IdGrupo:id}});

                for (const cGrupo of clienteGrupoData) {
                    await ClienteViajeProducto.destroy({ where:{IdClienteGrupo:cGrupo.ID} });
                }
                await ClienteGrupo.destroy({ where: { IdGrupo: id,}});
                
                // Relacionar cliente con el grupo
                const clientIds = req.body.clientes || [];
                var clientObjs = [];

                for(let cId of clientIds){
                    clientObjs.push({IdCliente:cId,IdGrupo:id});
                }
                await ClienteGrupo.bulkCreate(clientObjs);
                
                res.send({
                    message: "Grupo actualizado correctamente.",
                    grupo: grupo,
                    clientes: clientIds
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Grupo con id=${id}. Quizás el Grupo no fue encontrado, la informacion proporcionada es la misma que esta registr ada o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
    });
    
};

// Eliminar un Grupo con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Grupo.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Grupo eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Grupo con id=${id}. Quizás el Grupo no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Grupo con id=" + id
            });
        });
};


// Buscar Grupos por nombre
exports.findByName = (req, res) => {
    const nombre = req.params.nombre;

    Grupo.findAll({
        where: {
            Nombre: {
                [Op.like]: `%${nombre}%` // Utiliza el operador LIKE para buscar coincidencias parciales
            }
        }
    })
    .then(data => {
        if (data.length > 0) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontraron Grupos con el nombre=${nombre}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error buscando Grupos con el nombre=" + nombre
        });
    });
};
