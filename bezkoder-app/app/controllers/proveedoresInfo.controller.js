const db = require("../models");
const ProveedoresInfo = db.ProveedoresInfo;

// Crear o actualizar Info de Proveedor (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { proveedorId, ...infoData } = req.body;

        // Buscar si ya existe un registro con el proveedorId
        const existingInfo = await ProveedoresInfo.findOne({
            where: { proveedorId }
        });

        let proveedorInfo;
        if (existingInfo) {
            // Actualizar el registro existente
            proveedorInfo = await ProveedoresInfo.update(
                { ...infoData },
                { where: { proveedorId } }
            );
            res.status(200).json({
                message: "Info de Proveedor actualizada exitosamente.",
                proveedorInfo
            });
        } else {
            // Crear un nuevo registro
            proveedorInfo = await ProveedoresInfo.create({
                ...infoData,
                proveedorId
            });
            res.status(201).json({
                message: "Info de Proveedor creada exitosamente.",
                proveedorInfo
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la Info de Proveedor."
        });
    }
};

// Buscar Info de Proveedor por proveedorId
exports.findByProveedorId = async (req, res) => {
    try {
        const proveedorId = req.params.proveedorId;
        const proveedorInfo = await ProveedoresInfo.findOne({
            where: { proveedorId }
        });

        if (proveedorInfo) {
            res.status(200).json(proveedorInfo);
        } else {
            res.status(404).json({
                message: `No se encontró info de proveedor con proveedorId=${proveedorId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la Info de Proveedor."
        });
    }
};
