module.exports = (sequelize, DataTypes) => {
    const AgenciaDeViajeCotizacion = sequelize.define('AgenciaDeViajeCotizacion', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        AgenciasDeViajeID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'AgenciasDeViaje',
                key: 'ID'
            },
            unique: true // Garantiza la relación uno a uno
        },
        TipoBase: {
            type: DataTypes.ENUM('FIT', 'Grupos', 'Corporate', 'B2B'),
            allowNull: false
        },
        ModoCalculo: {
            type: DataTypes.ENUM('Global Margin', 'Cost Plus', 'Net Rate', 'Per Person', 'Per Group'),
            allowNull: false
        },
        TipoMargen: {
            type: DataTypes.ENUM('B2B', 'B2C', 'Corporate', 'Wholesale'),
            allowNull: false
        },
        Moneda: {
            type: DataTypes.ENUM('USD', 'EUR', 'MXN', 'CAD', 'GBP', 'Local'),
            allowNull: false
        },
        CostoExtra: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        CotizacionesValidasInicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        CotizacionesValidasFin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Cotizacion: {
            type: DataTypes.ENUM('B2B', 'B2C', 'Corporate', 'Custom'),
            allowNull: false
        },
        DiarioViaje: {
            type: DataTypes.ENUM('B2B', 'B2C', 'Custom Itinerary', 'Standard'),
            allowNull: false
        },
        FormInformacion: {
            type: DataTypes.ENUM('B2B', 'B2C', 'Email', 'PDF Document', 'Brochure'),
            allowNull: false
        }
    }, {
        tableName: 'AgenciaDeViajeCotizacion',
        timestamps: false
    });

    AgenciaDeViajeCotizacion.associate = function(models) {
        AgenciaDeViajeCotizacion.belongsTo(models.AgenciasDeViaje, {
            foreignKey: 'AgenciasDeViajeID',
            as: 'agencia',
            onDelete: 'CASCADE'
        });
    };

    return AgenciaDeViajeCotizacion;
};
