module.exports = (sequelize, DataTypes) => {
    const Tarifario = sequelize.define('Tarifario', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Tarifario: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Tarifario no sea nulo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Agencia no sea nulo
        },
        NumeroDeProductos: {
            type: DataTypes.INTEGER,
            allowNull: false  // Asegura que el campo Numero de Productos no sea nulo
        },
        Inicio: {
            type: DataTypes.DATE,
            allowNull: false  // Asegura que el campo Inicio no sea nulo
        },
        Fin: {
            type: DataTypes.DATE,
            allowNull: false  // Asegura que el campo Fin no sea nulo
        },
        Codigo: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Código no sea nulo
        },
        SoloLectura: {
            type: DataTypes.BOOLEAN,
            defaultValue: false  // Define un valor por defecto para el campo Solo Lectura
        },
        UltimaActualizacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW  // Establece la fecha y hora actuales como valor por defecto para la última actualización
        }
    }, {
        tableName: 'Tarifario',
        timestamps: false  // Manten esto si no quieres que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Tarifario;
};
