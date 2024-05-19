const db = require('../models');
const ParametrosEmails = db.ParametrosEmails;

exports.create = async (req, res) => {
  try {
    const parametrosEmails = await ParametrosEmails.create(req.body);
    res.status(201).json(parametrosEmails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const parametrosEmails = await ParametrosEmails.findAll();
    res.status(200).json(parametrosEmails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const parametrosEmails = await ParametrosEmails.findByPk(req.params.id);
    if (parametrosEmails) {
      res.status(200).json(parametrosEmails);
    } else {
      res.status(404).json({ error: 'ParametrosEmails not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await ParametrosEmails.update(req.body, {
      where: { ID: req.params.id }
    });
    if (updated) {
      const updatedParametrosEmails = await ParametrosEmails.findByPk(req.params.id);
      res.status(200).json(updatedParametrosEmails);
    } else {
      res.status(404).json({ error: 'ParametrosEmails not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ParametrosEmails.destroy({
      where: { ID: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'ParametrosEmails not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.createOrUpdate = async (req, res) => {
  try {
    const { AgenciasDeViajeID, ...data } = req.body;
    const [parametrosEmails, created] = await ParametrosEmails.findOrCreate({
      where: { AgenciasDeViajeID },
      defaults: { ...data, AgenciasDeViajeID }
    });

    if (!created) {
      await parametrosEmails.update(data);
    }

    res.send(parametrosEmails);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};