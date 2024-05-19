module.exports = (sequelize, DataTypes) => {
    const ParametrosEmails = sequelize.define('ParametrosEmails', {
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
      EnviarPropuesta: DataTypes.TEXT,
      EnviarFacturas: DataTypes.TEXT,
      Inscripcion: DataTypes.TEXT,
      AccesoProspecto: DataTypes.TEXT,
      Seguimiento: DataTypes.TEXT,
    });
  
    ParametrosEmails.associate = function(models) {
      ParametrosEmails.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };
  
    return ParametrosEmails;
  };
  