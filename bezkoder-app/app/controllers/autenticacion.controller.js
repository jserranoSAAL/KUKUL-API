const db = require("../models");
const Users = db.user;
const Op = db.Sequelize.Op;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.login = async (req, res) => {
  try {
    const { email, password_hash } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const passwordMatch = await bcrypt.compare(password_hash, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.status(200).json({ message: "Sesión iniciada", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

const moment = require('moment');
// Obtener la fecha actual en formato UTC
const currentDate = new Date().toISOString();

// Formatear la fecha en el formato que requiere MariaDB
const formattedDate = moment(currentDate).format('YYYY-MM-DD HH:mm:ss');

exports.register = async (req, res) => {
  const { username, name_user, last_name_user, email, password_hash, created_at} = req.body;  
  try {    
    const user = await Users.create({
      username: username,      
      name_user: name_user,
      last_name_user: last_name_user,
      email: email,      
      password_hash: bcrypt.hashSync(password_hash, 8),
      created_at: formattedDate
    });
          
    

    const token = jwt.sign({ id: user.user_id }, process.env.SECRET, {
      expiresIn: 86400 // expires in 24 hours
    });    

    res.status(201).send({ auth: true, token });
  } catch (err) {     
    res.status(500).send({ message: "Error al registrar usuario" });
  }
};