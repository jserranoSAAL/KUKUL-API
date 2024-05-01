module.exports = (sequelize, DataTypes) => {
    const Pais = sequelize.define('Pais', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ISO: {
            type: DataTypes.CHAR(2),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'Paises',
        timestamps: false
    });

    return Pais;
};
