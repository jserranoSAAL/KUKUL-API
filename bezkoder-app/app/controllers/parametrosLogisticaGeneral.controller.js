const db = require("../models");
const ParametroLogisticaGeneral = db.ParametroLogisticaGeneral;

// Crear y Guardar un nuevo Parámetro de Logística General
exports.create = async (req, res) => {
    try {
        const data = await ParametroLogisticaGeneral.create(req.body);
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al crear el Parámetro de Logística General."
        });
    }
};

// Recuperar todos los Parámetros de Logística General
exports.findAll = async (req, res) => {
    try {
        const data = await ParametroLogisticaGeneral.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Ocurrió un error al recuperar los Parámetros de Logística General."
        });
    }
};

// Encontrar un Parámetro de Logística General por ID
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await ParametroLogisticaGeneral.findByPk(id);
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el Parámetro de Logística General con id=${id}.`
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error recuperando el Parámetro de Logística General con id=" + id
        });
    }
};

// Actualizar un Parámetro de Logística General por ID
exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await ParametroLogisticaGeneral.update(req.body, { where: { id: id } });
        if (num == 1) {
            res.send({ message: "Parámetro de Logística General actualizado exitosamente." });
        } else {
            res.send({ message: `No se puede actualizar el Parámetro de Logística General con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error actualizando el Parámetro de Logística General con id=" + id
        });
    }
};

// Eliminar un Parámetro de Logística General por ID
exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const num = await ParametroLogisticaGeneral.destroy({ where: { id: id } });
        if (num == 1) {
            res.send({ message: "Parámetro de Logística General eliminado exitosamente." });
        } else {
            res.send({ message: `No se pudo eliminar el Parámetro de Logística General con id=${id}.` });
        }
    } catch (err) {
        res.status(500).send({
            message: "No se pudo eliminar el Parámetro de Logística General con id=" + id
        });
    }
};

// Upsert (insertar o actualizar) un Parámetro de Logística General
exports.upsert = async (req, res) => {
    const { ignorar_impayes, rappel_reservation, statut_apres_rappel, actualisation_date_reservation, inclure_reservation_pdf, montrer_nom_technique, traduir, traduir_niveau, programme_inclut_noms, services_monnaie_fournisseur } = req.body;

    try {
        // Buscar o crear el Parámetro de Logística General
        const [parametroLogisticaGeneral, created] = await ParametroLogisticaGeneral.findOrCreate({
            where: { statut_apres_rappel: statut_apres_rappel }, // Suponiendo que el `statut_apres_rappel` es único
            defaults: { ignorar_impayes, rappel_reservation, statut_apres_rappel, actualisation_date_reservation, inclure_reservation_pdf, montrer_nom_technique, traduir, traduir_niveau, programme_inclut_noms, services_monnaie_fournisseur }
        });

        if (!created) {
            // Si el Parámetro de Logística General ya existe, actualizarlo
            await parametroLogisticaGeneral.update({ ignorar_impayes, rappel_reservation, actualisation_date_reservation, inclure_reservation_pdf, montrer_nom_technique, traduir, traduir_niveau, programme_inclut_noms, services_monnaie_fournisseur });
        }

        res.send({
            message: created ? "Parámetro de Logística General creado exitosamente." : "Parámetro de Logística General actualizado exitosamente.",
            parametroLogisticaGeneral
        });
    } catch (err) {
        res.status(500).send({
            message: "Error al realizar el upsert del Parámetro de Logística General: " + err.message
        });
    }
};