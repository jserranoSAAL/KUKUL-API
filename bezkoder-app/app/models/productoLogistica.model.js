module.exports = (sequelize, DataTypes) => {
    const ProductoLogistica = sequelize.define("ProductoLogistica", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        proveedorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Proveedores',
                key: 'ID'
            },
            onDelete: 'CASCADE'
        },
        agenteReservas: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        plantillaVoucher: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        nota: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        reservationNumber: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        notaInterna: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    ProductoLogistica.associate = function(models) {
        ProductoLogistica.belongsTo(models.Productos, { foreignKey: 'productoId', onDelete: 'CASCADE' });
        ProductoLogistica.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return ProductoLogistica;
};
