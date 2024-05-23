module.exports = (sequelize, DataTypes) => {
    const ProductoInfos = sequelize.define("ProductoInfos", {
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
        edadMin: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        edadMax: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cantidadPersonasMin: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cantidadPersonasMax: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tiempoEstadiaMin: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tiempoEstadiaMax: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        diasPreaviso: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        archivo: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    ProductoInfos.associate = function(models) {
        ProductoInfos.belongsTo(models.Productos, { foreignKey: 'productoId', onDelete: 'CASCADE' });
    };

    return ProductoInfos;
};
