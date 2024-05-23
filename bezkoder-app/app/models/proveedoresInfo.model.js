module.exports = (sequelize, DataTypes) => {
    const ProveedoresInfo = sequelize.define("ProveedoresInfo", {
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
        codigo: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        razonSocial: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        numLicencia: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        categoria: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        sitioWeb: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        creador: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        host: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        parking: {
            type: DataTypes.JSON,
            allowNull: true
        },
        supplierCapacity: {
            type: DataTypes.JSON,
            allowNull: true
        },
        supplierCheckIn: {
            type: DataTypes.JSON,
            allowNull: true
        },
        supplierCheckOut: {
            type: DataTypes.JSON,
            allowNull: true
        },
        supplierSwimmingPool: {
            type: DataTypes.JSON,
            allowNull: true
        },
        supplierToKnow: {
            type: DataTypes.JSON,
            allowNull: true
        },
        supplierWiFi: {
            type: DataTypes.JSON,
            allowNull: true
        },
        consejosReservaInternos: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        edadMinimaHospedaje: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        estacionamiento: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        visibleCMS: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    });

    ProveedoresInfo.associate = function(models) {
        ProveedoresInfo.belongsTo(models.Proveedores, { foreignKey: 'proveedorId', onDelete: 'CASCADE' });
    };

    return ProveedoresInfo;
};
