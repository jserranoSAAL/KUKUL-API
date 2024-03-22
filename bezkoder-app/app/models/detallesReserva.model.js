module.exports = (sequelize, DataTypes) => {
    const DetallesReserva = sequelize.define('DetallesReserva', {
        ReservaID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Reservas',
                key: 'ID'
            }
        },
        PaqueteID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Paquete',
                key: 'ID'
            }
        },
        Cantidad: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'DetallesReservas',
        timestamps: false
    });
    return DetallesReserva;
};
