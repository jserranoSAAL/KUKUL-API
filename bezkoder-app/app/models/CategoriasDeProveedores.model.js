module.exports = (sequelize, DataTypes) => {
    const CategoriasDeProveedores = sequelize.define('CategoriasDeProveedores', {
        codigo: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hiden: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        web: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    CategoriasDeProveedores.associate = models => {
        CategoriasDeProveedores.belongsTo(models.Proveedor, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return CategoriasDeProveedores;
};
