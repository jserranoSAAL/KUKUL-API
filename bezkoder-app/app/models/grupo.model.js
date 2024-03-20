module.exports = (sequelize, DataTypes) => {
    const Grupo = sequelize.define('Grupo', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha no sea nulo
        },
        FechaInicio: {
            type: DataTypes.DATEONLY,
            allowNull: false // Asegura que el campo Fecha Inicio no sea nulo
        },
        ViajerosConfirmados: {
            type: DataTypes.INTEGER,
            allowNull: false // Asegura que el campo Viajeros Confirmados no sea nulo
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Nombre no sea nulo
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Estado no sea nulo
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Agencia no sea nulo
        },
        Periodo: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Periodo no sea nulo
        },
        Facturado: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Facturado no sea nulo
        },
        Real: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false // Asegura que el campo Real no sea nulo
        },
        PorcentajePlaneado: {
            type: DataTypes.FLOAT,
            allowNull: false // Asegura que el campo % Planeado no sea nulo
        },
        PorcentajeReal: {
            type: DataTypes.FLOAT,
            allowNull: false // Asegura que el campo % Real no sea nulo
        },
        ResponsableDelGrupo: {
            type: DataTypes.STRING,
            allowNull: false // Asegura que el campo Responsable del Grupo no sea nulo
        }
        // Nota: El campo 'Acciones' ha sido removido ya que generalmente se asocia con lógica de la aplicación más que con almacenamiento de datos.
    }, {
        tableName: 'Grupos',
        timestamps: false // Si no deseas que Sequelize maneje automáticamente los campos createdAt y updatedAt
    });
    return Grupo;
};
