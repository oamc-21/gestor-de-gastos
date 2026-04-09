const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/user.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.get("/me", authMiddleware, (req, res) =>{
    res.status(200).json({message: "Ruta protegida OK", user: req.user});
});
router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;