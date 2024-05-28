const db = require('../models');
const CotizacionesPaquete = db.CotizacionesPaquete;
const ParametrosCotizacionPaquete = db.ParametrosCotizacionPaquete;
const PreciosCalculadosPaquete = db.PreciosCalculadosPaquete;

// Crear una nueva cotización de paquete
exports.create = async (req, res) => {
    try {
        const { paqueteId, nombre, fecha_calculo, validez_desde, validez_hasta } = req.body;        

        const cotizacion = await CotizacionesPaquete.create({
            paqueteId, 
            nombre,
            fecha_calculo, 
            validez_desde, 
            validez_hasta
        });        

        res.status(201).json({ message: "Cotización de paquete creada exitosamente.", cotizacion });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear la cotización de paquete." });
    }
};

// Obtener todas las cotizaciones de paquete
exports.findAll = async (req, res) => {
    try {
        const cotizaciones = await CotizacionesPaquete.findAll();
        res.json(cotizaciones);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las cotizaciones de paquete." });
    }
};

// Obtener una cotización de paquete por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const cotizacion = await CotizacionesPaquete.findByPk(id);

        if (cotizacion) {
            res.json(cotizacion);
        } else {
            res.status(404).send({ message: `No se encontró la cotización de paquete con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la cotización de paquete." });
    }
};

// Actualizar una cotización de paquete por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { paqueteId, nombre, fecha_calculo, validez_desde, validez_hasta } = req.body;
        const [num] = await CotizacionesPaquete.update(
            { paqueteId, nombre, fecha_calculo, validez_desde, validez_hasta },
            { where: { id } }
        );        
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar la cotización de paquete." });
    }
};

// Eliminar una cotización de paquete por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await CotizacionesPaquete.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Cotización de paquete eliminada exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar la cotización de paquete con ID=${id}. Tal vez la cotización de paquete no fue encontrada.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar la cotización de paquete con ID=" + id });
    }
};

// Buscar cotizaciones de paquete por agenciaDeViajeId
exports.findByAgenciaId = async (req, res) => {
    try {
        const agenciaDeViajeId = req.params.agenciaDeViajeId;
        const cotizaciones = await CotizacionesPaquete.findAll({ where: { agenciaDeViajeId }, include: [ParametrosCotizacionPaquete, PreciosCalculadosPaquete] });

        if (cotizaciones.length > 0) {
            res.json(cotizaciones);
        } else {
            res.status(404).send({ message: `No se encontraron cotizaciones de paquete para agenciaDeViajeId=${agenciaDeViajeId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al buscar cotizaciones de paquete por agenciaDeViajeId." });
    }
};
