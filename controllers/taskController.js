const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Task name is required" });
        }

        const task = new Task({
            name,
            user: req.user._id,
        });

        await task.save();

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Get all tasks for the logged-in user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update a task (name or status)
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const task = await Task.findOneAndUpdate(
            { _id: id, user: req.user._id },
            updates,
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found or not authorized" });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findOneAndDelete({ _id: id, user: req.user._id });

        if (!task) {
            return res.status(404).json({ message: "Task not found or not authorized" });
        }

        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
