const {createMovement: createMovementService} = require("../services/movement.service");

const createMovement = async(req,res) =>{
    try {
        const userId = req.user.userId;    
        const {type, amount, category, description, date} = req.body
        const movement = await createMovementService(userId, type, amount, category, description);
        return res.status(201).json({message: "Se ha agregado un movimiento", movimiento: movement});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
module.exports = {createMovement};