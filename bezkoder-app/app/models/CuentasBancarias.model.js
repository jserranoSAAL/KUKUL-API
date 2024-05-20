module.exports = (sequelize, DataTypes) => {
    const CuentasBancarias = sequelize.define("CuentasBancarias", {
      Banco: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Moneda: {
        type: DataTypes.STRING,
        allowNull: false
      },
      NumeroCuenta: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Beneficiario: {
        type: DataTypes.STRING,
        allowNull: false
      },
      CodigoSWIFT: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PorDefecto: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    CuentasBancarias.associate = models => {
      CuentasBancarias.belongsTo(models.Finanzas, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return CuentasBancarias;
  };
  