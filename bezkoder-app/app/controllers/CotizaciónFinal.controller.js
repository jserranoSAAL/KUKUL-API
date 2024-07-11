const db = require("../models");
const CotizaciónFinal = db.CotizaciónFinal;

// Crear y guardar una nueva CotizaciónFinal
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.data) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear una CotizaciónFinal
    const cotizacion = {                
        data: req.body.data,        
        code: req.params.code,
        paquete_id: req.body.paquete_id
    };

    // Guardar CotizaciónFinal en la base de datos
    CotizaciónFinal.create(cotizacion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la CotizaciónFinal."
            });
        });
};

exports.findByPaqueteId = (req, res) => {
    const paquete_id = req.params.paquete_id;

    CotizaciónFinal.findOne({ where: { paquete_id: paquete_id } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la CotizaciónFinal con paquete_id=${paquete_id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la CotizaciónFinal con paquete_id=" + paquete_id
            });
        });
};

// Recuperar todas las CotizacionesFinales de la base de datos
exports.findAll = (req, res) => {
    CotizaciónFinal.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar las cotizaciones."
            });
        });
};

// Encontrar una única CotizaciónFinal con un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    CotizaciónFinal.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la CotizaciónFinal con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la CotizaciónFinal con id=" + id
            });
        });
};

// Actualizar una CotizaciónFinal por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    CotizaciónFinal.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "CotizaciónFinal actualizada correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la CotizaciónFinal con id=${id}. Quizás la CotizaciónFinal no fue encontrada o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando la CotizaciónFinal con id=" + id
            });
        });
};

// Eliminar una CotizaciónFinal con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    CotizaciónFinal.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "CotizaciónFinal eliminada correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la CotizaciónFinal con id=${id}. Quizás la CotizaciónFinal no fue encontrada.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la CotizaciónFinal con id=" + id
            });
        });
};
