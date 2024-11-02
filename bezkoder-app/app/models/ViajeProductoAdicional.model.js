// models/viajeProductoAdicional.model.js
module.exports = (sequelize, DataTypes) => {
    const ViajeProductoAdicional = sequelize.define('ViajeProductoAdicional', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        viajeProductoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ViajeProductos', // Asegúrate de que coincida con el nombre de la tabla de `ViajeProducto`
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        productoCostoAdicionalId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ProductoCostosAdicionales',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        comentario: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'ViajeProductoAdicionales',
        timestamps: true
    });

    ViajeProductoAdicional.associate = function(models) {
        ViajeProductoAdicional.belongsTo(models.ViajeProducto, { foreignKey: 'viajeProductoId', onDelete: 'CASCADE' });
        ViajeProductoAdicional.belongsTo(models.ProductoCostosAdicionales, { foreignKey: 'productoCostoAdicionalId', onDelete: 'CASCADE' });
    };

    return ViajeProductoAdicional;
};
