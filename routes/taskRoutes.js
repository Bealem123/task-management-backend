// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/tasks", authMiddleware, createTask);
router.get("/tasks", authMiddleware, getTasks);
router.patch("/tasks/:id", authMiddleware, updateTask);
router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;
