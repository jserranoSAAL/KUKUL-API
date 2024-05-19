module.exports = (sequelize, DataTypes) => {
    const ParametrosDocumentos = sequelize.define('ParametrosDocumentos', {
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
      Cotizacion: DataTypes.STRING,
      DiarioViaje: DataTypes.STRING,
      FormInfo: DataTypes.STRING,
      CotizacionesEditables: DataTypes.BOOLEAN,
      Idioma: DataTypes.STRING,
    });
  
    ParametrosDocumentos.associate = function(models) {
      ParametrosDocumentos.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };
  
    return ParametrosDocumentos;
  };
  