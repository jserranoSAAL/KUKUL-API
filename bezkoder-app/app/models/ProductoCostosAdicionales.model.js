module.exports = (sequelize, DataTypes) => {
    const ProductoCostosAdicionales = sequelize.define("ProductoCostosAdicionales", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productoCostoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ProductoCostos',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        tipoCosto: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        fechaInicio: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fechaFin: {
            type: DataTypes.DATE,
            allowNull: true
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        comentarios: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    ProductoCostosAdicionales.associate = function(models) {
        ProductoCostosAdicionales.belongsTo(models.ProductoCostos, { foreignKey: 'productoCostoId', onDelete: 'CASCADE' });
    };

    return ProductoCostosAdicionales;
};
