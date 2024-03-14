module.exports = (sequelize, DataTypes) => {
    const Geografia = sequelize.define('Geografia', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Region: {
            type: DataTypes.STRING(100)
        },
        Zona: {
            type: DataTypes.STRING(100)
        },
        PuntoInteresTuristico: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'Geografia',
        timestamps: false
    });
    return Geografia;
};
