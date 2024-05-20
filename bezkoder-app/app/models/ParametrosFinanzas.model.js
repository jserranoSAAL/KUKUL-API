// models/ParametrosFinanzas.js
module.exports = (sequelize, DataTypes) => {
    const ParametrosFinanzas = sequelize.define('ParametrosFinanzas', {
      NumeroDeLicencia: DataTypes.STRING,
      MonedaDeFinanzas: DataTypes.STRING,
      MonedaPreferida: DataTypes.STRING,
      NumeroDeImpuesto: DataTypes.STRING,
      IngresoTipoImpuestoPorDefecto: DataTypes.STRING,
      GastoTipoImpuestoPorDefecto: DataTypes.STRING,
      MostrarFacturasValorCero: DataTypes.BOOLEAN,
      SiempreAplicarTasa1: DataTypes.BOOLEAN,
      Tasa1PrecioVenta: DataTypes.DECIMAL,
      Tasa2MargenVenta: DataTypes.DECIMAL,
      OPCTax: DataTypes.DECIMAL,
      OPCDescuento: DataTypes.DECIMAL,
      AplicarTaxDetail: DataTypes.BOOLEAN,
      NumeroDeProximaFactura: DataTypes.STRING,
      IncluirTipoEnFacturaIndividual: DataTypes.BOOLEAN,
      AgenciasDeViajeID: DataTypes.INTEGER
    });
  
    ParametrosFinanzas.associate = function(models) {
      ParametrosFinanzas.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID' });
      ParametrosFinanzas.hasMany(models.PoliticaDeCancelacion, { foreignKey: 'ParametrosFinanzasID' });
      ParametrosFinanzas.hasMany(models.TipoDeTasa, { foreignKey: 'ParametrosFinanzasID' });
      ParametrosFinanzas.hasMany(models.MetodoDePago, { foreignKey: 'ParametrosFinanzasID' });
    };
  
    return ParametrosFinanzas;
  };
  