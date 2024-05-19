const db = require('../models');
const ParametrosDocumentos = db.ParametrosDocumentos;

exports.create = async (req, res) => {
  try {
    const parametrosDocumentos = await ParametrosDocumentos.create(req.body);
    res.status(201).json(parametrosDocumentos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const parametrosDocumentos = await ParametrosDocumentos.findAll();
    res.status(200).json(parametrosDocumentos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const parametrosDocumentos = await ParametrosDocumentos.findByPk(req.params.id);
    if (parametrosDocumentos) {
      res.status(200).json(parametrosDocumentos);
    } else {
      res.status(404).json({ error: 'ParametrosDocumentos not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await ParametrosDocumentos.update(req.body, {
      where: { ID: req.params.id }
    });
    if (updated) {
      const updatedParametrosDocumentos = await ParametrosDocumentos.findByPk(req.params.id);
      res.status(200).json(updatedParametrosDocumentos);
    } else {
      res.status(404).json({ error: 'ParametrosDocumentos not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await ParametrosDocumentos.destroy({
      where: { ID: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'ParametrosDocumentos not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
