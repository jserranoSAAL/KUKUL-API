module.exports = (sequelize, DataTypes) => {
    const Logistica = sequelize.define('Logistica', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Inicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Fin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Subgrupo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Actividad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        PersonasConfirmadas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Servicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Proveedor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Reserva: {
            type: DataTypes.STRING,
            allowNull: true
        },
        FechaReserva: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Pago: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        FechaPago: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        Duracion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Responsable: {
            type: DataTypes.STRING,
            allowNull: false
        },
        GrupoID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Grupos',
                key: 'ID'
            },
            allowNull: false
        }
    }, {
        tableName: 'Logistica',
        timestamps: false
    });

    return Logistica;
};
