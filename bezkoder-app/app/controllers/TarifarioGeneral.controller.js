const db = require("../models");
const TarifarioGeneral = db.TarifarioGeneral;

// Crear o actualizar un detalle general de tarifario (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { tarifarioId, imagenes, ...detalleData } = req.body;

        // Si hay imágenes, concatenarlas en una cadena de texto
        let imagenesTexto = "";
        if (imagenes && Array.isArray(imagenes)) {
            imagenesTexto = imagenes.join(",");
        }

        // Buscar si ya existe un registro con el tarifarioId
        const existingDetalle = await TarifarioGeneral.findOne({
            where: { tarifarioId }
        });

        let tarifarioGeneral;
        if (existingDetalle) {
            // Actualizar el registro existente
            tarifarioGeneral = await TarifarioGeneral.update(
                { ...detalleData, imagenes: imagenesTexto },
                { where: { tarifarioId } }
            );
            res.status(200).json({
                message: "Detalle general de Tarifario actualizado exitosamente.",
                tarifarioGeneral
            });
        } else {
            // Crear un nuevo registro
            tarifarioGeneral = await TarifarioGeneral.create({
                ...detalleData,
                tarifarioId,
                imagenes: imagenesTexto
            });
            res.status(201).json({
                message: "Detalle general de Tarifario creado exitosamente.",
                tarifarioGeneral
            });
        }
    } catch (err) {
        console.error("Error al realizar upsert:", err);
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el detalle general de Tarifario."
        });
    }
};



// Obtener detalles generales de tarifario por tarifarioId
exports.findByTarifarioId = async (req, res) => {
    try {
        const tarifarioId = req.params.tarifarioId;
        const tarifarioGeneral = await TarifarioGeneral.findOne({
            where: { tarifarioId }
        });

        if (tarifarioGeneral) {
            res.status(200).json(tarifarioGeneral);
        } else {
            res.status(404).json({
                message: `No se encontró detalle general de tarifario con tarifarioId=${tarifarioId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar el detalle general de Tarifario."
        });
    }
};
