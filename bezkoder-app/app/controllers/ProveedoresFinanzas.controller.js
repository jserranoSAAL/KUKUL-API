const db = require("../models");
const ProveedoresFinanzas = db.ProveedoresFinanzas;

// Crear o actualizar la información financiera de un proveedor (Upsert)
exports.upsertFinanzas = async (req, res) => {
    try {
        const { proveedorId, ...finanzasData } = req.body;

        // Buscar si ya existe un registro con el proveedorId
        const existingFinanzas = await ProveedoresFinanzas.findOne({
            where: { proveedorId }
        });

        let finanzas;
        if (existingFinanzas) {
            // Actualizar el registro existente
            await ProveedoresFinanzas.update(
                { ...finanzasData },
                { where: { proveedorId } }
            );
            finanzas = await ProveedoresFinanzas.findOne({ where: { proveedorId } });
            res.status(200).json({
                message: "Información financiera de proveedor actualizada exitosamente.",
                finanzas
            });
        } else {
            // Crear un nuevo registro
            finanzas = await ProveedoresFinanzas.create({
                ...finanzasData,
                proveedorId
            });
            res.status(201).json({
                message: "Información financiera de proveedor creada exitosamente.",
                finanzas
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la información financiera del proveedor."
        });
    }
};

// Obtener información financiera de un proveedor por ID
exports.findFinanzasByProveedorId = async (req, res) => {
    try {
        const proveedorId = req.params.proveedorId;
        const finanzas = await ProveedoresFinanzas.findOne({
            where: { proveedorId }
        });

        if (finanzas) {
            res.status(200).json(finanzas);
        } else {
            res.status(404).json({
                message: `No se encontró información financiera con proveedorId=${proveedorId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la información financiera del proveedor."
        });
    }
};
