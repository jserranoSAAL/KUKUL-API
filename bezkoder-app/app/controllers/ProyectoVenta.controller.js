const db = require("../models");
const ProyectoVenta = db.ProyectoVenta;

// Crear y guardar un nuevo Proyecto de Venta
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Prospect) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Proyecto de Venta
    const proyectoVenta = {
        Prospect: req.body.Prospect,
        Viaje: req.body.Viaje,
        Pax: req.body.Pax,
        PrimerDiaDelViaje: req.body.PrimerDiaDelViaje,
        EstadoDelProyecto: req.body.EstadoDelProyecto,
        AgenciaDeViaje: req.body.AgenciaDeViaje,
        GrupoConfirmado: req.body.GrupoConfirmado,
        Codigo: req.body.Codigo,
        Manager: req.body.Manager,
        UltimaModificacion: new Date() // Establece la fecha actual
    };

    // Guardar ProyectoVenta en la base de datos
    ProyectoVenta.create(proyectoVenta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Proyecto de Venta."
            });
        });
};

// Recuperar todos los Proyectos de Venta de la base de datos
exports.findAll = (req, res) => {
    ProyectoVenta.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los proyectos de venta."
            });
        });
};

// Encontrar un único Proyecto de Venta con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ProyectoVenta.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Proyecto de Venta con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Proyecto de Venta con id=" + id
            });
        });
};

// Actualizar un Proyecto de Venta por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    ProyectoVenta.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Proyecto de Venta actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Proyecto de Venta con id=${id}. Quizás el Proyecto de Venta no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Proyecto de Venta con id=" + id
            });
        });
};

// Eliminar un Proyecto de Venta con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    ProyectoVenta.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Proyecto de Venta eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Proyecto de Venta con id=${id}. Quizás el Proyecto de Venta no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Proyecto de Venta con id=" + id
            });
        });
};


exports.findByProspect = (req, res) => {
    const prospect = req.params.prospect;

    ProyectoVenta.findAll({
        where: {
            Prospect: {
                [db.Sequelize.Op.like]: `%${prospect}%`
            }
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Ocurrió algún error al buscar los proyectos de venta con prospecto similar a ${prospect}.`
        });
    });
};
