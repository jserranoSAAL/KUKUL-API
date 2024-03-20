module.exports = (sequelize, DataTypes) => {
    const ProyectoVenta = sequelize.define('ProyectoVenta', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Prospect: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Prospect no sea nulo
        },
        Viaje: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Viaje no sea nulo, asumo que es un identificador o nombre para el viaje
        },
        Pax: {
            type: DataTypes.INTEGER,
            allowNull: false // Asegura que el campo Pax (número de pasajeros) no sea nulo
        },
        PrimerDiaDelViaje: {
            type: DataTypes.DATE,
            allowNull: false // Asegura que el campo Primer Día del Viaje no sea nulo
        },
        EstadoDelProyecto: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado del Proyecto no sea nulo
        },
        AgenciaDeViaje: {
            type: DataTypes.STRING,
            allowNull: false // Referencia a la agencia de viaje, puedes cambiar a ID si vas a enlazarlo directamente con el modelo AgenciaDeViaje
        },
        GrupoConfirmado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false // Define si el grupo está confirmado o no
        },
        Codigo: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Código no sea nulo
        },
        Manager: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Manager no sea nulo, asumo que se refiere a un gestor del proyecto
        },
        UltimaModificacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW // Establece la fecha y hora actuales como valor por defecto para la última modificación
        }
    }, {
        tableName: 'ProyectosVenta',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return ProyectoVenta;
};
