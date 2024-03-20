module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('Persona', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Apellidos: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Apellidos no sea nulo
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Nombre no sea nulo
        },
        FechaDeNacimiento: {
            type: DataTypes.DATE,
            allowNull: false // Asegura que el campo Fecha de Nacimiento no sea nulo
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false, // Asegura que el campo Email no sea nulo
            validate: {
                isEmail: true // Valida que el campo sea un correo electrónico válido
            }
        },
        Pais: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo País no sea nulo
        },
        Acciones: {
            type: DataTypes.STRING, // Cambia según lo que necesites en este campo, podría ser JSON o simplemente texto.
            allowNull: true // Este campo puede ser nulo dependiendo de qué represente
        }
    }, {
        tableName: 'Persona',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Persona;
};
