const db = require("../models");
const Ingreso = db.Ingreso;

// Crear y guardar un nuevo Ingreso
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Ingreso
    const ingreso = {
        Fecha: req.body.Fecha,
        Nombre: req.body.Nombre,
        Categoria: req.body.Categoria,
        Grupo: req.body.Grupo,
        Agencia: req.body.Agencia,
        PagoConIVA: req.body.PagoConIVA,
        TipoDePago: req.body.TipoDePago,
        PagoSinIVA: req.body.PagoSinIVA,
        Impuesto: req.body.Impuesto,
        Moneda: req.body.Moneda,
        CentroFinanciero: req.body.CentroFinanciero,
        TC: req.body.TC,
        USD: req.body.USD,
        FechaDePago: req.body.FechaDePago,
        Notas: req.body.Notas,
        Pagador: req.body.Pagador,
        NumeroDeOrden: req.body.NumeroDeOrden,
        Identificador: req.body.Identificador,
        Desl: req.body.Desl,
        Factura: req.body.Factura,
        Responsable: req.body.Responsable
    };

    // Guardar Ingreso en la base de datos
    Ingreso.create(ingreso)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Ingreso."
            });
        });
};

// Recuperar todos los Ingresos de la base de datos
exports.findAll = (req, res) => {
    Ingreso.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los ingresos."
            });
        });
};

// Encontrar un único Ingreso con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ingreso.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Ingreso con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Ingreso con id=" + id
            });
        });
};

// Actualizar un Ingreso por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Ingreso.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingreso actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Ingreso con id=${id}. Quizás el Ingreso no fue encontrado o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Ingreso con id=" + id
            });
        });
};

// Eliminar un Ingreso con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Ingreso.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ingreso eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Ingreso con id=${id}. Quizás el Ingreso no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Ingreso con id=" + id
            });
        });
};
