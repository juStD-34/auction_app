const User = require('../Model/UserModel')
const Participant = require('../Model/ParticipantsModel')
const bcrypt = require('bcryptjs')
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

module.exports.getHighestPrice = async (req, res) => {
    try {
        const participants = await Participant.findOne({ auctionID: req.params.id })
        const result = participants.participants
        const highestPrice = result[result.length - 1]
        res.status(201).json({
            success: true,
            message: "Get highest price successfully",
            highestPrice
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.updateUserById = async (req, res) => {
    try {
        const{password, ...otherUpdate} = req.body
        const user = await User.findByIdAndUpdate(req.params.id, otherUpdate, { new: true });
        res.status(201).json({
            success: true,
            message: "Update user successfully",
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



module.exports.changePassword = async (req, res) => {
    try {
        const{password} = req.body
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.findByIdAndUpdate(req.params.id, {password: hashedPassword}, { new: true });
        res.status(201).json({
            success: true,
            message: "Update user successfully",
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

