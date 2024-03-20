const db = require("../models");
const ProspectoVenta = db.ProspectoVenta;

// Crear y guardar un nuevo Prospecto de Venta
exports.create = (req, res) => {
    // Validación
    if (!req.body.Proyecto) {
        res.status(400).send({
            message: "El contenido no puede estar vacío."
        });
        return;
    }

    // Crear un Prospecto de Venta
    const prospectoVenta = {
        Proyecto: req.body.Proyecto,
        Agencia: req.body.Agencia,
        Viaje: req.body.Viaje,
        Inicio: req.body.Inicio,
        Estado: req.body.Estado,
        EstadoDePago: req.body.EstadoDePago
    };

    // Guardar en la base de datos
    ProspectoVenta.create(prospectoVenta)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió algún error al crear el Prospecto de Venta."
            });
        });
};

// Otros métodos como update, delete, findAll, findOne, etc.
