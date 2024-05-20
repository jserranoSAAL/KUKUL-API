const db = require("../models");
const CreditosDeudasDetalle = db.CreditosDeudasDetalle;

exports.create = (req, res) => {
  CreditosDeudasDetalle.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the CreditosDeudasDetalle."
      });
    });
};

exports.findAll = (req, res) => {
  CreditosDeudasDetalle.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving CreditosDeudasDetalle."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  CreditosDeudasDetalle.findAll({
    where: { FinanzasId: id }
  })
    .then(data => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find CreditosDeudasDetalle with AgenciasDeViajeID=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving CreditosDeudasDetalle with AgenciasDeViajeID=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  CreditosDeudasDetalle.update(req.body, {
    where: { FinanzasId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CreditosDeudasDetalle was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update CreditosDeudasDetalle with AgenciasDeViajeID=${id}. Maybe CreditosDeudasDetalle was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating CreditosDeudasDetalle with AgenciasDeViajeID=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  CreditosDeudasDetalle.destroy({
    where: { FinanzasId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CreditosDeudasDetalle was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete CreditosDeudasDetalle with AgenciasDeViajeID=${id}. Maybe CreditosDeudasDetalle was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete CreditosDeudasDetalle with AgenciasDeViajeID=${id}.`
      });
    });
};
