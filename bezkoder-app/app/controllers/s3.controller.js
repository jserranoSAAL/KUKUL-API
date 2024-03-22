const AWS = require('aws-sdk');
const fs = require('fs');

// Configurar AWS SDK con tus credenciales
AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


// Crear un nuevo objeto de servicio S3
const s3 = new AWS.S3();

exports.uploadImages = (req, res) => {  
  const images = req.body.images; // Imágenes en formato base64 recibidas en la solicitud
  const imageUrls = []; // Array para almacenar las URLs de las imágenes cargadas

  // Configurar parámetros comunes para todas las imágenes
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    ACL: 'public-read' // Permisos de acceso a las imágenes en S3
  };

  // Función para cargar una imagen en S3 desde base64
  const uploadImage = (base64String, filename, callback) => {
    const base64Data = Buffer.from(base64String, 'base64');
    const key = filename;    

    // Configurar parámetros específicos para la imagen actual
    const imageParams = {
      ...params,
      Key: key,
      Body: base64Data,
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg' // Cambia el tipo de contenido según el formato de imagen que estés subiendo
    };

    // Subir la imagen a S3
    s3.upload(imageParams, (err, data) => {
      if (err) {
        console.error(err);
        callback(err);
      } else {
        // Agregar la URL pública de la imagen al array
        imageUrls.push(data.Location);
        callback(null);
      }
    });
  };

  // Iterar sobre todas las imágenes y cargarlas en paralelo
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

  // Esperar a que se completen todas las cargas de imágenes
  Promise.all(uploadTasks)
    .then(() => {
      // Devolver el array de URLs de las imágenes cargadas
      res.json({ imageUrls });
    })
    .catch(err => {
      res.status(500).json({ error: 'Error al cargar las imágenes en S3' });
    });
};
