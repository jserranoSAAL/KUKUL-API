module.exports = (sequelize, DataTypes) => {
    const ParametrosCotizacion = sequelize.define('ParametrosCotizacion', {
      ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      AgenciasDeViajeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'AgenciasDeViaje',
          key: 'ID',
        },
      },
      TipoBase: DataTypes.STRING,
      ModoCalculo: DataTypes.STRING,
      TipoMargen: DataTypes.STRING,
      Moneda: DataTypes.STRING,
      CostoExtra: DataTypes.DECIMAL(10, 2),
      CotizacionesValidas: DataTypes.INTEGER,
      AplicarComision: DataTypes.BOOLEAN,
      AplicarImpuesto: DataTypes.BOOLEAN,
    });
  
    ParametrosCotizacion.associate = function(models) {
      ParametrosCotizacion.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };
  
    return ParametrosCotizacion;
  };
  