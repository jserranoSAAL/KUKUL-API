module.exports = (sequelize, DataTypes) => {
    const ProductoCupo = sequelize.define("ProductoCupo", {
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
        desde: {
            type: DataTypes.DATE,
            allowNull: true
        },
        hasta: {
            type: DataTypes.DATE,
            allowNull: true
        },
        disponibilidad: {
            type: DataTypes.ENUM('available', 'not available'),
            allowNull: true,
            defaultValue: 'available'
        },
        maxPax: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        valido: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: true
        },
        diasAntesDeLaFecha: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        SGL: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        DBL: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        TWIN: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        TPL: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        QD: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        }
    });

    ProductoCupo.associate = function(models) {
        ProductoCupo.belongsTo(models.Productos, { foreignKey: 'productoId', onDelete: 'CASCADE' });
    };

    return ProductoCupo;
};
