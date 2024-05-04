// models/venta.js
module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define('Venta', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ClienteID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clientes',
                key: 'ID'
            }
        },
        FechaVenta: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Estado: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'Venta',
        timestamps: false
    });

    return Venta;
};
