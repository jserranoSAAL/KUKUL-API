module.exports = (sequelize, DataTypes) => {
    const ImpuestoAduana = sequelize.define('ImpuestoAduana', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        formula: {
            type: DataTypes.STRING,
            allowNull: false
        },
        calculo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return ImpuestoAduana;
};
