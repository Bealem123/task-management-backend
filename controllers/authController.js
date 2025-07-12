const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await User.findOne({ email });
        if (exist) return res.status(400).json({ message: "Email already exists" });

        const user = await User.create({ name, email, password });
        const token = generateToken(user);
        res.status(201).json({
            message: "Signup successful",
            user: { id: user._id, name: user.name, email: user.email },
            token,
        });
    } catch (err) {
        res.status(500).json({ message: "Signup failed", error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = generateToken(user);
        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, name: user.name, email: user.email },
            token,
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
};


exports.profile = async (req, res) => {
    try {
        const user = req.user; // authMiddleware puts the user object in req
        res.status(200).json({
            name: user.name,
            email: user.email
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

