module.exports = (sequelize, DataTypes) => {
    const CotizaciónFinal = sequelize.define('CotizaciónFinal', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },        
        data: {
            type: DataTypes.JSON,
            allowNull: false
        },
        paquete_id: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: 'Paquete',
                key: 'id'
            }
        },
        id_final: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'CotizaciónFinal',
        timestamps: false
    });

    return CotizaciónFinal;
};
