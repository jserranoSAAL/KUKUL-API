module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, // ID ya está incluido y configurado correctamente.
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false // Asegurando que el campo Nombre no sea nulo.
        },
        Inicio: {
            type: DataTypes.DATE,
            allowNull: false // Asegurando que el campo Inicio no sea nulo.
        },
        Fin: {
            type: DataTypes.DATE,
            allowNull: false // Asegurando que el campo Fin no sea nulo.
        },
        Codigo: {
            type: DataTypes.STRING,
            allowNull: false // Asegurando que el campo Código no sea nulo.
        },
        UltimaActualizacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW // Estableciendo la fecha y hora actuales como valor por defecto para la última actualización.
        }
    }, {
        tableName: 'Categoria',
        timestamps: false // Manteniendo esto si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt.
    });
    return Categoria;
};
