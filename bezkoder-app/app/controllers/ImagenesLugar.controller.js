const db = require('../models');
const ImagenesLugar = db.ImagenesLugar;

// Crear una nueva imagen de lugar
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.LugarID || !req.body.ImagenURL) {
        res.status(400).send({
            message: "LugarID e ImagenURL son campos requeridos."
        });
        return;
    }

    // Crear la imagen de lugar
    const imagenLugar = {
        LugarID: req.body.LugarID,
        ImagenURL: req.body.ImagenURL
    };

    // Guardar la imagen de lugar en la base de datos
    ImagenesLugar.create(imagenLugar)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al crear la imagen de lugar."
            });
        });
};

// Obtener todas las imágenes de lugar
exports.findAll = (req, res) => {
    ImagenesLugar.findAll()
        .then(imagenesLugar => {
            res.json(imagenesLugar);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar las imágenes de lugar."
            });
        });
};

// Obtener una imagen de lugar por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    ImagenesLugar.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la imagen de lugar con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la imagen de lugar con ID=" + id
            });
        });
};

// Eliminar una imagen de lugar por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    ImagenesLugar.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Imagen de lugar eliminada correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la imagen de lugar con ID=${id}. Tal vez la imagen de lugar no fue encontrada.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la imagen de lugar con ID=" + id
        });
    });
};
