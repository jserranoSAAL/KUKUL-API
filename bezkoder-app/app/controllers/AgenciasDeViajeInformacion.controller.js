const db = require('../models');
const AgenciasDeViajeInformacion = db.AgenciasDeViajeInformacion;

// Crear una nueva Información de Agencia de Viaje
exports.create = async (req, res) => {
    try {
        const newInformacion = await AgenciasDeViajeInformacion.create(req.body);
        res.status(201).json(newInformacion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener todas las Informaciones de Agencias de Viaje
exports.findAll = async (req, res) => {
    try {
        const informaciones = await AgenciasDeViajeInformacion.findAll();
        res.json(informaciones);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener una Información de Agencia de Viaje por ID
exports.findOne = async (req, res) => {
    try {
        const informacion = await AgenciasDeViajeInformacion.findOne({
            where: { AgenciasDeViajeID: req.params.id }  // Usar AgenciasDeViajeID
        });

        console.log('Buscando por AgenciasDeViajeID:', req.params.id);

        if (informacion) {
            res.json(informacion);
        } else {
            res.status(404).json({ error: 'Información de Agencia de Viaje no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una Información de Agencia de Viaje por AgenciasDeViajeID
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Valor de req.params.id: ${id}`);
        console.log(`Datos recibidos: ${JSON.stringify(req.body)}`);

        const [updated] = await AgenciasDeViajeInformacion.update(req.body, {
            where: { AgenciasDeViajeID: id }  // Usar AgenciasDeViajeID
        });

        if (updated) {
            const updatedInformacion = await AgenciasDeViajeInformacion.findOne({
                where: { AgenciasDeViajeID: id }
            });
            res.json(updatedInformacion);
        } else {
            res.status(404).json({ error: 'Información de Agencia de Viaje no encontrada' });
        }
    } catch (error) {
        console.error(`Error al actualizar información para AgenciasDeViajeID: ${id}`, error);
        res.status(400).json({ error: error.message });
    }
};



// Eliminar una Información de Agencia de Viaje por ID
exports.delete = async (req, res) => {
    try {
        const deleted = await AgenciasDeViajeInformacion.destroy({
            where: { ID: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Información de Agencia de Viaje no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
