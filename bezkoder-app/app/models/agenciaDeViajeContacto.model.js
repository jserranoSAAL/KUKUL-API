module.exports = (sequelize, DataTypes) => {
    const AgenciaViajeContacto = sequelize.define('AgenciaViajeContacto', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100)
        },
        Apellidos: {
            type: DataTypes.STRING(100)
        },
        PorDefecto: {
            type: DataTypes.BOOLEAN,
            defaultValue: false // Indica si es el contacto por defecto
        },
        Email: {
            type: DataTypes.STRING(100)
        },
        Telefono: {
            type: DataTypes.STRING(20)
        },
        AgenciasDeViajeID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'AgenciasDeViaje',
                key: 'ID'
            }
        }
    }, {
        tableName: 'AgenciaViajeContacto',
        timestamps: false
    });

    AgenciaViajeContacto.associate = function(models) {
        AgenciaViajeContacto.belongsTo(models.AgenciasDeViaje, { foreignKey: 'AgenciasDeViajeID', as: 'agencia' });
    };

    return AgenciaViajeContacto;
};
