const db = require('../models');
const Proveedor = db.Proveedores;
const Currency = db.Currency;

// Métodos de controlador para Proveedores
// Ejemplo: Obtener todos los proveedores
exports.findAll = (req, res) => {
    Proveedor.findAll()
        .then(proveedores => {
            res.json(proveedores);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error al recuperar los proveedores."
            });
        });
};

// Método para crear un nuevo proveedor
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.Proveedor || !req.body.CurrencyID) {
        res.status(400).send({
            message: "El contenido no puede estar vacío, y CurrencyID es requerido."
        });
        return;
    }

    const proveedor = {
        Proveedor: req.body.Proveedor,
        CategoriaProveedor: req.body.CategoriaProveedor,
        Ciudad: req.body.Ciudad,
        Contacto: req.body.Contacto,
        Telefono: req.body.Telefono,
        Email: req.body.Email,
        Calificacion: req.body.Calificacion,
        formula: req.body.formula,
        calculo: req.body.calculo,
        creador: req.body.creador,
        host: req.body.host,
        sitio_web: req.body.sitio_web,
        codigo: req.body.codigo,
        licencia: req.body.licencia,
        supplier_check_in: req.body.supplier_check_in,
        supplier_check_out: req.body.supplier_check_out,
        capacidad_proveedor: req.body.capacidad_proveedor,
        calle: req.body.calle,
        colonia: req.body.colonia,
        ciudad: req.body.ciudad,
        codigo_postal: req.body.codigo_postal,
        estado: req.body.estado,
        pais: req.body.pais,
        lenguaje_comunicacion: req.body.lenguaje_comunicacion,
        modo_comunicacion: req.body.modo_comunicacion,
        centro_efectivo: req.body.centro_efectivo,
        divisa_centro_efectivo: req.body.divisa_centro_efectivo,
        metodo_pago_defecto: req.body.metodo_pago_defecto,
        CurrencyID: req.body.CurrencyID // Nuevo campo
    };

    // Guardar Proveedor en la base de datos
    Proveedor.create(proveedor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Algún error ocurrió al crear el Proveedor."
            });
        });
};

// Actualizar un Proveedor
exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const [updated] = await Proveedor.update(req.body, {
            where: { ID: id }
        });
        if (updated) {
            res.send({
                message: "Proveedor actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se encontró el Proveedor con ID=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error al actualizar el Proveedor con ID=" + id + "error: " + err
        });
    }
};

// Eliminar un Proveedor
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedRowCount = await Proveedor.destroy({
            where: { ID: id }
        });
        if (deletedRowCount > 0) {
            res.send({
                message: "Proveedor eliminado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se encontró el Proveedor con ID=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Proveedor con ID=" + id
        });
    }
};

// Obtener un Proveedor por su ID
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const proveedor = await Proveedor.findByPk(id);
        if (proveedor) {
            res.send(proveedor);
        } else {
            res.status(404).send({
                message: `No se encontró el Proveedor con ID=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Proveedor con ID=" + id
        });
    }
};

// Buscar proveedores por nombre
exports.findByNombre = async (req, res) => {
    const nombre = req.params.proveedor;

    try {
        const proveedores = await Proveedor.findAll({
            where: {
                Proveedor: {
                    [db.Sequelize.Op.like]: `%${nombre}%`
                }
            }
        });
        if (proveedores.length) {
            res.send(proveedores);
        } else {
            res.status(404).send({
                message: `No se encontraron proveedores con nombre similar a ${nombre}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió algún error al buscar los proveedores."
        });
    }
};

// Obtener la información de la divisa de un Proveedor por su ID
exports.findCurrencyProvider = async (req, res) => {
    const id = req.params.id;

    try {        
        const proveedor = await Proveedor.findByPk(id)

        if (proveedor) {
            const currencyId = proveedor.CurrencyID;

            const currency = await Currency.findByPk(currencyId);

            if (currency) {
                res.send(currency);
            } else {
                res.status(404).send({
                    message: `No se encontró la divisa asociada con el Proveedor con ID=${id}.`
                });
            }
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando divisa del Proveedor con ID=" + id + " error:" + err
        });
    }
};