module.exports = (sequelize, DataTypes) => {
    const ProductoAdmin = sequelize.define("ProductoAdmin", {
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
        codigo: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        verEnExtranet: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        porDefecto: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        genericoVariable: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        tourConnectId: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        edadMaxBebe: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        edadMaxNino: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        notaInternautas: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        numeroVotos: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        host: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        creador: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    });

    ProductoAdmin.associate = function(models) {
        ProductoAdmin.belongsTo(models.Productos, { foreignKey: 'productoId', onDelete: 'CASCADE' });
    };

    return ProductoAdmin;
};
