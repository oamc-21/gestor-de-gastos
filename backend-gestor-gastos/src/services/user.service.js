const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async ({ name, email, password }) => {
    const nameOk = typeof name === "string" && name.trim().length > 0;
    const emailOk = typeof email === "string" && email.trim().length > 0;
    const passwordOk = typeof password === "string" && password.length > 0;

    if (!nameOk || !emailOk || !passwordOk) {
        throw new Error("Estos campos son obligatorios!");
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    const userFound = await User.findOne({ email: cleanEmail });
    if (userFound) throw new Error("Ya existe un usuario registrado con este correo!");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name: cleanName,
        email: cleanEmail,
        password: hashedPassword,
    });
    return { id: String(user._id), name: user.name, email: user.email };
};


const loginUser = async ({email, password}) =>{
    const emailOk = typeof email === "string" && email.trim().length > 0;
    const passwordOk = typeof password === "string" && password.length > 0;

    if (!emailOk || !passwordOk) {
        throw new Error("Estos campos son obligatorios!");
    }

    const cleanEmail = email.trim().toLowerCase();

    const userFound = await User.findOne({email: cleanEmail})
    if(!userFound) throw new Error("Credenciales incorrectas")

    const isMatch = await bcrypt.compare(password, userFound.password);
    if(!isMatch) throw new Error("Credenciales incorrectas")

    const token = jwt.sign({userId: String(userFound._id)}, process.env.JWT_SECRET, {expiresIn: "1h"});
    return {id: String(userFound._id), name: userFound.name, email: userFound.email, token: token}

   
}

module.exports = { registerUser, loginUser };