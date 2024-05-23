module.exports = (sequelize, DataTypes) => {
    const ProveedoresLogistica = sequelize.define("ProveedoresLogistica", {
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
        reservaDesde: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        centroLogistico: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        modeloDocPago: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        modeloReserva: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estatusPago: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estatusReserva: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        codigoAcceso: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });

    ProveedoresLogistica.associate = function(models) {
        ProveedoresLogistica.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return ProveedoresLogistica;
};
