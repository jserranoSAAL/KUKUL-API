module.exports = (sequelize, DataTypes) => {
    const Logistica = sequelize.define('Logistica', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha no sea nulo
        },
        Inicio: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Inicio no sea nulo
        },
        Fin: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Fin no sea nulo
        },
        Subgrupo: {
            type: DataTypes.STRING,
            allowNull: true // Dependiendo de tu modelo de datos, este campo puede ser nulo
        },
        Actividad: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Actividad no sea nulo
        },
        PersonasConfirmadas: {
            type: DataTypes.INTEGER,
            allowNull: false // Asegura que el campo Personas Confirmadas no sea nulo
        },
        Servicio: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Servicio no sea nulo
        },
        Proveedor: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Proveedor no sea nulo
        },
        Reserva: {
            type: DataTypes.STRING,
            allowNull: true // Dependiendo de tu modelo de datos, este campo puede ser nulo
        },
        FechaReserva: {
            type: DataTypes.DATEONLY,
            allowNull: true // Dependiendo de tu modelo de datos, este campo puede ser nulo
        },
        Pago: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true // Dependiendo de tu modelo de datos, este campo puede ser nulo
        },
        FechaPago: {
            type: DataTypes.DATEONLY,
            allowNull: true // Dependiendo de tu modelo de datos, este campo puede ser nulo
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull: false // Asegura que el campo Duración no sea nulo
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false // Asegura que el campo Cantidad no sea nulo
        },
        Categoria: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Categoría no sea nulo
        },
        Responsable: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Responsable no sea nulo
        }
    }, {
        tableName: 'Logistica',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Logistica;
};
