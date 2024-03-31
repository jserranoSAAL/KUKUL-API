const db = require('../models');
const Proveedor = db.Proveedores;

// Métodos de controlador para Proveedores
// Ejemplo: Obtener todos los proveedores
exports.findAll = (req, res) => {
    Proveedor.findAll()
        .then(proveedores => {
            res.json(proveedores);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al recuperar los proveedores."
            });
        });
};

// Método para crear un nuevo proveedor
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Proveedor) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un proveedor
    const proveedor = {
        Proveedor: req.body.Proveedor,
        CategoriaProveedor: req.body.CategoriaProveedor,
        Ciudad: req.body.Ciudad,
        Contacto: req.body.Contacto,
        Telefono: req.body.Telefono,
        Email: req.body.Email,
        Calificacion: req.body.Calificacion
    };

    // Guardar Proveedor en la base de datos
    Proveedor.create(proveedor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Algún error ocurrió al crear el Proveedor."
            });
        });
};
// Agrega aquí otros métodos según sea necesario
// Actualizar un Proveedor
exports.update = (req, res) => {
    const id = req.params.id;

    Proveedor.update(req.body, {
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Proveedor actualizado correctamente."
            });
        } else {
            res.send({
                message: `No se puede actualizar el Proveedor con ID=${id}. Quizás no fue encontrado o req.body está vacío.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando el Proveedor con ID=" + id
        });
    });
};

// Eliminar un Proveedor
exports.delete = (req, res) => {
    const id = req.params.id;

    Proveedor.destroy({
        where: { ID: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Proveedor eliminado correctamente."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el Proveedor con ID=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "No se pudo eliminar el Proveedor con ID=" + id
        });
    });
};

// Obtener un Proveedor por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Proveedor.findByPk(id)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se pudo encontrar el Proveedor con ID=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando el Proveedor con ID=" + id
        });
    });
};
