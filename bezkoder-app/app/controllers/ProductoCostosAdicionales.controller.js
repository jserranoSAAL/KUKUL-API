const db = require("../models");
const ProductoCostosAdicionales = db.ProductoCostosAdicionales;

// Crear un nuevo Costo Adicional de Producto
exports.create = async (req, res) => {
    try {
        const { productoCostoId, ...costoAdicionalData } = req.body;

        // Crear un nuevo registro
        const productoCostoAdicional = await ProductoCostosAdicionales.create({
            ...costoAdicionalData,
            productoCostoId
        });
        res.status(201).json({
            message: "Costo Adicional de Producto creado exitosamente.",
            productoCostoAdicional
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Costo Adicional de Producto."
        });
    }
};

// Crear o actualizar un Costo Adicional de Producto (Upsert)
exports.upsert = async (req, res) => {
    try {
        const { productoCostoId, ...costoAdicionalData } = req.body;

        // Buscar si ya existe un registro con el productoCostoId y tipoCosto
        const existingCostoAdicional = await ProductoCostosAdicionales.findOne({
            where: { productoCostoId, tipoCosto: costoAdicionalData.tipoCosto }
        });

        let productoCostoAdicional;
        if (existingCostoAdicional) {
            // Actualizar el registro existente
            productoCostoAdicional = await ProductoCostosAdicionales.update(
                { ...costoAdicionalData },
                { where: { productoCostoId, tipoCosto: costoAdicionalData.tipoCosto } }
            );
            res.status(200).json({
                message: "Costo Adicional de Producto actualizado exitosamente.",
                productoCostoAdicional
            });
        } else {
            // Crear un nuevo registro
            productoCostoAdicional = await ProductoCostosAdicionales.create({
                ...costoAdicionalData,
                productoCostoId
            });
            res.status(201).json({
                message: "Costo Adicional de Producto creado exitosamente.",
                productoCostoAdicional
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear o actualizar el Costo Adicional de Producto."
        });
    }
};

// Buscar Costos Adicionales de Producto por productoCostoId
exports.findByProductoCostoId = async (req, res) => {
    try {
        const productoCostoId = req.params.productoCostoId;
        const productoCostosAdicionales = await ProductoCostosAdicionales.findAll({
            where: { productoCostoId }
        });

        if (productoCostosAdicionales) {
            res.status(200).json(productoCostosAdicionales);
        } else {
            res.status(404).json({
                message: `No se encontraron costos adicionales de producto con productoCostoId=${productoCostoId}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Costos Adicionales de Producto."
        });
    }
};

// Obtener todos los Costos Adicionales de Producto
exports.findAll = async (req, res) => {
    try {
        const productoCostosAdicionales = await ProductoCostosAdicionales.findAll();
        res.status(200).json(productoCostosAdicionales);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Costos Adicionales de Producto."
        });
    }
};

// Obtener un Costo Adicional de Producto por ID
exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const productoCostoAdicional = await ProductoCostosAdicionales.findByPk(id);

        if (productoCostoAdicional) {
            res.status(200).json(productoCostoAdicional);
        } else {
            res.status(404).json({
                message: `No se encontró el costo adicional de producto con ID=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar el Costo Adicional de Producto."
        });
    }
};

// Actualizar un Costo Adicional de Producto por ID
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { productoCostoId, ...costoAdicionalData } = req.body;

        const [num] = await ProductoCostosAdicionales.update(
            { ...costoAdicionalData, productoCostoId },
            { where: { id } }
        );

        if (num == 1) {
            res.status(200).json({
                message: "Costo Adicional de Producto actualizado exitosamente."
            });
        } else {
            res.status(404).json({
                message: `No se pudo actualizar el costo adicional de producto con ID=${id}. Tal vez el Costo Adicional de Producto no fue encontrado o req.body está vacío.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al actualizar el Costo Adicional de Producto."
        });
    }
};

// Eliminar un Costo Adicional de Producto por ID
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const num = await ProductoCostosAdicionales.destroy({ where: { id } });

        if (num == 1) {
            res.status(200).json({
                message: "Costo Adicional de Producto eliminado exitosamente."
            });
        } else {
            res.status(404).json({
                message: `No se pudo eliminar el costo adicional de producto con ID=${id}. Tal vez el Costo Adicional de Producto no fue encontrado.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "No se pudo eliminar el Costo Adicional de Producto con ID=" + id
        });
    }
};

// Calcular costos adicionales totales
exports.calcularCostosAdicionales = async (req, res) => {
    try {
        const { productoCostoId, cantidadPax, fecha } = req.body; // recibir fecha y cantidad de pasajeros

        // Log de entrada
        console.log('Datos recibidos:', { productoCostoId, cantidadPax, fecha });

        // Convertir la fecha a un objeto Date
        const fechaConsulta = new Date(fecha);

        // Obtener costos adicionales para el producto
        const costosAdicionales = await ProductoCostosAdicionales.findAll({
            where: { productoCostoId }
        });

        // Log de costos adicionales obtenidos
        console.log('Costos adicionales obtenidos:', costosAdicionales);

        let totalCostosAdicionales = 0;
        const desglose = [];

        // Lógica para calcular los costos adicionales basados en las condiciones
        costosAdicionales.forEach(costo => {
            // Log de cada costo en el bucle
            console.log('Evaluando costo:', costo.dataValues);

            // Convertir las fechas de inicio y fin a objetos Date
            const fechaInicio = new Date(costo.fechaInicio);
            const fechaFin = new Date(costo.fechaFin);

            if (costo.dePax <= cantidadPax && costo.aPax >= cantidadPax) {
                // Comparar las fechas correctamente
                if (fechaInicio <= fechaConsulta && fechaFin >= fechaConsulta) {
                    let costoAplicado = parseFloat(costo.valor); // Asegúrate de convertir el valor a un número

                    // Verifica que costoAplicado sea un número válido
                    if (isNaN(costoAplicado)) {
                        console.error(`Valor no válido para costo: ${costo.valor}`);
                        return; // Salir si no es un número
                    }

                    // Aplicar porcentaje si existe
                    if (costo.porcentaje) {
                        const porcentajeAplicado = parseFloat(costo.porcentaje) / 100;
                        costoAplicado += costoAplicado * porcentajeAplicado; // Convertir porcentaje a número
                    }

                    // Log del costo aplicado
                    console.log('Costo aplicado:', costoAplicado);

                    totalCostosAdicionales += costoAplicado; // Sumar el costo aplicado
                    desglose.push({
                        tipoCosto: costo.tipoCosto,
                        costoBase: costo.valor,
                        porcentaje: costo.porcentaje,
                        costoAplicado
                    });
                }
            }
        });

        // Log del total de costos adicionales
        console.log('Total costos adicionales:', totalCostosAdicionales);

        res.status(200).json({ totalCostosAdicionales, desglose });
    } catch (err) {
        console.error('Error en calcularCostosAdicionales:', err); // Log del error
        res.status(500).send({
            message: err.message || "Ocurrió un error al calcular los costos adicionales."
        });
    }
};






// Obtener detalles de costos adicionales para un producto
exports.obtenerDetallesCostosAdicionales = async (req, res) => {
    try {
        const productoCostoId = req.params.productoCostoId;
        const costosAdicionales = await ProductoCostosAdicionales.findAll({
            where: { productoCostoId }
        });

        res.status(200).json(costosAdicionales);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al obtener los detalles de costos adicionales."
        });
    }
};

// Generar cotización
exports.generarCotizacion = async (req, res) => {
    try {
        const { productoCostoId, cantidadPax, fecha } = req.body;

        // Obtener costo base del producto
        const productoBase = await db.ProductoCostos.findByPk(productoCostoId);
        const costoBase = productoBase ? parseFloat(productoBase.valor) : 0; // Asegurarse de que el valor sea un número

        // Convertir fecha a objeto Date
        const fechaConsulta = new Date(fecha);

        // Calcular costos adicionales
        const { totalCostosAdicionales, desglose } = await this.calcularCostosAdicionales(req, res);

        // Sumar total para la cotización
        const totalCotizacion = costoBase + totalCostosAdicionales;

        res.status(200).json({
            productoCostoId,
            cantidadPax,
            totalCotizacion,
            desglose,
            costosAdicionales: await ProductoCostosAdicionales.findAll({ where: { productoCostoId } })
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al generar la cotización."
        });
    }
};


// Filtrar costos adicionales por condiciones
exports.filtrarCostosAdicionales = async (req, res) => {
    try {
        const { productoCostoId, cantidadPax, fecha } = req.body;

        // Convertir fecha a objeto Date
        const fechaConsulta = new Date(fecha);

        const costosAdicionales = await ProductoCostosAdicionales.findAll({
            where: { productoCostoId }
        });

        const costosFiltrados = costosAdicionales.filter(costo => {
            // Convertir las fechas de inicio y fin a objetos Date
            const fechaInicio = new Date(costo.fechaInicio);
            const fechaFin = new Date(costo.fechaFin);

            return (
                costo.dePax <= cantidadPax &&
                costo.aPax >= cantidadPax &&
                fechaInicio <= fechaConsulta && 
                fechaFin >= fechaConsulta
            );
        });

        res.status(200).json(costosFiltrados);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al filtrar los costos adicionales."
        });
    }
};


