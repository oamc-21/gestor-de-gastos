const Movement = require("../models/Movement");

const createMovement = async (userId, type, amount, category, description) =>{

    if(!userId || !type || !amount || !category) throw new Error("Campos obligatorios!");
    if(!["ingreso", "egreso"].includes(type)) throw new Error("Tipo invalido");

    const categoryOk = typeof category === "string" && category.trim();
    const amountNumber = Number(amount);
    let descriptionOk = "";
    
    if(typeof description === "string") {descriptionOk = description.trim()}
    if(!categoryOk) throw new Error("Categoria inválida");
    if(Number.isNaN(amountNumber) || amountNumber <= 0) throw new Error("Monto inválido");

    const movement = await Movement.create({
        user: userId,
        type: type,
        amount: amountNumber,
        category: categoryOk,
        description: descriptionOk,   
    });
    return {id: movement._id, type: movement.type, amount: movement.amount, category: movement.category, description: movement.description, date: movement.date}
}


const getMovementByUser = async (userId) => {
    if(!userId) throw new Error("Datos requeridos");
    const movements = await Movement.find({user: userId});
    return movements;
    
}

const deleteMovement = async (movementId, userId) =>{
    if(!movementId || !userId) throw new Error("Datos requeridos");
    const result = await Movement.findOneAndDelete({_id: movementId, user: userId});
    if(!result) throw new Error("Movimiento no encontrado / no autorizado");
    return {message: "Movimiento eliminado con éxito!"};
}

const getMovementBalance = async (userId) =>{
    if(!userId) throw new Error("Datos requeridos");
    const movements = await Movement.find({user: userId});
    const totalIngresos = movements.filter(m => m.type === "ingreso").reduce((ac, actual) => { return ac + actual.amount}, 0);
    const totalEgresos = movements.filter(m => m.type === "egreso").reduce((ac, actual) => { return ac + actual.amount}, 0);

    return{
        totalIngresos,
        totalEgresos,
        Balance: totalIngresos - totalEgresos
    };
};

module.exports = {createMovement, getMovementByUser, deleteMovement, getMovementBalance};