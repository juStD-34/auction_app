const Auction = require("../Model/AuctionModel");
const User = require("../Model/UserModel");

module.exports.getAllAuction = async (req, res) => {
    try {
        const allAuction = await Auction.find({
            softDelete : false,
        });
        res.status(201).json({
            success: true,
            message: "Get all auction successfully",
            allAuction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }

    // res.status(200).json({ msg: "get all auction" });
}

module.exports.getAllBidder = async (req, res) => {
    try{
        const result = await User.find({role: "BIDDER"})
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Bidder not found",
            });
        }
        res.status(201).json({
            success: true,
            message: "Get all bidder successfully",
            result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    // const role = "BIDDER";
    // res.status(200).json({ msg: "get all user" });
}

module.exports.getAllSeller = async (req, res) => {
    try{
        const result = await User.find({role: "SELLER"})
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Seller not found",
            });
        }
        res.status(201).json({
            success: true,
            message: "Get all seller successfully",
            result
        });

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
    // const role = "SELLER";
    // res.status(200).json({ msg: "get all user" });
}


//done

module.exports.getIncomingAuction = async (req, res) => {
    try {
        const result = await Auction.find({
            timeStart: { $lt: Date.now() },
            softDelete: false
        })
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Incoming auction not found",
            });
        }

        res.status(201).json({
            success: true,
            message: "Get incoming auction successfully",
            result
        });
    }catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}
