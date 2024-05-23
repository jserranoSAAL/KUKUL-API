module.exports = (sequelize, DataTypes) => {
    const CuentasBancariasProveedor = sequelize.define("CuentasBancariasProveedor", {
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
        banco: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        moneda: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        numeroCuenta: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        beneficiario: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        porDefecto: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        codigoSWIFT: {
            type: DataTypes.STRING(20),
            allowNull: true
        }
    });

    CuentasBancariasProveedor.associate = function(models) {
        CuentasBancariasProveedor.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return CuentasBancariasProveedor;
};
