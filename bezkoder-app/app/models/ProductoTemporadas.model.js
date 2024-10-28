module.exports = (sequelize, DataTypes) => {
    const ProductoTemporadas = sequelize.define("ProductoTemporadas", {
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
        col: {
            type: DataTypes.STRING(10),
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
        sgl: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        tpl: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        qd: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        nino: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        bebe: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        lunes: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        martes: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        miercoles: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        jueves: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        viernes: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        sabado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        domingo: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    });

    ProductoTemporadas.associate = function(models) {
        ProductoTemporadas.belongsTo(models.ProductoCostos, { foreignKey: 'productoCostoId', onDelete: 'CASCADE' });
    };

    return ProductoTemporadas;
};
