const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar los modelos
db.Usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.Reservas = require("./reserva.model.js")(sequelize, Sequelize);
db.Paquetes = require("./paquete.model.js")(sequelize, Sequelize);
db.DetallesReservas = require("./detallesReserva.model.js")(sequelize, Sequelize);
db.Proveedores = require("./proveedor.model.js")(sequelize, Sequelize);
db.Productos = require("./producto.model.js")(sequelize, Sequelize);
db.AgenciasDeViaje = require('./agenciaDeViaje.model')(sequelize, Sequelize.DataTypes);
db.AgenciasDeViajeInformacion = require('./agenciasDeViajeInformacion.model')(sequelize, Sequelize.DataTypes);
db.Contactos = require('./contactos.model')(sequelize, Sequelize.DataTypes);
db.Direcciones = require('./direcciones.model')(sequelize, Sequelize.DataTypes);
db.ExtranetClient = require('./extranetClient.model')(sequelize, Sequelize.DataTypes);
db.ParametrosCotizacion = require('./parametrosCotizacion.model')(sequelize, Sequelize.DataTypes);
db.ParametrosDocumentos = require('./parametrosDocumentos.model')(sequelize, Sequelize.DataTypes);
db.ParametrosEmails = require('./parametrosEmails.model')(sequelize, Sequelize.DataTypes);
db.Categorias = require("./categoria.model.js")(sequelize, Sequelize);
db.Geografia = require("./geografia.model.js")(sequelize, Sequelize);
db.CreditosDebitos = require("./creditosDebitos.model.js")(sequelize, Sequelize);
db.Gastos = require("./gastos.model.js")(sequelize, Sequelize);
db.Grupo = require("./grupo.model.js")(sequelize, Sequelize);
db.Logistica = require("./logistica.model.js")(sequelize, Sequelize);
db.Facturas = require("./facturas.model.js")(sequelize, Sequelize);
db.Ingresos = require("./ingresos.model.js")(sequelize, Sequelize);
db.Personas = require("./personas.model.js")(sequelize, Sequelize);
db.ProspectoVenta = require("./prospectoVenta.model.js")(sequelize, Sequelize);
db.ProyectoVenta = require("./proyectoVenta.model.js")(sequelize, Sequelize);
db.Tarifario = require("./tarifario.model.js")(sequelize, Sequelize);
db.Addresses = require("./addresses.model.js")(sequelize, Sequelize);
db.ContactInfo = require("./contactInfo.model.js")(sequelize, Sequelize);
db.Logos = require("./logos.model.js")(sequelize, Sequelize);
db.Websites = require("./websites.model.js")(sequelize, Sequelize);
db.Slogans = require("./slogans.model.js")(sequelize, Sequelize);
db.TermsAndConditions = require("./termsAndConditions.model.js")(sequelize, Sequelize);
db.Miscellaneous = require("./miscellaneous.model.js")(sequelize, Sequelize);
db.MetodosDePago = require("./metodosPago.model.js")(sequelize, Sequelize);
db.PoliticasCancelacion = require("./politicasCancelacion.model.js")(sequelize, Sequelize);
db.Traduccion = require("./traduccion.model.js")(sequelize, Sequelize);
db.ImpuestoAduana = require("./impuestoAduana.model.js")(sequelize, Sequelize);
db.CreditosDebitosProveedores = require("./creditosDebitosProveedores.model.js")(sequelize, Sequelize);
db.BancosDeProveedores = require("./bancosDeProveedores.model.js")(sequelize, Sequelize);
db.CategoriasDeProveedores = require("./CategoriasDeProveedores.model.js")(sequelize, Sequelize);
db.Pais = require("./paises.model.js")(sequelize, Sequelize);
db.Estado = require("./estado.model.js")(sequelize, Sequelize);
db.Lugares = require("./lugar.model.js")(sequelize, Sequelize);
db.ImagenesLugar = require("./imagenesLugar.model.js")(sequelize, Sequelize);
db.TranslationNameProduct = require("./translationNameProduct.model.js")(sequelize, Sequelize);
db.DescriptionProduct = require("./descriptionProduct.model.js")(sequelize, Sequelize);
db.TravelBookProduct = require("./travelBookProduct.model.js")(sequelize, Sequelize);
db.Currency = require("./currency.model.js")(sequelize, Sequelize);
db.Costos = require("./costos.model.js")(sequelize, Sequelize);
db.Venta = require("./venta.model.js")(sequelize, Sequelize);
db.DetalleVenta = require("./detalleVenta.model.js")(sequelize, Sequelize);
db.Cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.Finanzas = require("./finanzas.model.js")(sequelize, Sequelize);
db.CreditosDeudasDetalle = require("./CreditosDeudasDetalle.model.js")(sequelize, Sequelize);
db.CuentasBancarias = require("./CuentasBancarias.model.js")(sequelize, Sequelize);
db.ParametrosFinanzas = require("./ParametrosFinanzas.model.js")(sequelize, Sequelize);
db.TipoDeTasa = require("./TipoDeTasa.model.js")(sequelize, Sequelize);
db.PoliticaDeCancelacion = require("./PoliticaDeCancelacion.model.js")(sequelize, Sequelize);
db.MetodoDePago = require("./MetodoDePago.model.js")(sequelize, Sequelize);

// Definir asociaciones
db.AgenciasDeViaje.associate = function(models) {
    db.AgenciasDeViaje.hasOne(models.AgenciasDeViajeInformacion, { foreignKey: 'AgenciasDeViajeID', as: 'informacion' });
    db.AgenciasDeViaje.hasMany(models.Contactos, { foreignKey: 'AgenciasDeViajeID', as: 'contactos' });
    db.AgenciasDeViaje.hasOne(models.Direcciones, { foreignKey: 'AgenciasDeViajeID', as: 'direccion' });
    db.AgenciasDeViaje.hasOne(models.ExtranetClient, { foreignKey: 'AgenciasDeViajeID', as: 'extranetClient' });
    db.AgenciasDeViaje.hasMany(models.ParametrosCotizacion, { foreignKey: 'AgenciasDeViajeID', as: 'cotizaciones' });
    db.AgenciasDeViaje.hasMany(models.ParametrosDocumentos, { foreignKey: 'AgenciasDeViajeID', as: 'documentos' });
    db.AgenciasDeViaje.hasMany(models.ParametrosEmails, { foreignKey: 'AgenciasDeViajeID', as: 'emails' });
    db.AgenciasDeViaje.hasMany(models.PoliticaDeCancelacion, { foreignKey: 'AgenciasDeViajeID', as: 'politicasDeCancelacion' });
};

db.AgenciasDeViajeInformacion.associate = function(models) {
    db.AgenciasDeViajeInformacion.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.Contactos.associate = function(models) {
    db.Contactos.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.Direcciones.associate = function(models) {
    db.Direcciones.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.ExtranetClient.associate = function(models) {
    db.ExtranetClient.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.ParametrosCotizacion.associate = function(models) {
    db.ParametrosCotizacion.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.ParametrosDocumentos.associate = function(models) {
    db.ParametrosDocumentos.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.ParametrosEmails.associate = function(models) {
    db.ParametrosEmails.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
};

db.Finanzas.associate = function(models) {
    db.Finanzas.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    db.Finanzas.hasMany(models.CreditosDeudasDetalle, { foreignKey: 'FinanzasID', as: 'creditosDeudasDetalle' });
    db.Finanzas.hasMany(models.CuentasBancarias, { foreignKey: 'FinanzasID', as: 'cuentasBancarias' });
    db.Finanzas.hasMany(models.ParametrosFinanzas, { foreignKey: 'FinanzasID', as: 'parametrosFinanzas' });
};

db.ParametrosFinanzas.associate = function(models) {
    db.ParametrosFinanzas.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    db.ParametrosFinanzas.hasMany(models.PoliticaDeCancelacion, { foreignKey: 'ParametrosFinanzasID', as: 'politicasDeCancelacion' });
    db.ParametrosFinanzas.hasMany(models.TipoDeTasa, { foreignKey: 'ParametrosFinanzasID', as: 'tiposDeTasa' });
    db.ParametrosFinanzas.hasMany(models.MetodoDePago, { foreignKey: 'ParametrosFinanzasID', as: 'metodosDePago' });
};

db.PoliticaDeCancelacion.associate = function(models) {
    db.PoliticaDeCancelacion.belongsTo(models.ParametrosFinanzas, { foreignKey: 'ParametrosFinanzasID', as: 'parametrosFinanzas' });
};

db.TipoDeTasa.associate = function(models) {
    db.TipoDeTasa.belongsTo(models.ParametrosFinanzas, { foreignKey: 'ParametrosFinanzasID', as: 'parametrosFinanzas' });
};

db.MetodoDePago.associate = function(models) {
    db.MetodoDePago.belongsTo(models.ParametrosFinanzas, { foreignKey: 'ParametrosFinanzasID', as: 'parametrosFinanzas' });
};


// Importar los modelos
db.CentroFinanciero = require("./centrosFinancieros.model.js")(sequelize, Sequelize);
db.CentroFinancieroDefault = require("./centrosFinancierosDefault.model.js")(sequelize, Sequelize);

// Definir las asociaciones
db.CentroFinanciero.hasMany(db.CentroFinancieroDefault, { foreignKey: 'centro_financiero_id' });
db.CentroFinancieroDefault.belongsTo(db.CentroFinanciero, { foreignKey: 'centro_financiero_id' });

// Importar los modelos
db.EstadoPago = require("./estadosPago.model.js")(sequelize, Sequelize);


// Importar los modelos
db.ParametroLogisticaGeneral = require("./parametrosLogisticaGeneral.model.js")(sequelize, Sequelize);


// Importar los modelos
db.CentroDeOperacion = require("./centrosDeOperacion.model.js")(sequelize, Sequelize);

// Importar los modelos
db.TareaAutomaticaLogistica = require("./tareasAutomaticasLogistica.model.js")(sequelize, Sequelize);


// Importar los modelos
db.EstadoReservacion = require("./estadoReservacion.model.js")(sequelize, Sequelize);


db.DescripcionProducto = require('./descripcionProducto.model.js')(sequelize, Sequelize);

db.ProductoInfos = require("./productoInfos.model.js")(sequelize, Sequelize);


db.ProductoCostos = require("./ProductoCostos.model.js")(sequelize, Sequelize);
db.ProductoTemporadas = require("./ProductoTemporadas.model.js")(sequelize, Sequelize);
db.ProductoCostosAdicionales = require("./ProductoCostosAdicionales.model.js")(sequelize, Sequelize);
db.ProductoLogistica = require("./productoLogistica.model.js")(sequelize, Sequelize);
db.ProductoCupo = require("./productoCupo.model.js")(sequelize, Sequelize);
db.ProductoAdmin = require("./productoAdmin.model.js")(sequelize, Sequelize);
db.ProveedoresInfo = require("./proveedoresInfo.model.js")(sequelize, Sequelize);;
db.ProveedoresContactos = require("./ProveedoresContactos.model")(sequelize, Sequelize);

db.ProveedoresFinanzas = require("./ProveedoresFinanzas.model.js")(sequelize, Sequelize);
db.CuentasBancariasProveedor = require("./CuentasBancariasProveedor.model.js")(sequelize, Sequelize);

db.ProveedoresLogistica = require("./ProveedoresLogistica.model")(sequelize, Sequelize);

db.ProveedoresDescripcionImagenes = require("./ProveedoresDescripcionImagenes.model")(sequelize, Sequelize);

// Añadir esta línea donde se importan los modelos
db.TarifarioGeneral = require("./tarifarioGeneral.model.js")(sequelize, Sequelize);

db.ConstruccionViaje = require("./construccionViaje.model.js")(sequelize, Sequelize);
db.ViajeProducto = require("./viajeProducto.model.js")(sequelize, Sequelize);

// Asociaciones
db.ConstruccionViaje.hasMany(db.ViajeProducto, { foreignKey: 'viajeId', onDelete: 'CASCADE' });
db.ViajeProducto.belongsTo(db.ConstruccionViaje, { foreignKey: 'viajeId', onDelete: 'CASCADE' });
db.ViajeProducto.belongsTo(db.Productos, { foreignKey: 'productoId', onDelete: 'CASCADE' });


db.CotizacionesTarifario = require("./CotizacionesTarifario.model")(sequelize, Sequelize);
db.ParametrosCotizacionTarifario = require("./ParametrosCotizacionTarifario.model")(sequelize, Sequelize);
db.PreciosCalculadosTarifario = require("./PreciosCalculadosTarifario.model")(sequelize, Sequelize);

// Agregar relaciones
db.ConstruccionViaje.associate = function(models) {
    ConstruccionViaje.hasMany(models.ViajeProducto, { foreignKey: 'viajeId', onDelete: 'CASCADE' });
    ConstruccionViaje.belongsTo(models.AgenciasDeViaje, { foreignKey: 'agenciaDeViajeId', onDelete: 'CASCADE' });
    ConstruccionViaje.belongsTo(models.Paquetes, { foreignKey: 'paqueteId', onDelete: 'CASCADE' });
};

db.CotizacionesPaquete = require("./cotizacionesPaquete.model")(sequelize, Sequelize);
db.ParametrosCotizacionPaquete = require("./parametrosCotizacionPaquete.model")(sequelize, Sequelize);
db.PreciosCalculadosPaquete = require("./preciosCalculadosPaquete.model")(sequelize, Sequelize);


db.ParametrosCotizacionPaquete = require("./parametrosCotizacionPaquete.model.js")(sequelize, Sequelize);
db.PreciosCalculadosPaquete = require("./preciosCalculadosPaquete.model.js")(sequelize, Sequelize);;

db.ParametrosCotizacionPaquete.associate(db);
db.PreciosCalculadosPaquete.associate(db);

db.DireccionAgenciaViaje = require("./direccionAgenciaViaje.model.js")(sequelize, Sequelize);;

// Associations
db.Geografia.associate(db);
db.Productos.associate(db);

// Definir las relaciones
db.Productos.hasOne(db.DescripcionProducto, {
    foreignKey: 'productoId',
    as: 'descripcion'
});
db.DescripcionProducto.belongsTo(db.Productos, {
    foreignKey: 'productoId',
    as: 'productos'
});

// Definir las asociaciones de Paquete y Grupo
db.Paquetes.associate = function(models) {
    db.Paquetes.belongsTo(models.Grupo, { foreignKey: 'GrupoId', as: 'grupos' });
};

db.Grupo.associate = function(models) {
    db.Grupo.hasMany(models.Paquetes, { foreignKey: 'GrupoId', as: 'paquete' });
};

db.CotizacionFinal = require("./CotizacionFinal.model.js")(sequelize, Sequelize);

// Asociaciones de CotizacionFinal
db.CotizacionFinal.associate = function(models) {
    db.CotizacionFinal.belongsTo(models.Paquetes, { foreignKey: 'paquete_id', as: 'paquete' });
};



// Continuar definiendo otras relaciones necesarias entre los modelos

module.exports = db;
