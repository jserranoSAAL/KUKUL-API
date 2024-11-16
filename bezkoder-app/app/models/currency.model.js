// models/currency.js
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
      ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      currency_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      abbreviation: {
          type: DataTypes.STRING,
          allowNull: false
      },
      is_default: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
      },
      last_update: {
          type: DataTypes.DATE,
          allowNull: false
      }
  }, {
      tableName: 'Currencies',
      timestamps: false
  });

  Currency.associate = (models) => {
      Currency.hasMany(models.Proveedores, {
          foreignKey: 'CurrencyID',
          as: 'proveedores'
      });
  };

  return Currency;
};
