const db = require("../models");
const ProveedoresContactos = db.ProveedoresContactos;

// Crear o actualizar un contacto de proveedor (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { proveedorId, ...contactoData } = req.body;

        // Buscar si ya existe un registro con el proveedorId y el contacto específico (puede usar nombre y apellidos como criterio adicional)
        const existingContacto = await ProveedoresContactos.findOne({
            where: { proveedorId, nombre: contactoData.nombre, apellidos: contactoData.apellidos }
        });

        let contacto;
        if (existingContacto) {
            // Actualizar el registro existente
            contacto = await ProveedoresContactos.update(
                { ...contactoData },
                { where: { proveedorId, nombre: contactoData.nombre, apellidos: contactoData.apellidos } }
            );
            res.status(200).json({
                message: "Contacto de proveedor actualizado exitosamente.",
                contacto
            });
        } else {
            // Crear un nuevo registro
            contacto = await ProveedoresContactos.create({
                ...contactoData,
                proveedorId
            });
            res.status(201).json({
                message: "Contacto de proveedor creado exitosamente.",
                contacto
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el contacto de proveedor."
        });
    }
};


// Buscar contactos por proveedorId
exports.findByProveedorId = async (req, res) => {
    try {
        const proveedorId = req.params.proveedorId;
        const contactos = await ProveedoresContactos.findAll({ 
            where: { proveedorId }            
        });

        if (contactos.length > 0) {
            res.status(200).json(contactos);
        } else {
            res.status(404).json({
                message: `No se encontraron contactos para el proveedor con id=${proveedorId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los contactos del proveedor."
        });
    }
};

// Eliminar un contacto de proveedor
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ProveedoresContactos.destroy({
            where: { id }
        });

        if (num == 1) {
            res.status(200).json({
                message: "Contacto de proveedor eliminado exitosamente."
            });
        } else {
            res.status(404).json({
                message: `No se encontró contacto de proveedor con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al eliminar el contacto de proveedor."
        });
    }
};
