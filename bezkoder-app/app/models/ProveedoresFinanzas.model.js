module.exports = (sequelize, DataTypes) => {
    const ProveedoresFinanzas = sequelize.define("ProveedoresFinanzas", {
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
        fechaLimitePago: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        politicaFinSemana: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        numeroImpuesto: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        centroFinancieroDefault: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        monedaPagoDefault: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        modoPago: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        categoriaGastoDefault: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        tipoImpuestoDefault: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    });

    ProveedoresFinanzas.associate = function(models) {
        ProveedoresFinanzas.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return ProveedoresFinanzas;
};
