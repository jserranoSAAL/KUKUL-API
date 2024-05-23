module.exports = (sequelize, DataTypes) => {
    const TarifarioGeneral = sequelize.define("TarifarioGeneral", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tarifarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Tarifario',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        nombre: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        categoria: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        estado: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        codigo: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        viajeInicial: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        host: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        creador: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tipos: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        etiquetas: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        nivel: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        destino: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        traducciones: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        imagenes: {
            type: DataTypes.TEXT, // Almacena las URLs de las imágenes como una cadena de texto separada por comas
            allowNull: true
        },
        notasInternas: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    TarifarioGeneral.associate = function(models) {
        TarifarioGeneral.belongsTo(models.Tarifarios, { foreignKey: 'tarifarioId', onDelete: 'CASCADE' });
    };

    return TarifarioGeneral;
};
