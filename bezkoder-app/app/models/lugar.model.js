module.exports = (sequelize, DataTypes) => {
    const Lugar = sequelize.define('Lugar', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CodigoLenguaje: {
            type: DataTypes.STRING(20)
        },
        Nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Descripcion: {
            type: DataTypes.TEXT
        },
        Latitud: {
            type: DataTypes.DECIMAL(10, 8)
        },
        Longitud: {
            type: DataTypes.DECIMAL(11, 8)
        },
        EstadoID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'Lugares',
        timestamps: false
    });

    return Lugar;
};
