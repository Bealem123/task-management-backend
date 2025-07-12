const express = require("express");
const app = express();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use(cors());
app.use(express.json());

// Root route to respond on GET /
app.get("/", (req, res) => {
  res.send("Welcome to Task Manager Backend API");
});

app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);

module.exports = app;
