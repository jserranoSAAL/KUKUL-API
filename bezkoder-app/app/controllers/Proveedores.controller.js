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
