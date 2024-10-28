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
        dePax: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
            allowNull: true
        },
        aPax: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
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
        deCant: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
            allowNull: true
        },
        aCant: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
            allowNull: true
        },
        ofertaRes: {
            type: DataTypes.STRING(50), // Asumiendo que puede ser un texto corto
            allowNull: true
        },
        dias: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
            allowNull: true
        },
        deNoche: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
            allowNull: true
        },
        hastaNoche: {
            type: DataTypes.INTEGER, // Suponiendo que es un número entero
            allowNull: true
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        porcentaje: {
            type: DataTypes.DECIMAL(5, 2), // Para porcentajes
            allowNull: true
        },
        unoX: {
            type: DataTypes.BOOLEAN, // Para indicar si se aplica una sola vez
            allowNull: true
        },
        aplicar5SL: {
            type: DataTypes.BOOLEAN, // Suponiendo que es un booleano
            allowNull: true
        },
        guiaPaga: {
            type: DataTypes.BOOLEAN, // Suponiendo que es un booleano
            allowNull: true
        },
        codigo: {
            type: DataTypes.STRING(50), // Suponiendo que es un texto corto
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
