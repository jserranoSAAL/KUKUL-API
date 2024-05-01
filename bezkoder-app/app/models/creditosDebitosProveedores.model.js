module.exports = (sequelize, DataTypes) => {
    const CreditosDebitosProveedores = sequelize.define('CreditosDebitosProveedores', {
        grupo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        divisa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tarifa: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        valor_referencia: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        fecha_pago: {
            type: DataTypes.DATE,
            allowNull: false
        },
        comentarios: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        creador: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    CreditosDebitosProveedores.associate = models => {
        CreditosDebitosProveedores.belongsTo(models.Proveedor, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return CreditosDebitosProveedores;
};
