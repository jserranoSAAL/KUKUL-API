module.exports = (sequelize, DataTypes) => {
    const Paquete = sequelize.define('Paquete', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Nombre no sea nulo
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull: false  // Asegura que el campo Duracion no sea nulo y guarda la duración en minutos o días, según se prefiera
        },
        Inicio: {
            type: DataTypes.DATE,
            allowNull: false  // Asegura que el campo Inicio no sea nulo
        },
        Fin: {
            type: DataTypes.DATE,
            allowNull: false  // Asegura que el campo Fin no sea nulo
        },
        Categoria: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Categoria no sea nulo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Agencia no sea nulo
        },
        Codigo: {
            type: DataTypes.STRING,
            allowNull: false  // Asegura que el campo Codigo no sea nulo
        },
        SoloLectura: {
            type: DataTypes.BOOLEAN,
            defaultValue: false  // Define un valor por defecto para el campo Solo Lectura
        },
        UltimaActualizacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW  // Establece la fecha y hora actuales como valor por defecto
        }
    }, {
        tableName: 'Paquete',
        timestamps: false  // Manten esto si no quieres que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Paquete;
};
