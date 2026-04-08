const User = require('../models/User');
const bcrypt = require('bcryptjs');

const registerUser = async (name, email, password) =>{
    const userFound = await User.findOne({email: email});
    if(userFound) throw new Error("Ya existe un usuario registrado con este correo!");

   

}