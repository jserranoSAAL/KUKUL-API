module.exports = (sequelize, DataTypes) => {
  const CuentasBancarias = sequelize.define("CuentasBancarias", {
      ID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      AgenciasDeViajeID: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      Banco: {
          type: DataTypes.STRING
      },
      Moneda: {
          type: DataTypes.STRING(10)
      },
      NumeroCuenta: {
          type: DataTypes.STRING
      },
      Beneficiario: {
          type: DataTypes.STRING
      },
      CodigoSWIFT: {
          type: DataTypes.STRING
      },
      PorDefecto: {
          type: DataTypes.BOOLEAN
      }
  }, {
      tableName: "CuentasBancarias",
      timestamps: false
  });

  CuentasBancarias.associate = models => {
      CuentasBancarias.belongsTo(models.AgenciasDeViaje, {
          foreignKey: 'AgenciasDeViajeID',
          as: 'agencia'
      });
  };

  return CuentasBancarias;
};
