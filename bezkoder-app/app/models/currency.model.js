// models/currency.js
module.exports = (sequelize, DataTypes) => {
    const Currency = sequelize.define('Currency', {
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
      customer_exchange_rate: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false
      },
      supplier_exchange_rate: {
        type: DataTypes.DECIMAL(10, 6),
        allowNull: false
      },
      last_update: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'Currencies'
    });
  
    return Currency;
  };
  