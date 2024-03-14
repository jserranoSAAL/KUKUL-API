module.exports = (sequelize, DataTypes) => {
    const Paquete = sequelize.define('Paquete', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Supongamos que hay campos como Nombre, Descripción, etc.
        Nombre: {
            type: DataTypes.STRING
        },
        Descripcion: {
            type: DataTypes.STRING
        },
        Precio: {
            type: DataTypes.FLOAT
        }
    }, {
        tableName: 'Paquetes',
        timestamps: false
    });
    return Paquete;
};
