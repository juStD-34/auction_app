const User = require('../Model/UserModel')

module.exports.findUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json({
            success: true,
            message: "Get user successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}