// controllers/construccionViaje.controller.js
const db = require('../models');
const ConstruccionViaje = db.ConstruccionViaje;
const AgenciaDeViaje = db.AgenciasDeViaje;
const DireccionAgenciaViaje = db.DireccionAgenciaViaje;
const AgenciaViajeInfo = db.AgenciasDeViajeInformacion;
const ViajeProductos = db.ViajeProducto;
const Productos = db.Productos;
const Geografia = db.Geografia;
const DescripcionProducto = db.DescripcionProducto;
const Paquetes = db.Paquetes;
const Proveedores = db.Proveedores;
const Currency = db.Currency;


// Crear una nueva construcción de viaje
exports.create = async (req, res) => {
    try {
        const { nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId, paqueteId } = req.body;
        const construccionViaje = await ConstruccionViaje.create({ nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId, paqueteId });
        res.status(201).json({ message: "Construcción de viaje creada exitosamente.", construccionViaje });
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al crear la construcción de viaje." });
    }
};

// Obtener todas las construcciones de viaje
exports.findAll = async (req, res) => {
    try {
        const construccionesViaje = await ConstruccionViaje.findAll();
        res.json(construccionesViaje);
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las construcciones de viaje." });
    }
};

// Obtener una construcción de viaje por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const construccionViaje = await ConstruccionViaje.findByPk(id);

        if (construccionViaje) {
            res.json(construccionViaje);
        } else {
            res.status(404).send({ message: `No se encontró la construcción de viaje con ID=${id}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la construcción de viaje." });
    }
};

// Actualizar una construcción de viaje por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId } = req.body;
        const [num] = await ConstruccionViaje.update(
            { nombre, fecha_inicio, fecha_fin, descripcion, agenciaDeViajeId },
            { where: { id } }
        );

        if (num == 1) {
            res.send({ message: "Construcción de viaje actualizada exitosamente." });
        } else {
            res.send({ message: `No se pudo actualizar la construcción de viaje con ID=${id}. Tal vez la construcción de viaje no fue encontrada o req.body está vacío.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al actualizar la construcción de viaje." });
    }
};

// Eliminar una construcción de viaje por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ConstruccionViaje.destroy({ where: { id } });

        if (num == 1) {
            res.send({ message: "Construcción de viaje eliminada exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar la construcción de viaje con ID=${id}. Tal vez la construcción de viaje no fue encontrada.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "No se pudo eliminar la construcción de viaje con ID=" + id });
    }
};

// Buscar construcciones de viaje por paqueteId
exports.findByPaqueteId = async (req, res) => {
    try {
        const paqueteId = req.params.paqueteId;
        const construccionesViaje = await ConstruccionViaje.findAll({ where: { paqueteId } });

        if (construccionesViaje.length > 0) {
            res.json(construccionesViaje);
        } else {
            res.status(404).send({ message: `No se encontraron construcciones de viaje para paqueteId=${paqueteId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar las construcciones de viaje por paqueteId." });
    }
};


// Buscar agencia de viaje por ID desde un cuerpo de JSON en una solicitud POST y guardar la información en una variable
exports.generatorQuotation = async (req, res) => {
    try {
        const { paqueteId, idioma, basePersonas } = req.body;

        const paqueteEnviado = await Paquetes.findByPk(paqueteId);

        const construccionViajeInfo = await ConstruccionViaje.findOne({
            where: {
                paqueteId: paqueteId
            }
        });

        if (construccionViajeInfo) {
            const agenciaDeViaje = await AgenciaDeViaje.findByPk(construccionViajeInfo.agenciaDeViajeId);

            if (agenciaDeViaje) {
                const agenciaInfo = agenciaDeViaje;

                const direccion = await DireccionAgenciaViaje.findOne({ where: { agenciaDeViajeId: agenciaInfo.ID } });
                if (direccion) {
                    agenciaInfo.dataValues.direccion = direccion;
                }

                const agenciaCompleteInfo = await AgenciaViajeInfo.findOne({ where: { AgenciasDeViajeID: agenciaInfo.ID } });
                if (agenciaCompleteInfo) {
                    agenciaInfo.dataValues.complete_information = agenciaCompleteInfo;
                }

                const construccionViajeInfo = await ConstruccionViaje.findOne({ where: { paqueteId: paqueteId } });
                let resumen = "Résumé de votre voyage\n";
                let alojamientosAgregados = [];
                let totalCosto = 0;
                let totalPersonas = 0;
                const productosDescripcion = [];
                if (construccionViajeInfo) {
                    agenciaInfo.dataValues.construccion_viaje = construccionViajeInfo;
                    const viajeId = construccionViajeInfo.id;

                    const viajeProductosInfo = await ViajeProductos.findAll({ where: { viajeId } });
                    const ubicacionesGeograficas = [];

                    if (viajeProductosInfo) {
                        for (const viajeProducto of viajeProductosInfo) {
                            const productoInfo = await Productos.findByPk(viajeProducto.productoId);
                            if (productoInfo) {
                                const proveedorInfo = await Proveedores.findByPk(productoInfo.ProveedorID);
                                const currencyProvider = await Currency.findByPk(proveedorInfo.CurrencyID);

                                const geografiaInfo = await Geografia.findByPk(productoInfo.GeografiaID);
                                if (geografiaInfo) {
                                    productoInfo.dataValues.geografia_info = geografiaInfo;
                                    ubicacionesGeograficas.push({ fecha: viajeProducto.fecha, geografia: geografiaInfo });
                                }

                                const descripcionProducto = await DescripcionProducto.findOne({ where: { productoId: productoInfo.ID } });
                                if (descripcionProducto) {
                                    productosDescripcion.push(descripcionProducto);

                                    if (descripcionProducto.categoria === "Hotel" || descripcionProducto.categoria === "_hot") {
                                        alojamientosAgregados.push(descripcionProducto);
                                    }
                                }

                                // Obtener la divisa por defecto
                                const defaultCurrency = await Currency.findOne({ where: { is_default: true } });

                                let costoUnitario = parseFloat(viajeProducto.costo_unitario);
                                if (defaultCurrency) {
                                    const exchangeRate = parseFloat(defaultCurrency.customer_exchange_rate);
                                    // Convertir el costo a la divisa por defecto
                                    costoUnitario = costoUnitario * exchangeRate;
                                }

                                viajeProducto.dataValues.producto_info = productoInfo;
                                totalCosto += costoUnitario * parseInt(viajeProducto.cantidad);
                                totalPersonas += parseInt(viajeProducto.cantidad);
                            }
                        }
                        agenciaInfo.dataValues.viaje_productos = viajeProductosInfo;
                        agenciaInfo.dataValues.productos_descripcion = productosDescripcion;
                        agenciaInfo.dataValues.alojamientos_agregados = alojamientosAgregados;
                    }

                    if (ubicacionesGeograficas.length > 0) {
                        let dia = 1;
                        for (const ubicacion of ubicacionesGeograficas) {
                            const fecha = new Date(ubicacion.fecha).toLocaleDateString("fr-FR");
                            const nombreLocacion = ubicacion.geografia[`nombre_${idioma}`] || "Nombre no disponible";
                            resumen += `Jour ${dia} - ${fecha}: ${nombreLocacion}\n`;
                            dia++;
                        }
                    }
                }

                const tarifaPorPersona = (totalCosto / 2).toFixed(2); // Ejemplo para n personas
                const tarifaTotal = totalCosto.toFixed(2);

                const defaultCurrency = await Currency.findOne({ where: { is_default: true } });

                res.json({
                    paqueteEnviado,
                    resumen,
                    agenciaInfo,
                    tarifa: {
                        tarifaPorPersona: `${tarifaPorPersona} ${defaultCurrency.abbreviation}`,
                        tarifaTotal: `${tarifaTotal} ${defaultCurrency.abbreviation}`,
                        basePersonas: basePersonas, // Número de personas base para el cálculo
                    },
                    productosDescripcion
                });
            } else {
                res.status(404).send({ message: `No se encontró la agencia de viaje con ID=${paqueteEnviado.agenciaDeViajeId}.` });
            }
        } else {
            res.status(404).send({ message: `No se encontró el paquete con ID=${paqueteId}.` });
        }
    } catch (err) {
        res.status(500).send({ message: err.message || "Ocurrió un error al recuperar la agencia de viaje por ID." });
    }
};
