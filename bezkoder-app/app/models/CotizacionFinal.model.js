module.exports = (sequelize, DataTypes) => {
    const CotizacionFinal = sequelize.define('CotizacionFinal', {
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
        code: {
            type: DataTypes.STRING,
            allowNull: false
        }            
    }, {
        tableName: 'CotizacionFinal',
        timestamps: false
    });

    return CotizacionFinal;
};
