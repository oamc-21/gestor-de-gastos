const express = require('express');
const router = express.Router();
const { createMovement } = require("../controllers/movement.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createMovement);

module.exports = router;