module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING(100)
        }
    }, {
        tableName: 'Categorias',
        timestamps: false
    });
    return Categoria;
};
