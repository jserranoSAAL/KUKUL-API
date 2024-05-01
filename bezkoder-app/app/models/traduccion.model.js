// traduccion.model.js

module.exports = (sequelize, Sequelize) => {
    const Traduccion = sequelize.define("traduccion", {
        codigo: {
            type: Sequelize.STRING,
            allowNull: false
        },
        traduccion: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Traduccion;
};
