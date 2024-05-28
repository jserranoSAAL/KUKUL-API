const db = require('../models');
const PreciosCalculadosPaquete = db.PreciosCalculadosPaquete;

// Crear un nuevo precio calculado de paquete
exports.create = async (req, res) => {
    try {
        const { cotizacionId, desde, hasta, baseUtilizada, precio, costo, porcentaje, supSGL, minTPL, minQD, minNino, supBebe } = req.body;
        const precioCalculado = await PreciosCalculadosPaquete.create({ cotizacionId, desde, hasta, baseUtilizada, precio, costo, porcentaje, supSGL, minTPL, minQD, minNino, supBebe });
        res.status(201).json({ message: "Precio calculado de paquete creado exitosamente.", precioCalculado });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear el precio calculado de paquete." });
    }
};

// Obtener todos los precios calculados de paquete
exports.findAll = async (req, res) => {
    try {
        const precios = await PreciosCalculadosPaquete.findAll();
        res.json(precios);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar los precios calculados de paquete." });
    }
};

// Obtener un precio calculado de paquete por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const precio = await PreciosCalculadosPaquete.findByPk(id);

        if (precio) {
            res.json(precio);
        } else {
            res.status(404).send({ message: `No se encontró el precio calculado de paquete con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar el precio calculado de paquete." });
    }
};

// Actualizar un precio calculado de paquete por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { desde, hasta, baseUtilizada, precio, costo, porcentaje, supSGL, minTPL, minQD, minNino, supBebe } = req.body;
        const [num] = await PreciosCalculadosPaquete.update(
            { desde, hasta, baseUtilizada, precio, costo, porcentaje, supSGL, minTPL, minQD, minNino, supBebe },
            { where: { id } }
        );

        if (num == 1) {
            res.send({ message: "Precio calculado de paquete actualizado exitosamente." });
        } else {
            res.send({ message: `No se pudo actualizar el precio calculado de paquete con ID=${id}. Tal vez el precio calculado de paquete no fue encontrado o req.body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar el precio calculado de paquete." });
    }
};

// Eliminar un precio calculado de paquete por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await PreciosCalculadosPaquete.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Precio calculado de paquete eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el precio calculado de paquete con ID=${id}. Tal vez el precio calculado de paquete no fue encontrado.` });
        }
    } catch (err) {
        res.status({
            message: err.message || "No se pudo eliminar el precio calculado de paquete con ID=" + id 
        });
    }
};
