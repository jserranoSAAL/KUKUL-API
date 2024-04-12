const db = require("../models");
const Address = db.Addresses;

// Crear y Guardar una nueva Dirección
exports.create = async (req, res) => {
  if (!req.body.street) {
    res.status(400).send({
      message: "La calle no puede estar vacía!",
    });
    return;
  }

  const address = {
    street: req.body.street,
    district: req.body.district,
    town: req.body.town,
    zip_code: req.body.zip_code,
    state: req.body.state,
    country: req.body.country,
  };

  try {
    const data = await Address.create(address);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Ocurrió algún error al crear la dirección.",
    });
  }
};

// Recuperar todas las direcciones de la base de datos.
exports.findAll = (req, res) => {
  Address.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algún error al recuperar las direcciones.",
      });
    });
};

// Encontrar una única dirección con un id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Address.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se pudo encontrar la dirección con id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error recuperando la dirección con id=" + id,
      });
    });
};

// Actualizar una dirección por el id en la solicitud
exports.update = (req, res) => {
  const id = req.params.id;

  Address.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "La dirección fue actualizada exitosamente.",
        });
      } else {
        res.send({
          message: `No se puede actualizar la dirección con id=${id}. Tal vez la dirección no fue encontrada o req.body está vacío.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error actualizando la dirección con id=" + id,
      });
    });
};

// Eliminar una dirección con el id especificado en la solicitud
exports.delete = (req, res) => {
  const id = req.params.id;

  Address.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "La dirección fue eliminada exitosamente!",
        });
      } else {
        res.send({
          message: `No se pudo eliminar la dirección con id=${id}. Tal vez la dirección no fue encontrada.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "No se pudo eliminar la dirección con id=" + id,
      });
    });
};

// Método para actualizar o insertar una dirección
exports.upsert = async (req, res) => {
  const { street, district, town, zip_code, state, country } = req.body;

  try {
    // Verifica si ya existe algún registro en la tabla
    const existingRecord = await Address.findOne();

    if (existingRecord) {
      // Si existe un registro, actualízalo
      const updated = await Address.update(
        {
          street: street,
          district: district,
          town: town,
          zip_code: zip_code,
          state: state,
          country: country,
        },
        {
          where: { id: existingRecord.id },
        }
      );

      if (updated[0] > 0) {
        const updatedAddress = await Address.findByPk(existingRecord.id);
        res.send({
          message: "Dirección actualizada exitosamente!",
          data: updatedAddress,
        });
      } else {
        res.status(500).send({
          message: "Error al actualizar la dirección existente.",
        });
      }
    } else {
      // Si no hay registros, crea un nuevo registro
      const newAddress = await Address.create({
        street: street,
        district: district,
        town: town,
        zip_code: zip_code,
        state: state,
        country: country,
      });
      res.send({
        message:
          "Dirección creada exitosamente como el primer registro en la tabla!",
        data: newAddress,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error al procesar la solicitud de dirección: " + err.message,
    });
  }
};

// Método para obtener el último registro de direcciones
exports.findLatest = (req, res) => {
  Address.findOne({
    order: [["id", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error al obtener la última dirección.",
      });
    });
};
