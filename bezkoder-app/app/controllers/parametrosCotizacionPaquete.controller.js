const db = require('../models');
const ParametrosCotizacionPaquete = db.ParametrosCotizacionPaquete;

// Crear un nuevo parámetro de cotización de paquete
exports.create = async (req, res) => {
    try {
        const { cotizacionId, roomingExtra, costosAdicionales, moneda, modoCalculo, margen } = req.body;
        const parametro = await ParametrosCotizacionPaquete.create({ cotizacionId, roomingExtra, costosAdicionales, moneda, modoCalculo, margen });
        res.status(201).json({ message: "Parámetro de cotización de paquete creado exitosamente.", parametro });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear el parámetro de cotización de paquete." });
    }
};

// Obtener todos los parámetros de cotización de paquete
exports.findAll = async (req, res) => {
    try {
        const parametros = await ParametrosCotizacionPaquete.findAll();
        res.json(parametros);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar los parámetros de cotización de paquete." });
    }
};

// Obtener un parámetro de cotización de paquete por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const parametro = await ParametrosCotizacionPaquete.findByPk(id);

        if (parametro) {
            res.json(parametro);
        } else {
            res.status(404).send({ message: `No se encontró el parámetro de cotización de paquete con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar el parámetro de cotización de paquete." });
    }
};

// Actualizar un parámetro de cotización de paquete por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { roomingExtra, costosAdicionales, moneda, modoCalculo, margen } = req.body;
        const [num] = await ParametrosCotizacionPaquete.update(
            { roomingExtra, costosAdicionales, moneda, modoCalculo, margen },
            { where: { id } }
        );

        if (num == 1) {
            res.send({ message: "Parámetro de cotización de paquete actualizado exitosamente." });
        } else {
            res.send({ message: `No se pudo actualizar el parámetro de cotización de paquete con ID=${id}. Tal vez el parámetro de cotización de paquete no fue encontrado o req.body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar el parámetro de cotización de paquete." });
    }
};

// Eliminar un parámetro de cotización de paquete por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ParametrosCotizacionPaquete.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Parámetro de cotización de paquete eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el parámetro de cotización de paquete con ID=${id}. Tal vez el parámetro de cotización de paquete no fue encontrado.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar el parámetro de cotización de paquete con ID=" + id });
    }
};
