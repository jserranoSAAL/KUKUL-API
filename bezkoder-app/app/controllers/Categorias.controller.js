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
