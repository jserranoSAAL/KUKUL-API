module.exports = (sequelize, DataTypes) => {
    const TravelBookProduct = sequelize.define('TravelBookProduct', {
        TECH: {
            type: DataTypes.STRING,
            allowNull: true
        },
        EN: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ES: {
            type: DataTypes.STRING,
            allowNull: true
        },
        FR: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    TravelBookProduct.associate = models => {
        TravelBookProduct.belongsTo(models.Producto, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TravelBookProduct;
};
