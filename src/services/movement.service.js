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
module.exports = {createMovement};