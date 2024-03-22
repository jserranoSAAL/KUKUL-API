const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

// Configuración de AWS S3
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// Configuración de multer para subir archivos al bucket de S3
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'public-read', // Permite que los archivos sean públicamente accesibles
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname); // Define el nombre del archivo en S3
    }
  })
});

module.exports = upload;
