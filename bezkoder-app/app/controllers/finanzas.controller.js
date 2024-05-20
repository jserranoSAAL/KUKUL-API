const db = require("../models");
const Finanzas = db.Finanzas;
const CreditosDeudasDetalle = db.CreditosDeudasDetalle;
const CuentasBancarias = db.CuentasBancarias;

exports.create = (req, res) => {
  Finanzas.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Finanzas."
      });
    });
};

exports.findAll = (req, res) => {
  Finanzas.findAll({
    include: [CreditosDeudasDetalle, CuentasBancarias]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Finanzas."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  Finanzas.findOne({
    where: { AgenciasDeViajeID: id },
    include: [CreditosDeudasDetalle, CuentasBancarias]
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Finanzas with AgenciasDeViajeID=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Finanzas with AgenciasDeViajeID=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  Finanzas.update(req.body, {
    where: { AgenciasDeViajeID: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Finanzas was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Finanzas with AgenciasDeViajeID=${id}. Maybe Finanzas was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Finanzas with AgenciasDeViajeID=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  Finanzas.destroy({
    where: { AgenciasDeViajeID: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Finanzas was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Finanzas with AgenciasDeViajeID=${id}. Maybe Finanzas was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Finanzas with AgenciasDeViajeID=${id}.`
      });
    });
};
