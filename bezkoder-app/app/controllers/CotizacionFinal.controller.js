const db = require("../models");
const CotizacionFinal = db.CotizacionFinal;

// Crear y guardar una nueva CotizacionFinal
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.data) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear una CotizacionFinal
    const cotizacion = {
        data: req.body.data,
        code: req.params.code,
        paquete_id: req.body.paquete_id
    };

    // Guardar CotizacionFinal en la base de datos
    CotizacionFinal.create(cotizacion)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear la CotizacionFinal."
            });
        });
};

exports.findByPaqueteId = (req, res) => {
    const paquete_id = req.params.paquete_id;

    CotizacionFinal.findOne({ where: { paquete_id: paquete_id } })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la CotizacionFinal con paquete_id=${paquete_id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la CotizacionFinal con paquete_id=" + paquete_id
            });
        });
};

// Recuperar todas las CotizacionesFinales de la base de datos
exports.findAll = (req, res) => {
    CotizacionFinal.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al recuperar las cotizaciones."
            });
        });
};

// Encontrar una única CotizacionFinal con un code
exports.findOne = (req, res) => {
    const code = req.params.code;

    CotizacionFinal.findOne({
        where: {
            code: code
        }
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se pudo encontrar la CotizacionFinal con code=${code}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la CotizacionFinal con code=" + code
            });
        });
};


// Actualizar una CotizacionFinal por el id en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    CotizacionFinal.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "CotizacionFinal actualizada correctamente."
                });
            } else {
                res.send({
                    message: `No se puede actualizar la CotizacionFinal con id=${id}. Quizás la CotizacionFinal no fue encontrada o req.body está vacío.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error actualizando la CotizacionFinal con id=" + id
            });
        });
};

// Eliminar una CotizacionFinal con el id especificado en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    CotizacionFinal.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "CotizacionFinal eliminada correctamente!"
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la CotizacionFinal con id=${id}. Quizás la CotizacionFinal no fue encontrada.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la CotizacionFinal con id=" + id
            });
        });
};


// Upsert una CotizacionFinal por code
exports.upsert = async (req, res) => {
    try {
        // Validar la solicitud
        if (!req.body.data || !req.params.code) {
            return res.status(400).send({
                message: "El contenido de la solicitud no puede estar vacío y se requiere code."
            });
        }

        const code = req.params.code;
        const cotizacionData = req.body.data;
        const paquete_id = req.body.paquete_id;

        // Buscar si existe una CotizacionFinal con el code dado
        let cotizacion = await CotizacionFinal.findOne({ where: { code: code } });

        if (cotizacion) {
            // Actualizar la CotizacionFinal existente
            cotizacion.data = cotizacionData;
            cotizacion.paquete_id = paquete_id;
            await cotizacion.save();

            res.send({
                message: "CotizacionFinal actualizada correctamente.",
                data: cotizacion
            });
        } else {
            // Crear una nueva CotizacionFinal
            cotizacion = await CotizacionFinal.create({
                data: cotizacionData,
                code: code,
                paquete_id: paquete_id
            });

            res.send({
                message: "CotizacionFinal creada correctamente.",
                data: cotizacion
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al crear o actualizar la CotizacionFinal."
        });
    }
};
