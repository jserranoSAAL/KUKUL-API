const db = require("../models");
const ProveedoresDescripcionImagenes = db.ProveedoresDescripcionImagenes;
const s3Controller = require("./s3.controller");

// Crear o actualizar una descripción e imágenes de proveedor (Upsert)
exports.upsert = async (req, res) => {
    try {
        let imagenes = [];
        if (req.body.images && Array.isArray(req.body.images)) {
            const uploadResponse = await new Promise((resolve, reject) => {
                req.body.images = req.body.images.map(img => ({
                    base64String: img.base64String,
                    filename: img.filename
                }));

                s3Controller.uploadImages(req, {
                    json: (response) => resolve(response),
                    status: (code) => ({
                        json: (error) => reject(error)
                    })
                });
            });

            if (uploadResponse && Array.isArray(uploadResponse.imageUrls)) {
                imagenes = uploadResponse.imageUrls;
            } else {
                throw new Error("Upload response does not contain imageUrls");
            }
        }

        const { proveedorId, descripcionEN, descripcionES, descripcionFR } = req.body;

        const existingRecord = await ProveedoresDescripcionImagenes.findOne({
            where: { proveedorId }
        });

        let result;
        if (existingRecord) {
            result = await ProveedoresDescripcionImagenes.update(
                { descripcionEN, descripcionES, descripcionFR, imagenes },
                { where: { proveedorId } }
            );
            res.status(200).json({
                message: "Descripción e imágenes de proveedor actualizadas exitosamente.",
                result
            });
        } else {
            result = await ProveedoresDescripcionImagenes.create({
                proveedorId, descripcionEN, descripcionES, descripcionFR, imagenes
            });
            res.status(201).json({
                message: "Descripción e imágenes de proveedor creadas exitosamente.",
                result
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la descripción e imágenes del proveedor. "
        });
    }
};

// Obtener descripción e imágenes de proveedor por ID
exports.findByProveedorId = async (req, res) => {
    try {
        const proveedorId = req.params.proveedorId;
        const descripcionImagenes = await ProveedoresDescripcionImagenes.findOne({
            where: { proveedorId }
        });

        if (descripcionImagenes) {
            res.status(200).json(descripcionImagenes);
        } else {
            res.status(404).json({
                message: `No se encontró descripción e imágenes del proveedor con proveedorId=${proveedorId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar la descripción e imágenes del proveedor."
        });
    }
};
