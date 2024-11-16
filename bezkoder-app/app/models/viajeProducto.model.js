// models/viajeProducto.model.js
module.exports = (sequelize, DataTypes) => {
    const ViajeProducto = sequelize.define('ViajeProductos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        viajeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ConstruccionViajes',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        productoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Productos',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: true
        },
        hora_inicio: {
            type: DataTypes.TIME,
            allowNull: true
        },
        hora_fin: {
            type: DataTypes.TIME,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        costo_unitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        fecha_salida: {
            type: DataTypes.DATE,
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
    });

    ViajeProducto.associate = function(models) {
        ViajeProducto.belongsTo(models.ConstruccionViaje, { foreignKey: 'viajeId', onDelete: 'CASCADE' });
        ViajeProducto.belongsTo(models.Producto, { foreignKey: 'productoId', onDelete: 'CASCADE' });
    };

    return ViajeProducto;
};
