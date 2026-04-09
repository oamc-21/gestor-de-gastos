const {registerUser: registerUserService, loginUser: loginUserService}  = require('../services/user.service');

const registerUser = async(req, res)=>{
    try {
        const user = await registerUserService(req.body);
        res.status(201).json({message: "Se ha creado el usuario!", data: user});
    } catch (error) {
        return res.status(400).json({message: error.message});      
    }
}

const loginUser = async(req, res) =>{
    try {
        const user = await loginUserService(req.body);
        res.status(200).json({message: "Inicio de sesión exitoso!", data: user});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports = {registerUser, loginUser};