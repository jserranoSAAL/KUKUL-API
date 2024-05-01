module.exports = (sequelize, DataTypes) => {
    const TranslationNameProduct = sequelize.define('TranslationNameProduct', {
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

    TranslationNameProduct.associate = models => {
        TranslationNameProduct.belongsTo(models.Producto, { foreignKey: 'ProductoID' });
    };

    return TranslationNameProduct;
};
