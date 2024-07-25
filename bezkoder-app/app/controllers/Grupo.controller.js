const db = require("../models");
const Grupo = db.Grupo;
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

        // Responder con el Grupo y Logistica creada
        res.send({
            grupo: grupoData,
            logistica: logistica
        });

    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear el Grupo y Logistica."
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
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Grupo con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Grupo con id=" + id
            });
        });
};

// Actualizar un Grupo por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Grupo.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Grupo actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Grupo con id=${id}. Quizás el Grupo no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Grupo con id=" + id
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
