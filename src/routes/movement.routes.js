const express = require('express');
const router = express.Router();
const { createMovement, getMovementByUser, deleteMovement } = require("../controllers/movement.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/", authMiddleware, createMovement);
router.get("/", authMiddleware, getMovementByUser);
router.delete("/:id", authMiddleware, deleteMovement);

module.exports = router;