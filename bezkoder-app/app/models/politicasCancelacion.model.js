module.exports = (sequelize, DataTypes) => {
    const PoliticasCancelacion = sequelize.define('PoliticasCancelacion', {
        fecha_inicial: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_final: {
            type: DataTypes.DATE,
            allowNull: false
        },
        porcentaje: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });

    return PoliticasCancelacion;
};
