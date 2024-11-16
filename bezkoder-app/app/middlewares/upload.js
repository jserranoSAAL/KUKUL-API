const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Configuración de DigitalOcean Spaces
const spacesEndpoint = new aws.Endpoint(process.env.DO_SPACE_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_ACCESS_KEY,
  secretAccessKey: process.env.DO_SECRET_KEY,
  region: process.env.DO_REGION
});

// Configuración de multer para subir archivos al espacio de DigitalOcean
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.DO_SPACE_NAME,
    acl: 'public-read', // Permite que los archivos sean públicamente accesibles
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname); // Define el nombre del archivo en DigitalOcean
    }
  })
});

module.exports = upload;