const {
  createMovement: createMovementService,
  getMovementByUser: getMovementByUserService,
  deleteMovement: deleteMovementService,
  getMovementBalance: getMovementBalanceService,
} = require("../services/movement.service");

const createMovement = async(req,res) =>{
    try {
        const userId = req.user.userId;    
        const {type, amount, category, description, date} = req.body
        const movement = await createMovementService(userId, type, amount, category, description);
        return res.status(201).json({message: "Se ha agregado un movimiento", data: movement});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const getMovementByUser = async(req, res) =>{

    try {
        const userId = req.user.userId;
        const movements = await getMovementByUserService(userId);
        return res.status(200).json({message: "Detalles de movimientos: ", data: movements});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const deleteMovement = async(req,res)=>{
    try {
        const userId = req.user.userId;
        const { id } = req.params;
        const result = await deleteMovementService(id, userId);
        return res.status(200).json({message: "acción realizada: ", data: result});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const getMovementBalance = async(req, res)=>{
    try {
        const userId = req.user.userId;
        const result = await getMovementBalanceService(userId);
        return res.status(200).json({message: "Resumen: ", data: result});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

module.exports = {createMovement, getMovementByUser, deleteMovement, getMovementBalance};
