module.exports = (sequelize, DataTypes) => {
    const BancosDeProveedores = sequelize.define('BancosDeProveedores', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        default_code: {
            type: DataTypes.STRING
        },
        codigo_swift: {
            type: DataTypes.STRING
        }
    });

    BancosDeProveedores.associate = (models) => {
        BancosDeProveedores.belongsTo(models.Proveedores, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return BancosDeProveedores;
};
