module.exports = (sequelize, DataTypes) => {
    const DescriptionProduct = sequelize.define('DescriptionProduct', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        TECH: {
            type: DataTypes.STRING(255)
        },
        EN: {
            type: DataTypes.STRING(255)
        },
        ES: {
            type: DataTypes.STRING(255)
        },
        FR: {
            type: DataTypes.STRING(255)
        }
    });

    DescriptionProduct.associate = models => {
        DescriptionProduct.belongsTo(models.Productos, {
            foreignKey: 'ProductoID',
            onDelete: 'CASCADE'
        });
    };

    return DescriptionProduct;
};
