// models/detalleVenta.js
module.exports = (sequelize, DataTypes) => {
    const DetalleVenta = sequelize.define('DetalleVenta', {
        VentaID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Venta',
                key: 'ID'
            },
            primaryKey: true
        },
        ProductoID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Productos',
                key: 'ID'
            },
            primaryKey: true
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Subtotal: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        tableName: 'DetalleVenta',
        timestamps: false
    });

    return DetalleVenta;
};
