const db = require('../models');
const BancosDeProveedores = db.BancosDeProveedores;

// Métodos de controlador para BancosDeProveedores

// Crear un nuevo banco de proveedores
exports.create = async (req, res) => {
    try {
        const banco = await BancosDeProveedores.create(req.body);
        res.status(201).send(banco);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al crear el banco del proveedor."
        });
    }
};

// Obtener todos los bancos de proveedores
exports.findAll = async (req, res) => {
    try {
        const bancos = await BancosDeProveedores.findAll();
        res.send(bancos);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Ocurrió un error al recuperar los bancos de proveedores."
        });
    }
};

// Obtener un banco de proveedores por su ID
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const banco = await BancosDeProveedores.findByPk(id);
        if (banco) {
            res.send(banco);
        } else {
            res.status(404).send({
                message: `No se encontró el banco de proveedores con ID=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error al recuperar el banco de proveedores con ID=" + id
        });
    }
};

// Actualizar un banco de proveedores por su ID
exports.update = async (req, res) => {
    const id = req.params.id;

    try {
        const [updated] = await BancosDeProveedores.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            res.send({
                message: "Banco de proveedores actualizado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se encontró el banco de proveedores con ID=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error al actualizar el banco de proveedores con ID=" + id
        });
    }
};

// Eliminar un banco de proveedores por su ID
exports.delete = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedRowCount = await BancosDeProveedores.destroy({
            where: { id: id }
        });
        if (deletedRowCount > 0) {
            res.send({
                message: "Banco de proveedores eliminado correctamente."
            });
        } else {
            res.status(404).send({
                message: `No se encontró el banco de proveedores con ID=${id}.`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error al eliminar el banco de proveedores con ID=" + id
        });
    }
};
