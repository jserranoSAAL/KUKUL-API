module.exports = (sequelize, DataTypes) => {
    const ProductoCostos = sequelize.define("ProductoCostos", {
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
        divisa: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        tipoCosto: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        paxMax: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ninoPorcentaje: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        bebePorcentaje: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        esComisionable: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        pagadoPorGuia: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        noAplicarGratuidades: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        cantidadDias: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    ProductoCostos.associate = function(models) {
        ProductoCostos.belongsTo(models.Productos, { foreignKey: 'productoId', onDelete: 'CASCADE' });
        ProductoCostos.hasMany(models.ProductoTemporadas, { foreignKey: 'productoCostoId', onDelete: 'CASCADE' });
        ProductoCostos.hasMany(models.ProductoCostosAdicionales, { foreignKey: 'productoCostoId', onDelete: 'CASCADE' });
    };

    return ProductoCostos;
};
