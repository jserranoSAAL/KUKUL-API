const db = require("../models");
const DescripcionProducto = db.DescripcionProducto;
const s3Controller = require("../controllers/s3.controller");

// Crear o actualizar una Descripción de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        let imagenes = [];
        if (req.body.images && Array.isArray(req.body.images)) {
            // Llamada al método uploadImages del s3Controller
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

            // Asegurarse de que uploadResponse es el objeto esperado
            if (uploadResponse && Array.isArray(uploadResponse.imageUrls)) {
                imagenes = uploadResponse.imageUrls; // Acceder a la propiedad imageUrls
            } else {
                throw new Error("Upload response does not contain imageUrls");
            }
        }

        const { productoId, ...descripcionData } = req.body;

        // Asegúrate de que 'imagenes' está incluido correctamente en 'descripcionData'
        const upsertData = {
            ...descripcionData,
            productoId,
            imagenes
        };

        // Realiza la operación upsert con los datos estructurados correctamente
        const result = await DescripcionProducto.upsert(upsertData);

        // Validar que la operación se realizó correctamente
        if (result) {
            const descripcionProducto = result[0];
            const created = result[1];

            if (created) {
                res.status(201).json({
                    message: "Descripción de Producto creada exitosamente.",
                    descripcionProducto
                });
            }
        } else {
            res.status(200).json({
                message: "Descripción de Producto actualizada exitosamente.",
                upsertData
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la Descripción de Producto."
        });
    }
};


// Obtener la Descripción de Producto por ID de Producto
exports.findByProductoId = async (req, res) => {
    const productoId = req.params.productoId;
    try {
        const data = await DescripcionProducto.findOne({ where: { productoId } });
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró la Descripción de Producto con productoId=${productoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando la Descripción de Producto con productoId=" + productoId
        });
    }
};

// (Resto del controlador permanece igual)
