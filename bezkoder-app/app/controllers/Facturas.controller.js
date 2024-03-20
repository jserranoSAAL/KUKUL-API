const db = require("../models");
const Factura = db.Factura;

// Crear y guardar una nueva Factura
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Numero) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear una Factura
    const factura = {
        Factura: req.body.Factura,
        Viaje: req.body.Viaje,
        Numero: req.body.Numero,
        Orden: req.body.Orden,
        Agencia: req.body.Agencia,
        Pagador: req.body.Pagador,
        Estado: req.body.Estado,
        FechaLimite: req.body.FechaLimite,
        FechaPago: req.body.FechaPago,
        ImporteSinIVA: req.body.ImporteSinIVA,
        Total: req.body.Total,
        TotalGrupo: req.body.TotalGrupo,
        SaldoGrupo: req.body.SaldoGrupo,
        Moneda: req.body.Moneda,
        Identificador: req.body.Identificador
    };

    // Guardar Factura en la base de datos
    Factura.create(factura)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la Factura."
            });
        });
};

// Recuperar todas las Facturas de la base de datos
exports.findAll = (req, res) => {
    Factura.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar las facturas."
            });
        });
};

// Encontrar una única Factura con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Factura.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la Factura con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la Factura con id=" + id
            });
        });
};

// Actualizar una Factura por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Factura.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Factura actualizada correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la Factura con id=${id}. Quizás la Factura no fue encontrada o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando la Factura con id=" + id
            });
        });
};

// Eliminar una Factura con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Factura.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Factura eliminada correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la Factura con id=${id}. Quizás la Factura no fue encontrada.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la Factura con id=" + id
            });
        });
};
