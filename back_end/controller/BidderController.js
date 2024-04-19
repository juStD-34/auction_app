const Auction = require("../Model/AuctionModel");

module.exports.createBid = async (req, res) => {
    const { price } = req.body;
    console.log(req.user)
    userId = req.user._id
    try {
        const newBid = await Auction.findByIdAndUpdate(req.params.id, {
            $push: { participants: { userId, price } }
        }, { new: true });
        res.status(201).json({
            success: true,
            message: "Create bid successfully",
            newBid
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}

