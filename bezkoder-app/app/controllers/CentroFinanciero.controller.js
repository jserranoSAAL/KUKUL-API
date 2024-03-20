const db = require("../models");
const CentroFinanciero = db.CentroFinanciero;

// Crear y guardar un nuevo Centro Financiero
exports.create = (req, res) => {
    if (!req.body.CentroFinanciero) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    const centroFinanciero = {
        CentroFinanciero: req.body.CentroFinanciero,
        Total: req.body.Total,
        TotalUSD: req.body.TotalUSD
    };

    CentroFinanciero.create(centroFinanciero)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Centro Financiero."
            });
        });
};

// Recuperar todos los Centros Financieros de la base de datos
exports.findAll = (req, res) => {
    CentroFinanciero.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar los centros financieros."
            });
        });
};

// Buscar un Centro Financiero por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    CentroFinanciero.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar el Centro Financiero con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando el Centro Financiero con id=" + id
            });
        });
};

// Actualizar un Centro Financiero por ID
exports.update = (req, res) => {
    const id = req.params.id;

    CentroFinanciero.update(req.body, {
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Centro Financiero actualizado correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar el Centro Financiero con id=${id}. Quizás no se encontró el Centro Financiero o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando el Centro Financiero con id=" + id
            });
        });
};

// Eliminar un Centro Financiero con el especificado ID
exports.delete = (req, res) => {
    const id = req.params.id;

    CentroFinanciero.destroy({
        where: { ID: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Centro Financiero eliminado correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el Centro Financiero con id=${id}. Quizás el Centro Financiero no fue encontrado.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el Centro Financiero con id=" + id
            });
        });
};
