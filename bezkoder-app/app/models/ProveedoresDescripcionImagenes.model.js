module.exports = (sequelize, DataTypes) => {
    const ProveedoresDescripcionImagenes = sequelize.define("ProveedoresDescripcionImagenes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        proveedorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Proveedores',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        descripcionEN: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        descripcionES: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        descripcionFR: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        imagenes: {
            type: DataTypes.JSON,
            allowNull: true
        }
    });

    ProveedoresDescripcionImagenes.associate = function(models) {
        ProveedoresDescripcionImagenes.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return ProveedoresDescripcionImagenes;
};
