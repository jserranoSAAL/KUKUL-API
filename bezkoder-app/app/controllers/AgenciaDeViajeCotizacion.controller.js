const db = require('../models');
const AgenciaDeViajeCotizacion = db.AgenciaViajeCotizacion;

// Crear y guardar una nueva cotización de agencia de viaje
exports.create = (req, res) => {
    // Validar solicitud
    if (!req.body.AgenciasDeViajeID) {
        res.status(400).send({
            message: "El ID de la agencia de viaje es obligatorio!"
        });
        return;
    }

    // Crear una cotización
    const cotizacion = {
        AgenciasDeViajeID: req.body.AgenciasDeViajeID,
        TipoBase: req.body.TipoBase,
        ModoCalculo: req.body.ModoCalculo,
        TipoMargen: req.body.TipoMargen,
        Moneda: req.body.Moneda,
        CostoExtra: req.body.CostoExtra,
        CotizacionesValidasInicio: req.body.CotizacionesValidasInicio,
        CotizacionesValidasFin: req.body.CotizacionesValidasFin,
        Cotizacion: req.body.Cotizacion,
        DiarioViaje: req.body.DiarioViaje,
        FormInformacion: req.body.FormInformacion
    };

    // Guardar la cotización en la base de datos
    AgenciaDeViajeCotizacion.create(cotizacion)
        .then(data => {
            res.status(200).send({
                CotizacionAgencia: data
            });
        })
        .catch(err => {            
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear la cotización."
            });
        });
};

// Encontrar una cotización de agencia de viaje por ID de agencia de viaje
exports.findOne = (req, res) => {
    const agenciaId = req.params.agenciaId;

    AgenciaDeViajeCotizacion.findOne({
        where: { AgenciasDeViajeID: agenciaId }
    })
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se pudo encontrar la cotización para la agencia de viaje con ID=${agenciaId}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando la cotización para la agencia de viaje con ID=" + agenciaId
        });
    });
};

// Actualizar una cotización de agencia de viaje por ID
exports.update = (req, res) => {
    const id = req.params.id;

    AgenciaDeViajeCotizacion.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Cotización actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la cotización con ID=${id}. Tal vez la cotización no fue encontrada o req.body está vacío.`
            });
        }
    })
    .catch(err => {        
        res.status(500).send({            
            message: "Error actualizando la cotización con ID=" + id
        });
    });
};

// Eliminar una cotización de agencia de viaje con el ID especificado
exports.delete = (req, res) => {
    const id = req.params.id;

    AgenciaDeViajeCotizacion.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Cotización eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la cotización con ID=${id}. Tal vez la cotización no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la cotización con ID=" + id
        });
    });
};
