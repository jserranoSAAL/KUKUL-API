const db = require("../models");
const TermsAndConditions = db.TermsAndConditions;

// Crear y guardar nuevos Términos y Condiciones
exports.create = async (req, res) => {
  if (!req.body.terms_en) {
    res.status(400).send({
      message: "El contenido en inglés no puede estar vacío!",
    });
    return;
  }

  const termsAndConditions = {
    terms_en: req.body.terms_en,
    terms_es: req.body.terms_es,
    terms_fr: req.body.terms_fr,
  };

  try {
    const data = await TermsAndConditions.create(termsAndConditions);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message:
        err.message ||
        "Ocurrió algún error al crear los términos y condiciones.",
    });
  }
};

// Recuperar todos los Términos y Condiciones de la base de datos
exports.findAll = (req, res) => {
  TermsAndConditions.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrió algún error al recuperar los términos y condiciones.",
      });
    });
};

// Encontrar unos Términos y Condiciones por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TermsAndConditions.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se pudo encontrar los Términos y Condiciones con id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error recuperando los Términos y Condiciones con id=" + id,
      });
    });
};

// Actualizar unos Términos y Condiciones por el id en la solicitud
exports.update = (req, res) => {
  const id = req.params.id;

  TermsAndConditions.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message:
            "Los Términos y Condiciones fueron actualizados exitosamente.",
        });
      } else {
        res.send({
          message: `No se puede actualizar los Términos y Condiciones con id=${id}. Tal vez los Términos y Condiciones no fueron encontrados o req.body está vacío.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error actualizando los Términos y Condiciones con id=" + id,
      });
    });
};

// Eliminar unos Términos y Condiciones con el id especificado en la solicitud
exports.delete = (req, res) => {
  const id = req.params.id;

  TermsAndConditions.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Los Términos y Condiciones fueron eliminados exitosamente!",
        });
      } else {
        res.send({
          message: `No se pudo eliminar los Términos y Condiciones con id=${id}. Tal vez los Términos y Condiciones no fueron encontrados.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se pudo eliminar los Términos y Condiciones con id=" + id,
      });
    });
};

// Método para actualizar o insertar unos Términos y Condiciones
exports.upsert = async (req, res) => {
  const { terms_en, terms_es, terms_fr } = req.body;

  try {
    // Verifica si ya existe algún registro en la tabla
    const existingTerms = await TermsAndConditions.findOne();

    if (existingTerms) {
      // Si existe, actualiza el registro existente
      const updated = await TermsAndConditions.update(
        {
          terms_en: terms_en,
          terms_es: terms_es,
          terms_fr: terms_fr,
        },
        {
          where: { id: existingTerms.id },
        }
      );

      if (updated[0] > 0) {
        const updatedTerms = await TermsAndConditions.findByPk(
          existingTerms.id
        );
        res.send({
          message: "Términos y Condiciones actualizados exitosamente!",
          data: updatedTerms,
        });
      } else {
        res.status(500).send({
          message: "Error al actualizar los Términos y Condiciones existentes.",
        });
      }
    } else {
      // Si no hay registros existentes, crea un nuevo registro
      const newTerms = await TermsAndConditions.create({
        terms_en: terms_en,
        terms_es: terms_es,
        terms_fr: terms_fr,
      });
      res.send({
        message: "Términos y Condiciones creados exitosamente!",
        data: newTerms,
      });
    }
  } catch (err) {
    res.status(500).send({
      message:
        "Error al procesar la solicitud de Términos y Condiciones: " +
        err.message,
    });
  }
};

// Método para obtener el último registro de Términos y Condiciones
exports.findLatest = (req, res) => {
  TermsAndConditions.findOne({
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error al obtener el último registro de Términos y Condiciones.",
      });
    });
};
