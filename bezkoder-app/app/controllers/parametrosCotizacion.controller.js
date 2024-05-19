const db = require('../models');
const ParametrosCotizacion = db.ParametrosCotizacion;

exports.create = async (req, res) => {
  try {
    const parametrosCotizacion = await ParametrosCotizacion.create(req.body);
    res.status(201).json(parametrosCotizacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const parametrosCotizacion = await ParametrosCotizacion.findAll();
    res.status(200).json(parametrosCotizacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const parametrosCotizacion = await ParametrosCotizacion.findOne({
      where: { AgenciasDeViajeID: req.params.id }
    });
    if (parametrosCotizacion) {
      res.status(200).json(parametrosCotizacion);
    } else {
      res.status(404).json({ error: 'ParametrosCotizacion not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await ParametrosCotizacion.update(req.body, {
      where: { AgenciasDeViajeID: req.params.id }
    });
    if (updated) {
      const updatedParametrosCotizacion = await ParametrosCotizacion.findOne({
        where: { AgenciasDeViajeID: req.params.id }
      });
      res.status(200).json(updatedParametrosCotizacion);
    } else {
      res.status(404).json({ error: 'ParametrosCotizacion not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ParametrosCotizacion.destroy({
      where: { AgenciasDeViajeID: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'ParametrosCotizacion not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createOrUpdate = async (req, res) => {
  try {
    const { AgenciasDeViajeID, ...data } = req.body;
    const [parametrosCotizacion, created] = await ParametrosCotizacion.findOrCreate({
      where: { AgenciasDeViajeID },
      defaults: { ...data, AgenciasDeViajeID }
    });

    if (!created) {
      await parametrosCotizacion.update(data);
    }

    res.send(parametrosCotizacion);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
