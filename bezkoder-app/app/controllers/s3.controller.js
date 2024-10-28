const db = require('../models');
const Coverage = db.Coverage;
const AWS = require('aws-sdk');
const fs = require('fs');

// Configurar AWS SDK para DigitalOcean Spaces con tus credenciales
const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACE_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_ACCESS_KEY,
  secretAccessKey: process.env.DO_SECRET_KEY,
  region: process.env.DO_REGION,
});

// Cambiar AWS_BUCKET_NAME a DO_SPACE_NAME en las configuraciones de los parámetros
const params = {
  Bucket: process.env.DO_SPACE_NAME,
  ACL: 'public-read', // Permisos de acceso a las imágenes en el espacio de DigitalOcean
};

exports.uploadImages = (req, res) => {  
  const images = req.body.images;
  const imageUrls = [];

  // Función para cargar una imagen en el espacio de DigitalOcean desde base64
  const uploadImage = (base64String, filename, callback) => {
    const base64Data = Buffer.from(base64String, 'base64');
    const key = filename;

    const imageParams = {
      ...params,
      Key: key,
      Body: base64Data,
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg', // Ajusta el tipo de contenido según la imagen
    };

    // Subir la imagen al espacio de DigitalOcean
    s3.upload(imageParams, (err, data) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        imageUrls.push(data.Location);
        callback(null);
      }
    });
  };

  const uploadTasks = images.map(image => {
    return new Promise((resolve, reject) => {
      const { base64String, filename } = image;
      uploadImage(base64String, filename, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  });

  Promise.all(uploadTasks)
    .then(() => {
      res.json({ imageUrls });
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al cargar las imágenes en DigitalOcean Spaces' });
    });
};

exports.uploadCoverPage = (req, res) => {
  const { base64String } = req.body;

  if (!base64String) {
    return res.status(400).send({ message: "Los datos de la portada no pueden estar vacíos!" });
  }

  const randomNum = Math.floor(Math.random() * 100000);
  const key = `portadas/coverage-page-${randomNum}.jpg`;

  const params = {
    Bucket: process.env.DO_SPACE_NAME,
    Key: key,
    Body: Buffer.from(base64String, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al cargar la portada en DigitalOcean Spaces ' + JSON.stringify(err) });
    }

    const imageUrl = `${process.env.DO_SPACE_ENDPOINT}/${key}`;

    const coverage = {
      key: key,
      url: imageUrl,
      default_status: false,
    };

    Coverage.create(coverage)
      .then(data => {
        res.send({
          message: "Portada subida y registrada correctamente.",
          coverage: data,
        });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Ocurrió un error al guardar la portada en la base de datos.",
        });
      });
  });
};
