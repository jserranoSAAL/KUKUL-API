const db = require("../models");
const Gasto = db.Gasto;

// Crear y guardar un nuevo Gasto
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.TotalCosto) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Gasto
    const gasto = {
        Fecha: req.body.Fecha,
        Grupo: req.body.Grupo,
        Proveedor: req.body.Proveedor,
        Servicio: req.body.Servicio,
        CostoSinIVA: req.body.CostoSinIVA,
        IVA: req.body.IVA,
        TotalCosto: req.body.TotalCosto,
        CentroFinanciero: req.body.CentroFinanciero,
        TC: req.body.TC,
        FechaPago: req.body.FechaPago,
        EstadoPago: req.body.EstadoPago,
        Notas: req.body.Notas,
        Identificador: req.body.Identificador
    };

    // Guardar Gasto en la base de datos
    Gasto.create(gasto)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Gasto."
            });
        });
};

// Recuperar todos los Gastos de la base de datos
exports.findAll = (req, res) => {
    Gasto.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los gastos."
            });
        });
};

// Encontrar un único Gasto con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Gasto.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Gasto con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Gasto con id=" + id
            });
        });
};

// Actualizar un Gasto por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Gasto.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Gasto actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Gasto con id=${id}. Quizás el Gasto no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Gasto con id=" + id
            });
        });
};

// Eliminar un Gasto con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Gasto.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Gasto eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Gasto con id=${id}. Quizás el Gasto no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Gasto con id=" + id
            });
        });
};
