module.exports = (sequelize, DataTypes) => {
    const Grupo = sequelize.define('Grupo', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        FechaInicio: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        ViajerosConfirmados: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Agencia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Periodo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Facturado: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Real: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        PorcentajePlaneado: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        PorcentajeReal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ResponsableDelGrupo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Grupos',
        timestamps: false
    });

    return Grupo;
};
