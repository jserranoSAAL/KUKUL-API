module.exports = (sequelize, DataTypes) => {
    const TareaAutomaticaLogistica = sequelize.define('TareaAutomaticaLogistica', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        objeto: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        responsable: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        tarea: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        plazo_dias: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nota: {
            type: DataTypes.TEXT
        },
        ayuda: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'TareasAutomaticasLogistica'
    });

    return TareaAutomaticaLogistica;
};
