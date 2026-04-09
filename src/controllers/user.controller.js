const {registerUser: registerUserService, loginUser: loginUserService}  = require('../services/user.service');

const registerUser = async(req, res)=>{
    try {
        const user = await registerUserService(req.body);
        res.status(201).json({mensaje: "Se ha creado el usuario!", usuario: user});
    } catch (error) {
        return res.status(400).json({message: error.message});      
    }
}

const loginUser = async(req, res) =>{
    try {
        const user = await loginUserService(req.body);
        res.status(200).json({mensaje: "Inicio de sesión exitoso!", usuario: user});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports = {registerUser, loginUser};