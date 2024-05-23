module.exports = (sequelize, DataTypes) => {
    const EstadoReservacion = sequelize.define('EstadoReservacion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        por_defecto: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'EstadoReservacion'
    });

    return EstadoReservacion;
};
