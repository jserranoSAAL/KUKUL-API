module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define('Reserva', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UsuarioID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Usuarios',
                key: 'ID'
            }
        },
        FechaInicio: {
            type: DataTypes.DATE
        },
        FechaFin: {
            type: DataTypes.DATE
        },
        Estado: {
            type: DataTypes.STRING(50)
        }
    }, {
        tableName: 'Reservas',
        timestamps: false
    });
    return Reserva;
};
