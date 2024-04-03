const db = require('../models');
const Categoria = db.Categorias;

// Métodos de controlador para Categorias
// Ejemplo: Obtener todas las categorías
exports.findAll = (req, res) => {
    Categoria.findAll()
        .then(categorias => {
            res.json(categorias);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar las categorías."
            });
        });
};
// Agrega aquí otros métodos según sea necesario

// Crear una nueva categoría
exports.create = (req, res) => {
    if (!req.body.Nombre) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    const categoria = {
        Nombre: req.body.Nombre,
        Inicio: req.body.Inicio,
        Fin: req.body.Fin,
        Codigo: req.body.Codigo,
        UltimaActualizacion: new Date() // O usa req.body.UltimaActualizacion si prefieres que el cliente establezca este campo
    };

    Categoria.create(categoria)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear la categoría."
            });
        });
};

// Actualizar una categoría por ID
exports.update = (req, res) => {
    const id = req.params.id;

    Categoria.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Categoría actualizada correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar la categoría con ID=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando la categoría con ID=" + id
        });
    });
};

// Encontrar una categoría por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Categoria.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: `No se encontró la categoría con ID=${id}.` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error recuperando la categoría con ID=" + id
            });
        });
};

// Eliminar una categoría por su ID
exports.delete = (req, res) => {
    const id = req.params.id;

    Categoria.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({ message: "Categoría eliminada correctamente." });
        } else {
            res.send({ message: `No se pudo eliminar la categoría con ID=${id}.` });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar la categoría con ID=" + id
        });
    });
};

// Método para buscar categorías por nombre con LIKE
exports.findByName = (req, res) => {
    const nombre = req.params.nombre;

    Categoria.findAll({
        where: {
            Nombre: {
                [db.Sequelize.Op.like]: `%${nombre}%` // Utiliza LIKE para búsqueda parcial
            }
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || `Ocurrió algún error al buscar las categorías con nombre similar a ${nombre}.`
        });
    });
};
