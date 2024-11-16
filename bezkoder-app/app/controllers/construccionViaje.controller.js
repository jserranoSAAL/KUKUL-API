// controllers/construccionViaje.controller.js
const db = require('../models');
const ConstruccionViaje = db.ConstruccionViaje;
const AgenciaDeViaje = db.AgenciasDeViaje;
const DireccionAgenciaViaje = db.DireccionAgenciaViaje;
const AgenciaViajeInfo = db.AgenciasDeViajeInformacion;
const ViajeProductos = db.ViajeProducto;
const Cliente = db.Cliente;
const ClienteGrupo = db.ClienteGrupo;
const ClienteViajeProducto = db.ClienteViajeProducto;
const Productos = db.Productos;
const ProductoCostos = db.ProductoCostos;
const ProductoTemporadas = db.ProductoTemporadas;
const Geografia = db.Geografia;
const DescripcionProducto = db.DescripcionProducto;
const Paquetes = db.Paquetes;
const Proveedores = db.Proveedores;
const Currency = db.Currency;
const CurrencyRates = db.CurrencyRates;


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
        var debug = [];

        const { paqueteId, idioma, clientPerProducts } = req.body;

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
                let viajeProductosInfo = [];
                let totalCosto = 0;
                let totalPersonas = 0;
                const productosDescripcion = [];

                if (construccionViajeInfo) {
                    agenciaInfo.dataValues.construccion_viaje = construccionViajeInfo;
                    const viajeId = construccionViajeInfo.id;

                    //const viajeProductosInfo = await ViajeProductos.findAll({ where: { viajeId } });
                    const ubicacionesGeograficas = [];

                    if (clientPerProducts) {
                        for (const cPerProduct of clientPerProducts) {
                            //Data del cliente
                            const clientData = await Cliente.findByPk(cPerProduct.idClient);

                            for(const viajeProduct of cPerProduct.idViajeProducts){
                                const viajeProductData = await ViajeProductos.findByPk(viajeProduct.id);
                                const productoInfo = await Productos.findByPk(viajeProductData.productoId);

                                viajeProductosInfo.push(viajeProductData);

                                if (productoInfo) {
                                    const proveedorInfo = await Proveedores.findByPk(productoInfo.ProveedorID);
                                    const currencyProvider = await Currency.findByPk(proveedorInfo.CurrencyID);

                                    const geografiaInfo = await Geografia.findByPk(productoInfo.GeografiaID);
                                    if (geografiaInfo) {
                                        productoInfo.dataValues.geografia_info = geografiaInfo;
                                        ubicacionesGeograficas.push({ fecha: viajeProductData.fecha, geografia: geografiaInfo });
                                    }

                                    const descripcionProducto = await DescripcionProducto.findOne({ where: { productoId: productoInfo.ID } });
                                    if (descripcionProducto) {
                                        productosDescripcion.push(descripcionProducto);

                                        if (descripcionProducto.categoria === "Hotel" || descripcionProducto.categoria === "_hot") {
                                            alojamientosAgregados.push(descripcionProducto);
                                        }
                                    }

                                    
                                    //Modificar costo unitario en base a promociones y rango
                                    let costoUnitario = parseFloat(viajeProductData.costo_unitario);
                                    
                                    const productoCostoData = await ProductoCostos.findOne({
                                        where: { productoId: viajeProductData.productoId}
                                    });

                                    // Obtener la divisa por defecto
                                    const defaultCurrency = await Currency.findOne({ where: { is_default: true } });

                                    const productCurrencyAbbreviation = productoCostoData.divisa;
                                    const productCurrencyData = await Currency.findOne({where: {abbreviation:productCurrencyAbbreviation}});
                                    
                                    
                                    if(productCurrencyData.ID != defaultCurrency.ID){
                                        const currencyRateExchangeData = await CurrencyRates.findOne({where:{
                                            from_currency_id:productCurrencyData.ID,
                                            to_currency_id:defaultCurrency.ID
                                        }
                                        });
                                        if (currencyRateExchangeData != null) {
                                            const exchangeRate = parseFloat(currencyRateExchangeData.exchange_rate);
                                            // Convertir el costo a la divisa por defecto
                                            costoUnitario = costoUnitario * exchangeRate;
                                        }
                                    }
                                    
                                    const productoTemporadaData = await ProductoTemporadas.findOne({
                                        where: { productoCostoId: productoCostoData.id}
                                    });
                                    
                                    const currentDate = Date.now();

                                    //Revisamos si estamos en el rango de fechas correspondientes
                                    if(currentDate >= Date.parse(productoTemporadaData.fechaInicio) && currentDate <= Date.parse(productoTemporadaData.fechaFin)){
                                        const day = new Date().getDay();
                                        
                                        var contDiscount = false;
                                        switch (day) {
                                            case 0: //Domingo
                                                contDiscount = productoTemporadaData.domingo == 1;
                                                break;
                                            case 1: //Lunes
                                                contDiscount = productoTemporadaData.lunes == 1;
                                                break;
                                            case 2: //Martes
                                                contDiscount = productoTemporadaData.martes == 1;
                                                break;
                                            case 3: //Miercoles
                                                contDiscount = productoTemporadaData.miercoles == 1;
                                                break;
                                            case 4: //Jueves
                                                contDiscount = productoTemporadaData.jueves == 1;
                                                break;
                                            case 5: //Viernes
                                                contDiscount = productoTemporadaData.viernes == 1;
                                                break;
                                            case 6: //Sabado
                                                contDiscount = productoTemporadaData.sabado == 1;
                                                break;
                                            default:
                                                break;
                                        }
                                        //debug.push(cont);
                                        // Podemos continuar con el descuento ya que esta habilitado para el dia de hoy
                                        if(contDiscount){
                                            //Edad
                                            const typeAge = GetIfChildOrBaby(productoCostoData,clientData.Edad);
                                            var dis = 0;
                                            switch (typeAge) {
                                                case 0: //Bebe
                                                    dis = (productoTemporadaData.bebe*0.01) * costoUnitario;
                                                    break;
                                                case 1: //Ninio
                                                    dis = (productoTemporadaData.nino*0.01) * costoUnitario;
                                                    break;
                                                case 2: //Adulto
                                                    //No hay descuento
                                                    break;
                                                default:
                                                    break;
                                            }
                                            
                                            costoUnitario = costoUnitario - dis;
                                            debug.push("costo:"+ costoUnitario);
                                        }
                                        
                                    }
                                    
                                    //debug.push(Date.parse(productoTemporadaData.fechaInicio));

                                    viajeProductData.dataValues.producto_info = productoInfo;
                                    totalCosto += costoUnitario * parseInt(viajeProductData.cantidad);                                    
                                }
                                //Guardar relacion cliente producto
                                const idGrupo = paqueteEnviado.GrupoId;
                                const idClienteGrupo = await ClienteGrupo.findOne({where:{ IdCliente:clientData.ID,IdGrupo:idGrupo}}) 
                                
                                const clienteViajeProductoObj = {
                                    IdClienteGrupo: idClienteGrupo.ID,
                                    IdViajeProducto: viajeProduct.id
                                };
                                await ClienteViajeProducto.destroy({where:{IdClienteGrupo: idClienteGrupo.ID,IdViajeProducto: viajeProduct.id}});
                                let createdObj = await ClienteViajeProducto.create(clienteViajeProductoObj);
                            }
                            totalPersonas++;

                            
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

                const tarifaPorPersona = (totalCosto / totalPersonas).toFixed(2); // Ejemplo para n personas
                const tarifaTotal = totalCosto.toFixed(2);

                const defaultCurrency = await Currency.findOne({ where: { is_default: true } });


                res.json({
                    paqueteEnviado,
                    resumen,
                    agenciaInfo,
                    tarifa: {
                        tarifaPorPersona: `${tarifaPorPersona} ${defaultCurrency.abbreviation}`,
                        tarifaTotal: `${tarifaTotal} ${defaultCurrency.abbreviation}`,
                        totalPersonas: totalPersonas, // Número de personas base para el cálculo
                    },
                    productosDescripcion,
                    debug: debug
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

function GetIfChildOrBaby(dataRange,clientAge){

    //Si es bebe
    if(clientAge >= dataRange.rangoEdadBebesInicio && clientAge <= dataRange.rangoEdadBebesFin){
        return 0;
    }
    //Si es ninio
    else if(clientAge >= dataRange.rangoEdadNinosInicio && clientAge <= dataRange.rangoEdadNinosFin){
        return 1;
    }
    //Si es adulto
    return 2;
    
}