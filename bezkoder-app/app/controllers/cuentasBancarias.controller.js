const db = require("../models");
const CuentasBancarias = db.CuentasBancarias;

exports.create = (req, res) => {
  CuentasBancarias.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the CuentasBancarias."
      });
    });
};

exports.findAll = (req, res) => {
  CuentasBancarias.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving CuentasBancarias."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  CuentasBancarias.findAll({
    where: { FinanzasId: id }
  })
    .then(data => {
      if (data.length > 0) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find CuentasBancarias with AgenciasDeViajeID=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving CuentasBancarias with AgenciasDeViajeID=${id}.`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  CuentasBancarias.update(req.body, {
    where: { FinanzasId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CuentasBancarias was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update CuentasBancarias with AgenciasDeViajeID=${id}. Maybe CuentasBancarias was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating CuentasBancarias with AgenciasDeViajeID=${id}.`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.AgenciasDeViajeID;

  CuentasBancarias.destroy({
    where: { FinanzasId: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "CuentasBancarias was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete CuentasBancarias with AgenciasDeViajeID=${id}. Maybe CuentasBancarias was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete CuentasBancarias with AgenciasDeViajeID=${id}.`
      });
    });
};
