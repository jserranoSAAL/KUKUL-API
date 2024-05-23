const db = require("../models");
const ProveedoresLogistica = db.ProveedoresLogistica;

// Crear o actualizar la información de logística de un proveedor (Upsert)
exports.upsertLogistica = async (req, res) => {
    try {
        const { proveedorId, ...logisticaData } = req.body;

        // Buscar si ya existe un registro con el proveedorId
        const existingLogistica = await ProveedoresLogistica.findOne({
            where: { proveedorId }
        });

        let logistica;
        if (existingLogistica) {
            // Actualizar el registro existente
            await ProveedoresLogistica.update(
                { ...logisticaData },
                { where: { proveedorId } }
            );
            logistica = await ProveedoresLogistica.findOne({ where: { proveedorId } });
            res.status(200).json({
                message: "Información de logística de proveedor actualizada exitosamente.",
                logistica
            });
        } else {
            // Crear un nuevo registro
            logistica = await ProveedoresLogistica.create({
                ...logisticaData,
                proveedorId
            });
            res.status(201).json({
                message: "Información de logística de proveedor creada exitosamente.",
                logistica
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la información de logística del proveedor."
        });
    }
};

// Obtener información de logística de un proveedor por ID
exports.findLogisticaByProveedorId = async (req, res) => {
    try {
        const proveedorId = req.params.proveedorId;
        const logistica = await ProveedoresLogistica.findOne({
            where: { proveedorId }
        });

        if (logistica) {
            res.status(200).json(logistica);
        } else {
            res.status(404).json({
                message: `No se encontró información de logística con proveedorId=${proveedorId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la información de logística del proveedor."
        });
    }
};
