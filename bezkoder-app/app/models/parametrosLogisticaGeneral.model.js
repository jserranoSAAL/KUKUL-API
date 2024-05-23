module.exports = (sequelize, DataTypes) => {
    const ParametroLogisticaGeneral = sequelize.define('ParametroLogisticaGeneral', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ignorar_impayes: {
            type: DataTypes.INTEGER
        },
        rappel_reservation: {
            type: DataTypes.INTEGER
        },
        statut_apres_rappel: {
            type: DataTypes.STRING(255)
        },
        actualisation_date_reservation: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        inclure_reservation_pdf: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        montrer_nom_technique: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        traduir: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        traduir_niveau: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        programme_inclut_noms: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        services_monnaie_fournisseur: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: 'ParametrosLogisticaGeneral'
    });

    return ParametroLogisticaGeneral;
};
