const db = require("../models");
const CuentasBancariasProveedor = db.CuentasBancariasProveedor;

exports.upsertCuentaBancaria = async (req, res) => {
    try {
        const { proveedorId, ...cuentaData } = req.body;

        // Buscar si ya existe un registro con el proveedorId y numeroCuenta
        const existingCuenta = await CuentasBancariasProveedor.findOne({
            where: { proveedorId, numeroCuenta: cuentaData.numeroCuenta }
        });

        let cuenta;
        if (existingCuenta) {
            // Actualizar el registro existente
            await CuentasBancariasProveedor.update(
                { ...cuentaData },
                { where: { proveedorId, numeroCuenta: cuentaData.numeroCuenta } }
            );
            cuenta = await CuentasBancariasProveedor.findOne({
                where: { proveedorId, numeroCuenta: cuentaData.numeroCuenta }
            });
            res.status(200).json({
                message: "Cuenta bancaria de proveedor actualizada exitosamente.",
                cuenta
            });
        } else {
            // Crear un nuevo registro
            cuenta = await CuentasBancariasProveedor.create({
                ...cuentaData,
                proveedorId
            });
            res.status(201).json({
                message: "Cuenta bancaria de proveedor creada exitosamente.",
                cuenta
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar la cuenta bancaria del proveedor."
        });
    }
};

// Obtener cuentas bancarias de un proveedor por ID
exports.findCuentasByProveedorId = async (req, res) => {
    try {
        const proveedorId = req.params.proveedorId;
        const cuentas = await CuentasBancariasProveedor.findAll({
            where: { proveedorId }
        });

        if (cuentas) {
            res.status(200).json(cuentas);
        } else {
            res.status(404).json({
                message: `No se encontraron cuentas bancarias con proveedorId=${proveedorId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar las cuentas bancarias del proveedor."
        });
    }
};
