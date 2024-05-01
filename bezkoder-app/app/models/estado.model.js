module.exports = (sequelize, DataTypes) => {
    const Estado = sequelize.define('Estado', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        PaisID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'Estados',
        timestamps: false
    });

    return Estado;
};
