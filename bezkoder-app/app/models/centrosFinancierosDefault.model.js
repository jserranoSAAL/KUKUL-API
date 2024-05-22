module.exports = (sequelize, DataTypes) => {
    const CentroFinancieroDefault = sequelize.define('CentroFinancieroDefault', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: {
            type: DataTypes.STRING(50)
        },
        centro_financiero_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'CentroFinanciero',
                key: 'id'
            }
        }
    }, {
        tableName: 'CentroFinancieroDefault'
    });

    return CentroFinancieroDefault;
};
