const Auction = require("../Model/AuctionModel");

module.exports.createAuction = async (req, res) => {
    const { title, description, image, category } = req.body;
    try {
        const newAuction = await Auction.create({
            title,
            description,
            image,
            category,
        });
        res.status(201).json({
            success: true,
            message: "Auction created successfully",
            newAuction,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
}