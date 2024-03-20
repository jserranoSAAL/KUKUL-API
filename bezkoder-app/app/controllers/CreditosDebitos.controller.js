const db = require("../models");
const CreditosDebitos = db.CreditosDebitos;

// Crear y guardar un nuevo registro de Créditos o Débitos
exports.create = (req, res) => {
    if (!req.body.Grupo) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    const creditoDebito = {
        Fecha: req.body.Fecha,
        Grupo: req.body.Grupo,
        Proveedor: req.body.Proveedor,
        Agencia: req.body.Agencia,
        MontoSinIVA: req.body.MontoSinIVA,
        IVA: req.body.IVA,
        Total: req.body.Total,
        Moneda: req.body.Moneda,
        EstadoDePago: req.body.EstadoDePago,
        Notas: req.body.Notas
    };

    CreditosDebitos.create(creditoDebito)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el registro de Créditos o Débitos."
            });
        });
};

// Recuperar todos los registros de Créditos y Débitos de la base de datos
exports.findAll = (req, res) => {
    CreditosDebitos.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los registros de Créditos y Débitos."
            });
        });
};

// Buscar un registro de Créditos o Débitos por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    CreditosDebitos.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el registro de Créditos o Débitos con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el registro de Créditos o Débitos con id=" + id
            });
        });
};

// Actualizar un registro de Créditos o Débitos por ID
exports.update = (req, res) => {
    const id = req.params.id;

    CreditosDebitos.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro de Créditos o Débitos actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el registro de Créditos o Débitos con id=${id}. Quizás no se encontró el registro o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el registro de Créditos o Débitos con id=" + id
            });
        });
};

// Eliminar un registro de Créditos o Débitos con el especificado ID
exports.delete = (req, res) => {
    const id = req.params.id;

    CreditosDebitos.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro de Créditos o Débitos eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el registro de Créditos o Débitos con id=${id}. Quizás el registro no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el registro de Créditos o Débitos con id=" + id
            });
        });
};
