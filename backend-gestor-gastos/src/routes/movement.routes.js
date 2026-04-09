const express = require('express');
const router = express.Router();
const { createMovement, getMovementByUser, deleteMovement, getMovementBalance } = require("../controllers/movement.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, getMovementByUser);
router.get("/balance", authMiddleware, getMovementBalance);

router.post("/", authMiddleware, createMovement);

router.delete("/:id", authMiddleware, deleteMovement);

module.exports = router;