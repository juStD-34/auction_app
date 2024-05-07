// This file will be deleted



const Auction = require("../Model/AuctionModel");
const Participants = require("../Model/ParticipantsModel");



module.exports.getAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findById(req.params.id);
        res.status(201).json({
            success: true,
            message: "Get auction successfully",
            auction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

module.exports.deleteAuctionById = async (req, res) => {
    try {
        const auction = await Auction.findByIdAndUpdate({softDelete: true});
        res.status(201).json({
            success: true,
            message: "Delete auction successfully",
            auction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}



module.exports = {findWinner};