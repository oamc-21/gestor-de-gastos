const {registerUser, loginUser}  = require('../services/user.service');

const register = async(req, res)=>{
    try {
        const user = await registerUser(req.body);
        res.status(201).json({mensaje: "Se ha creado el usuario!", usuario: user});
    } catch (error) {
        return res.status(400).json({message: error.message});      
    }
}

const login = async(req, res) =>{
    try {
        const user = await loginUser(req.body);
        res.status(200).json({mensaje: "Inicio de sesión exitoso!", usuario: user});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports = {register, login};